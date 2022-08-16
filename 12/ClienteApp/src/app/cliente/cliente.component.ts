import { Component, OnInit, ViewChild, } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { Cliente } from '../cliente';
import { ClienteService } from '../cliente.service';
import { Funcionario } from '../funcionario';
import { FuncionarioService } from '../funcionario.service';

@Component({
  selector: 'app-cliente',
  templateUrl: './cliente.component.html',
  styleUrls: ['./cliente.component.css']
})

export class ClienteComponent implements OnInit {

  clienteForm: FormGroup = this.fb.group({
    _id:[null],
    nome: ['', [Validators. min(0)]],
    endereco: ['', [ Validators.min(0)]],
    bairro: ['', [ Validators.min(0)]],
    cidade: ['', [ Validators.min(0)]],
    funcionarios: [[]]    
  });    

  
  clientes: Cliente[] = [];
  funcionarios: Funcionario[] = [];
  

  private unsubscribe$: Subject<any> = new Subject<any>();

  constructor(
    private clienteService: ClienteService,
    private fb: FormBuilder,
    private funcionarioService: FuncionarioService,
    private snackBar: MatSnackBar,
    ) {}

  ngOnInit() {
    this.clienteService.get()
      .pipe(takeUntil(this.unsubscribe$))
      .subscribe((clies) => this.clientes = clies);
    this.funcionarioService.get()
      .pipe(takeUntil(this.unsubscribe$))
      .subscribe((funcs) => this.funcionarios = funcs);
  }

  ngOnDestroy() {
    this.unsubscribe$.next();
  }

  save() {
    let data = this.clienteForm.value;
    if (data._id != null) {
      this.clienteService.update(data)
        .subscribe(
          (c) => this.notify("Atualizado!!")
        );
    }
    else {
      this.clienteService.add(data)
        .subscribe(
          (c) => this.notify("Inserido!!")
        );
    }
    
    this.clienteForm.reset('button')

  }

  delete(c: Cliente) {
    this.clienteService.del(c)
      .subscribe(
        () => this.notify("Deleteado"), 
        (err) => console.log(err)
      )
  }

  edit(c: Cliente) {
    this.clienteForm.setValue(c);
  }
  
  notify(msg: string) {
    this.snackBar.open(msg, "OK" , {duration: 3000});
  }

  
 
}
