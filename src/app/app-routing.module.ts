import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '',
    loadChildren: () => import('./features/login-page/login-page.module').then(m => m.LoginPageModule)
  },
  { path: 'register',
  loadChildren: () => import('./features/register-page/register-page.module').then(m => m.RegisterPageModule)
  },
  { path: 'home',
  loadChildren: () => import('./features/home-page/home-page.module').then(m => m.HomePageModule)
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
