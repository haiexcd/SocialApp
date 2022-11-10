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
  { path: 'profile',
  loadChildren: () => import('./features/profile-page/profile-page.module').then(m => m.ProfilePageModule)
  },
  {
    path: 'settings',
    loadChildren: () => import('./features/settings-page/settings-page.module').then(m => m.SettingsPageModule)
  },
  {
    path: 'admin',
    loadChildren: () => import('./features/admin-page/admin-page.module').then(m => m.AdminPageModule)
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
