import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { Funcionario } from '../funcionario';
import { FuncionarioService } from '../funcionario.service';

@Component({
  selector: 'app-funcionario',
  templateUrl: './funcionario.component.html',
  styleUrls: ['./funcionario.component.css']
})
export class FuncionarioComponent implements OnInit {

  funcNome: string = '';
  funcionarios: Funcionario[] = [
    {nome: "fulano 1", _id: "eita lasqueira"}
  ];
  private unsubscribe$: Subject<any> = new Subject();
  funcEdit: Funcionario = null;

  constructor(
    private funcionarioService: FuncionarioService,
    private snackBar: MatSnackBar) { }

  ngOnInit() {
    this.funcionarioService.get()
      .pipe( takeUntil(this.unsubscribe$))
      .subscribe((funcs) => this.funcionarios = funcs);
  }

  save() {
    if (this.funcEdit) {
     this.funcionarioService.update(
       {nome: this.funcNome,_id: this.funcEdit._id})
       .subscribe (
          (func) => {
            this.notify('Atualizado!'); 
          },
          (err) => {
            this.notify('Erro');
            console.error(err);
          })
    }
    else {
      this.funcionarioService.add({nome: this.funcNome})
      .subscribe(
        (func) => {
          console.log(func);
          this.clearFields();
          this.notify('Inserido!');
        },
        (err) => console.error(err))
    }
    
  }

  clearFields() {
    this.funcNome = '';
    this.funcEdit = null;
  }
  
  cancel() {

  }

  edit(func: Funcionario) {
    this.funcNome = func.nome;
    this.funcEdit = func; 
  }

  delete(func: Funcionario) {
    this.funcionarioService.del(func)
    .subscribe(
      () => this.notify('Removido'),
      (err) => this.notify(err.error.msg)
    )
  }

  notify(msg: string) {
    this.snackBar.open(msg, "OK", {duration: 2000});
  }

  ngDestroy() {
    this.unsubscribe$.next();
  }

}
