import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginPageComponent } from './login-page/login-page.component';
import {HttpClientModule} from "@angular/common/http";
import {FormsModule} from "@angular/forms";
import { ProfileComponent } from './profile/profile.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginPageComponent,
    ProfileComponent
  ],
    imports: [
      FormsModule,

      BrowserModule,
        AppRoutingModule,
        HttpClientModule,



    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
