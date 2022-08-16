import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ClientService } from 'src/app/services/client.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-addclient',
  templateUrl: './addclient.component.html',
  styleUrls: ['./addclient.component.sass']
})
export class AddclientComponent implements OnInit {

  newClient: FormGroup;

  constructor(
    private clientService: ClientService
  ) { }

  ngOnInit() {
    this.newClient = new FormGroup({
      name: new FormControl('', [
        Validators.required,
        Validators.minLength(4),
        Validators.maxLength(20)
      ]),
      surname: new FormControl('', [
        Validators.required,
        Validators.minLength(4),
        Validators.maxLength(20)
      ]),
      date: new FormControl(''),
      country: new FormControl('', [
        Validators.required,
        Validators.minLength(2),
        Validators.maxLength(20)
      ]),
      dni: new FormControl('', [
        Validators.required,
        Validators.minLength(2),
        Validators.maxLength(15)
      ]),
      city: new FormControl('', [
        Validators.required,
        Validators.minLength(2),
        Validators.maxLength(20)
      ]),
      address: new FormControl('', [
        Validators.required,
        Validators.minLength(2),
        Validators.maxLength(40)
      ]),
      telephone: new FormControl('', [
        Validators.required,
        Validators.minLength(2),
        Validators.maxLength(18)
      ]),
      email: new FormControl('', [
        Validators.required,
        Validators.minLength(2),
        Validators.maxLength(30),
        Validators.pattern('^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$')
      ])
    });
  }

  addClient(){
    const form = this.newClient;
    if(form.valid){
      return this.clientService.addClient(
        form.value
      )
    }
  }


}
