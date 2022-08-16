import { Component, OnInit } from '@angular/core';
import { DepartmentService } from '../department.service';
import { Department } from '../Models/Department.model';
import { Product } from '../Models/Product.model';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-product-form',
  templateUrl: './product-form.component.html',
  styleUrls: ['./product-form.component.css']
})
export class ProductFormComponent implements OnInit {
 name: string;
  department: Department;
  price: number;
  description: string;
  departments: Department[];
  
  constructor(
    public productService: ProductService,
    public departmentService: DepartmentService )
    { }

 
  ngOnInit(): void {
    this.departments = this.departmentService.getDepartments();
  }

  save(){

    this.productService.addProduct({
      name: this.name,
      price: this.price,
      description: this.description,
      department: this.department
    });
    this.clear();
  }

  clear(){

    this.name = "";
    this.price = 0;
    this.description = "";
    this.department = null;
    
  }
}
