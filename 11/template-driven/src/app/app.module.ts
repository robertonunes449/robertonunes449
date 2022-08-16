import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from './material.module';
import { TemplateDrivenFormsComponent } from './template-driven-forms/template-driven-forms.component';
import { FormNativeValidationComponent } from './form-native-validation/form-native-validation.component';
import { FormValidationComponent } from './form-validation/form-validation.component';
import { FormControlComponent } from './form-control/form-control.component';
import { FormGroupComponent } from './form-group/form-group.component';
import { FormBuilderComponent } from './form-builder/form-builder.component';
import { FormArrayComponent } from './form-array/form-array.component';
import { ReactiveFormValidationComponent } from './reactive-form-validation/reactive-form-validation.component';

@NgModule({
  declarations: [
    AppComponent,
    TemplateDrivenFormsComponent,
    FormNativeValidationComponent,
    FormValidationComponent,
    FormControlComponent,
    FormGroupComponent,
    FormBuilderComponent,
    FormArrayComponent,
    ReactiveFormValidationComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    MaterialModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
