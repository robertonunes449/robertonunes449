import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTable } from '@angular/material/table';
import { Product } from '../Models/Product.model';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-products-table',
  templateUrl: './products-table.component.html',
  styleUrls: ['./products-table.component.css']
})
export class ProductsTableComponent implements OnInit {

  @ViewChild(MatTable) datatable: MatTable<any>; 
  products: Product[];
  prodColumns: string[] = ["id","name","price","department","description"];
   
  constructor(public productService: ProductService ) { 


  }

  ngOnInit(): void {
    this.products = this.productService.getProducts();
    this.productService.onNewProduct
    .subscribe((p)  => {
      this.datatable.renderRows();
    });
  }


}
