//Modules
import { BrowserModule } from '@angular/platform-browser';
import { NgModule, LOCALE_ID } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './modules/material.module';
import { ReactiveFormsModule } from '@angular/forms';
import { ToastrModule } from 'ngx-toastr';
import { MatTableModule, MatPaginatorModule, MatSortModule } from '@angular/material';
//Components
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { HomeComponent } from './components/home/home.component';
import { FooterComponent } from './components/footer/footer.component';
import { AddclientComponent } from './dialogs/addclient/addclient.component';
import { EditclientComponent } from './dialogs/editclient/editclient.component';

//
import es from '@angular/common/locales/es';
import { registerLocaleData } from '@angular/common';

registerLocaleData(es);



@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    FooterComponent,
    AddclientComponent,
    EditclientComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MaterialModule,
    BrowserAnimationsModule,
    MatTableModule,
    MatSortModule,
    MatPaginatorModule,
    FlexLayoutModule,
    ReactiveFormsModule,
    ToastrModule.forRoot()
  ],
  providers: [{provide: LOCALE_ID, useValue: 'es-AR'}],
  bootstrap: [AppComponent],
  entryComponents: [AddclientComponent, EditclientComponent]
})
export class AppModule { }
