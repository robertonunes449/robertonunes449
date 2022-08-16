import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, combineLatest, Observable } from 'rxjs';
import { filter, map, tap } from 'rxjs/operators';
import { Cliente } from './cliente';
import { Funcionario } from './funcionario';
import { FuncionarioService } from './funcionario.service';

@Injectable({
  providedIn: 'root'
})
export class ClienteService {

  readonly url = 'http://localhost:3000/clientes';
  private clienteSubject$: BehaviorSubject<Cliente[]> = new BehaviorSubject<Cliente[]>(null);
  private loaded: boolean = false;

  constructor(private http: HttpClient,
    private funcionarioService: FuncionarioService) { }

  get(nome = ''): Observable<Cliente[]> {
       if (!this.loaded) {
      combineLatest(
        this.http.get<Cliente[]>(this.url + `/${nome}`),
        this.funcionarioService.get())
      .pipe(
        tap(([clientes, funcionarios]) => console.log(clientes,funcionarios)),
        filter(([clientes, funcionarios]) => clientes!= null && funcionarios!= null),
        map(([clientes,funcionarios]) => {
            for(let c of clientes) {
              let ids = (c.funcionarios as string[]);
              c.funcionarios = ids.map((id) => funcionarios.find(func=>func._id==id));
            }
          return clientes;
        }),
        tap((clientes) => console.log(clientes))
      )
      .subscribe(this.clienteSubject$);

      this.loaded = true;
    }
    return this.clienteSubject$.asObservable();
  }

  add(clie: Cliente): Observable<Cliente> {
    let funcionarios = (clie.funcionarios as Funcionario[]).map(f=>f._id);
    return this.http.post<Cliente>(this.url, {...clie, funcionarios})
      .pipe(
        tap((c) => {
          this.clienteSubject$.getValue()
            .push({...clie, _id: c._id})
        })
      )
  }

  del(clie: Cliente): Observable<any> {
    return this.http.delete(`${this.url}/${clie._id}`)
      .pipe(
        tap(() => {
          let clientes = this.clienteSubject$.getValue();
          let i = clientes.findIndex(c=>c._id === clie._id);
          if (i>=0)
            clientes.splice(i, 1);
        })
      )
  }

  update(clie: Cliente): Observable<Cliente> {
    let funcionarios = (clie.funcionarios as Funcionario[]).map(f=>f._id);
    return this.http.patch<Cliente>(`${this.url}/${clie._id}`, {...clie, funcionarios})
    .pipe(
      tap(() => {
        let clientes = this.clienteSubject$.getValue();
        let i = clientes.findIndex(c=>c._id === clie._id);
        if (i>=0)
          clientes[i] = clie;
      })
    )
  }
}
