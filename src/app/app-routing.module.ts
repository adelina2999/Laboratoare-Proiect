import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {MenuComponent} from "./components/menu/menu.component";
import {ContactsComponent} from "./components/contacts/contacts.component";
import { HomeComponent } from "./components/home/app-home";

const routes: Routes = [
  { path: 'menu', component: MenuComponent },
  { path: 'contacts', component: ContactsComponent },
  { path: '', component: HomeComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
