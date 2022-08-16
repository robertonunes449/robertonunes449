import { EventEmitter, Injectable } from '@angular/core';
import { DepartmentService } from './department.service';
import { Product } from './Models/Product.model';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  static getProducts() {
    throw new Error('Method not implemented.');
  }

  public dataFromServer: any [] = [
    {id: 1, name: "Laptop" , department_id: 4, price: 40, description: 'Laptop Description'},
    {id: 1, name: "Shirt" , department_id: 1, price: 10, description: 'Shirt Description'},
    {id: 1, name: "Polo" , department_id: 1, price: 50, description: 'Polo Description'},
    {id: 1, name: "mouse" , department_id: 3, price: 30, description: 'mouse Description'},
  ];
  public products: Product[] = [];
  public nextID: number;

  onNewProduct: EventEmitter<Product> = new EventEmitter<Product>();

  constructor(
    private departmentService: DepartmentService)
    {
      for(let p of this.dataFromServer){
        this.products.push({
          id: p.id,
          name: p.name,
          description: p.description,
          price: p.price,
          department: this.departmentService.getDepartmentById(p.id)
        });
        this.nextID = p.id+1;
      }
     }

  getProducts() : Product[] {
    return this.products;
  }

  addProduct(p: Product) {
    let prod:Product = {...p, id: this.nextID++} ;
    this.products.push(prod);
    console.log(this.products);
    this. onNewProduct.emit(prod);
  }


}
