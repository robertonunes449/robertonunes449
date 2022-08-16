import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-form-array',
  templateUrl: './form-array.component.html',
  styleUrls: ['./form-array.component.css']
})
export class FormArrayComponent implements OnInit {

  clientForm = this.fb.group({
    firstName:[''],
    lastName:[''],
  address: this.fb.group({
    street:[''],
    city:[''],
    state:[''],
    }),
  phones: this.fb.array(['']),
  children: this.fb.array([])
  
  /*this.fb.group({
    name: [''],
    age: [''],
    })*/    
  });

  phones = this.clientForm.get('phones') as FormArray;
  children = this.clientForm.get('children') as FormArray;
  

  constructor(private fb: FormBuilder) { }

  ngOnInit() {
    
  }

  submit() {
    console.log(this.clientForm.value);
  }

  addPhone() {
    this.phones.push(this.fb.control(''));
  }

  addChild() {
    this.children.push(
      this.fb.group({
        name: [''],
        age:['']
      })
    )
  }
}
