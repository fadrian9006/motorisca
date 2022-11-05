import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [{
  path: '',
  children: [
    // Authentication Management
    {
      path: 'auth',
      loadChildren: () => import('./features/authentication/authentication-routing.module').then(m => m.AuthenticationRoutingModule)
    },
  ]
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
