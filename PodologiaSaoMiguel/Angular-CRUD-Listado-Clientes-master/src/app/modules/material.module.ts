import { NgModule } from '@angular/core'; 

import {
  MatButtonModule, 
  MatCheckboxModule,
  MatCardModule,
  MatSelectModule,
  MatInputModule,
  MatIconModule,
  MatListModule,
  MatDialogModule,
  MatDatepickerModule,
  MatNativeDateModule
} from '@angular/material';

@NgModule({
  imports: [
    MatButtonModule, 
    MatCheckboxModule,
    MatCardModule,
    MatSelectModule,
    MatInputModule,
    MatIconModule,
    MatListModule,
    MatDialogModule,
    MatDatepickerModule,
    MatNativeDateModule
  ],
  exports: [
    MatButtonModule, 
    MatCheckboxModule,
    MatCardModule,
    MatSelectModule,
    MatInputModule,
    MatIconModule,
    MatListModule,
    MatDialogModule,
    MatDatepickerModule,
    MatNativeDateModule
  ]
  
})

export class MaterialModule { }