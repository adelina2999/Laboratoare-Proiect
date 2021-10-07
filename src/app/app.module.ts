import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from './app.component';
import { AppHeader } from "./components/header/app-header";
import { ContactsComponent } from "./components/contacts/contacts.component";
import { MenuComponent } from "./components/menu/menu.component";
import { HttpClientModule } from "@angular/common/http";
import { HomeComponent } from "./components/home/app-home";
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HashLocationStrategy, LocationStrategy } from '@angular/common';
import { AboutUsComponent } from "./components/aboutUs/aboutUs.component";

@NgModule({
  declarations: [
    AppComponent,
    ContactsComponent,
    MenuComponent,
    AppHeader,
    HomeComponent,
    AboutUsComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule,
    AppRoutingModule,
    NgbModule
  ],
  exports: [RouterModule],
  providers: [{provide: LocationStrategy, useClass: HashLocationStrategy}],
  bootstrap: [AppComponent]
})
export class AppModule { }
