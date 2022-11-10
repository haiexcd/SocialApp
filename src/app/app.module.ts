import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { SharedModule } from './shared/shared.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { LoginPageModule } from './features/login-page/login-page.module';

import { HttpClientModule } from '@angular/common/http';
import { RegisterPageModule } from './features/register-page/register-page.module';
import { HomePageModule } from './features/home-page/home-page.module';
import { ProfilePageModule } from './features/profile-page/profile-page.module';
import { SettingsPageModule } from './features/settings-page/settings-page.module';
import { AdminPageModule } from './features/admin-page/admin-page.module';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,

    LoginPageModule,
    RegisterPageModule,
    HomePageModule,
    SharedModule,
    ProfilePageModule,
    SettingsPageModule,
    AdminPageModule,
    BrowserAnimationsModule,
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
