import { Injectable } from '@angular/core';
import { Client } from '../models/client';
import { ToastrService } from 'ngx-toastr';

@Injectable({
  providedIn: 'root'
})
export class ClientService {

  clients: [];

  constructor(
    private toastr: ToastrService
    ) { }

  addClient(value: Client): void{

    let a: Client[];
    let clientRef: Number;
    a = JSON.parse(localStorage.getItem('ls_clients')) || [];
    
    for (let i = 0; i < a.length; i++){
      if (a[i].dni === value.dni){
        clientRef = 1
        break;
      } 
    }

    if (clientRef != 1) {
      a.push(value);
      this.toastr.success('Agregado!', 'Cliente');
      setTimeout(() => {
        localStorage.setItem('ls_clients', JSON.stringify(a));
      }, 500);
    } else {
      this.toastr.warning('Dni ya Existe!', 'Cliente NO agregado!');
    }
    }

    updateClient(value: Client): void{

      let a: Client[];
      let clientRef: any;
      a = JSON.parse(localStorage.getItem('ls_clients')) || [];
      
      for (let i = 0; i < a.length; i++){
        if (a[i].dni === value.dni){
          clientRef = i;
          console.log(clientRef)
          break;
        } 
      }
  
      if (clientRef >= 0) {
        a[clientRef] = value;
        this.toastr.success('Actualizado!', 'Cliente');
        setTimeout(() => {
          localStorage.setItem('ls_clients', JSON.stringify(a));
        }, 500);
      } else {
        this.toastr.warning('Dni no es el mismo!', 'Cliente NO Actualizado!');
      }
      }

	// Removing cart from local
	deleteclient(client: Client) {
    const clients: Client[] = JSON.parse(localStorage.getItem('ls_clients'));
		for (let i = 0; i < clients.length; i++) {
			if (clients[i].dni === client.dni) {
        clients.splice(i, 1);
				break;
			}
		}
		// Guardar Clients de nuevoo con el item eliminado
    localStorage.setItem('ls_clients', JSON.stringify(clients));
  }
  
}