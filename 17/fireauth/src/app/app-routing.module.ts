import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuardService } from './auth/auth-guard.service';
import { NotFoundComponent } from './not-found/not-found.component';


const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: '/main/people'},
  { path: 'main', loadChildren: './main/main.module#MainModule', canActivate: [AuthGuardService] },
  { path: '**', component: NotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
