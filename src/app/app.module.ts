import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import  { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from './app.component';
import { AppHeader } from "./components/header/app-header";
import { ContactsComponent } from "./components/contacts/contacts.component";
import { MenuComponent } from "./components/menu/menu.component";
import { HttpClientModule } from "@angular/common/http";

@NgModule({
  declarations: [
    AppComponent,
    ContactsComponent,
    MenuComponent,
    AppHeader
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule,
    AppRoutingModule
  ],
  exports: [RouterModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
