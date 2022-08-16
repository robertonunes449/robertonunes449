import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MainRoutingModule } from './main-routing.module';
import { PeopleComponent } from './people/people.component';
import { ProductsComponent } from './products/products.component';
import { MaterialModule } from '../material.module';


@NgModule({
  declarations: [PeopleComponent, ProductsComponent],
  imports: [
    CommonModule,
    MainRoutingModule,
    MaterialModule
  ]
})
export class MainModule { }
