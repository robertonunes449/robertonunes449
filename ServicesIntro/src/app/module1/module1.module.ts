import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ComponentComponent } from './component/component.component';
import { Componet2Component } from './componet2/componet2.component';
import { service1 } from './service1.service';



@NgModule({
  declarations: [ComponentComponent, Componet2Component],
  exports: [ComponentComponent, Componet2Component],
  imports: [
    CommonModule
  ],
  providers: [service1],
})
export class Module1Module { }
