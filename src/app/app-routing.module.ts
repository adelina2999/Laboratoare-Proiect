import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MenuComponent } from "./components/menu/menu.component";
import { ContactsComponent } from "./components/contacts/contacts.component";
import { HomeComponent } from "./components/home/app-home";
import { AboutUsComponent } from "./components/aboutUs/aboutUs.component";
import { LoginComponent } from "./components/login/login.component";
import { EditPizzaComponent } from "./components/edit-pizza/edit-pizza.component";

const routes: Routes = [
  { path: 'menu', component: MenuComponent },
  { path: 'contacts', component: ContactsComponent },
  { path: '', component: HomeComponent },
  { path: 'about-us', component: AboutUsComponent },
  { path: 'login', component: LoginComponent },
  { path: 'edit-pizza/:id', component: EditPizzaComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
