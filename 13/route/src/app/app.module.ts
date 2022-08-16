import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material.module';
import { BookComponent } from './book/book.component';
import { DvdComponent } from './dvd/dvd.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { RouterModule, Routes } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { DvdDetailComponent } from './dvd/dvd-detail/dvd-detail.component';
import { DvdFormComponent } from './dvd/dvd-form/dvd-form.component';
import { ReactiveFormsModule } from '@angular/forms';
import { BookDetailComponent } from './book/book-detail/book-detail.component';
import { BookAuthorsComponent } from './book/book-authors/book-authors.component';
import { ElectronicsModule } from './electronics/electronics.module';
/*
const appRoutes: Routes = [
  {path:'dvds', component: DvdComponent},
  {path:'books', component: BookComponent},
  {path: '', pathMatch: 'full', redirectTo: 'dvds'},
  {path:'**', component: PageNotFoundComponent}
]
*/
@NgModule({
  declarations: [
    AppComponent,
    BookComponent,
    DvdComponent,
    PageNotFoundComponent,
    DvdDetailComponent,
    DvdFormComponent,
    BookDetailComponent,
    BookAuthorsComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MaterialModule,
    //RouterModule.forRoot(appRoutes),
    //ElectronicsModule,
    AppRoutingModule,
    ReactiveFormsModule,
    //ElectronicsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
