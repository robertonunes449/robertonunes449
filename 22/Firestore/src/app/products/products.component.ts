import { Component, ElementRef, OnInit, ViewChild, ViewChildren } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material';
import { Observable } from 'rxjs';
import { Product } from '../model/product.model';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  products$: Observable<Product[]>;
  filterProducts$: Observable<Product[]>;
  displayedColumns = ['name', 'price', 'stock', 'operations'];

  @ViewChild('Name',{static:false})productName: ElementRef;
   //productName: ElementRef;

  productForm = this.fb.group({
    id:[undefined],
    name:['',[Validators.required]],
    stock:['',[Validators.required]],
    price:['',[Validators.required]],
  })

  constructor(
    private fb: FormBuilder,
    private productService: ProductService,
    private snackBar: MatSnackBar) { }

  ngOnInit() {
    
    this.products$ = this.productService.getProdcuts();
  }

  onSubmit(){
    let p: Product = this.productForm.value;
        if (!p.id) {
          this.addProduct(p)
        }
        else {
          this.updateProduct(p);
        }
  }

   addProduct(p: Product) {
    this.productService.addProduct(p)
      .then(()=> {
        this.snackBar.open('product added.', 'OK', {duration: 2000});
        this.productForm.reset({name: '', stock: '', price: '', id: undefined});
        this.productName.nativeElement.focus();
      })
      .catch(()=> {
        this.snackBar.open('Error on submit the product', 'OK', {duration: 2000});
      })
  }

  updateProduct(p: Product) {
    this.productService.updateProduct(p)
    .then(()=> {
      this.snackBar.open('Product Updated!!', 'OK', {duration: 2000});
      this.productForm.reset({name: '', stock: '', price: '', id: undefined});
      this.productName.nativeElement.focus();
    })
    .catch((e)=> {
      console.log(e);
      this.snackBar.open('Error updating the product','OK', {duration: 2000});
    })
  }

  edit(p: Product) {
    this.productForm.setValue(p);
  }

  del(p: Product) {
    this.productService.deleteProduct(p)
      .then(()=> {
        this.snackBar.open('Product has been Deleted', 'OK', {duration: 2000});
      })
      .catch((e)=> {
        console.log(e);
        this.snackBar.open('Error when trying to remove the product','OK', {duration: 2000});
      })
  }

  filter(event) {
    this.filterProducts$ = this.productService.searchByName(event.target.value);
  }

}
