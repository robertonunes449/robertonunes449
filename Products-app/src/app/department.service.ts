import { Injectable } from '@angular/core';
import { Department } from './Models/Department.model';

@Injectable({
  providedIn: 'root'
})
export class DepartmentService {

  public departments: Department[] = [
    {id:1, name: "Clothing"},
    {id:2, name: "Books"},
    {id:3, name: "Electronics"},
    {id:4, name: "Computers"},
  ];

  public nextID: number = 5;

  constructor() { }

  getDepartments() : Department [] {
    return this.departments;
  }

  addDepartment(d : Department) {
    this.departments.push({...d, id: this.nextID++ });
    console.log(this.departments);
  }

  getDepartmentById(id : number): Department {
     return this.departments.find((d) => d.id == id);
  }

}
