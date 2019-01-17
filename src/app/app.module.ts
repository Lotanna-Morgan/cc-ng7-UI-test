import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SignuppageComponent } from './signuppage/signuppage.component';
import { ResultspageComponent } from './resultspage/resultspage.component';

@NgModule({
  declarations: [
    AppComponent,
    SignuppageComponent,
    ResultspageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
