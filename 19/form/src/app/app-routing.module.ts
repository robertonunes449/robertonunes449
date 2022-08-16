import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DataDrivenComponent } from './data-driven/data-driven.component';
import { TemplateDrivenComponent } from './template-driven/template-driven.component';


const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo:'templateForm'},
  { path: 'templateForm', component: TemplateDrivenComponent},
  { path: 'dataForm', component: DataDrivenComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
