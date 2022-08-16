import { Component, OnInit, Inject } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { MatDialogRef,  MAT_DIALOG_DATA} from '@angular/material';
import { ClientService } from 'src/app/services/client.service';


@Component({
  selector: 'app-editclient',
  templateUrl: './editclient.component.html',
  styleUrls: ['./editclient.component.sass']
})
export class EditclientComponent implements OnInit {

  editClient: FormGroup;

  constructor(
    private clientService: ClientService,
    public dialogRef: MatDialogRef<EditclientComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any) {
  }


  ngOnInit() {
    this.editClient = new FormGroup({
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
      date: new FormControl('',[
        Validators.required
      ]),
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
    this.getClient();
  }

  getClient(){
    this.editClient.get('name').setValue(this.data.name);
    this.editClient.get('surname').setValue(this.data.surname);
    this.editClient.get('date').setValue(this.data.date);
    this.editClient.get('country').setValue(this.data.country);
    this.editClient.get('dni').setValue(this.data.dni);
    this.editClient.get('city').setValue(this.data.city);
    this.editClient.get('address').setValue(this.data.address);
    this.editClient.get('telephone').setValue(this.data.telephone);
    this.editClient.get('email').setValue(this.data.email);
  }

  updateClient(){
    const form = this.editClient;
    if(form.valid){
     return this.clientService.updateClient(form.value)
    }
  }

}
