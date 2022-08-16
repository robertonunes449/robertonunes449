import { Component, OnInit } from '@angular/core';
import { DepartmentService } from '../department.service';

@Component({
  selector: 'app-department-forms',
  templateUrl: './department-forms.component.html',
  styleUrls: ['./department-forms.component.css']
})
export class DepartmentFormsComponent implements OnInit {

  depName: string;

  constructor(public departmentService : DepartmentService) { }

  ngOnInit(): void {
  }

  save(){

    this.departmentService.addDepartment({
      name: this.depName
      
    });
    this.clear();

  }

  clear(){

    this.depName = "";

  }

}
