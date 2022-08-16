import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Funcionario } from './funcionario';
import { delay, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class FuncionarioService {

  readonly url = 'http://localhost:3000/funcionarios';
  private funcionariosSubject$: BehaviorSubject<Funcionario[]> = new BehaviorSubject<Funcionario[]>(null);
  private loaded: boolean = false;

  constructor(private http: HttpClient) { }

  get(): Observable<Funcionario[]> {
    if(!this.loaded) {
      this.http.get<Funcionario[]>(this.url)
        .pipe( 
        tap((funcs) => console.log(funcs)),
        delay(1000)
        )
        .subscribe(this.funcionariosSubject$);
      this.loaded = true;
    }
    return this.funcionariosSubject$.asObservable();
  }

  add(f: Funcionario): Observable<Funcionario> {
    return this.http.post<Funcionario>(this.url, f)
    .pipe(
      tap((func: Funcionario) => this.funcionariosSubject$.getValue().push(func))
    )
  }

  del(func: Funcionario): Observable<any> {
    return this.http.delete(`${this.url}/${func._id}`)
      .pipe( tap(() => {
        let funcionarios = this.funcionariosSubject$.getValue();
        let i = funcionarios.findIndex(f => f._id === func._id);
        if (i>=0)
          funcionarios.splice(i,1);
      }))
  }

  update(func: Funcionario): Observable<Funcionario> {
    return this.http.patch<Funcionario>(`${this.url}/${func._id}`, func)
      .pipe(
        tap((f) => {
          let funcionarios = this.funcionariosSubject$.getValue();
          let i = funcionarios.findIndex(f => f._id === func._id);
        if (i>=0)
          funcionarios[i].nome = f.nome;
        })
      )
  }
}
