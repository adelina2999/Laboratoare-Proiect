import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MenuComponent } from "./components/menu/menu.component";
import { ContactsComponent } from "./components/contacts/contacts.component";
import { HomeComponent } from "./components/home/app-home";
import { AboutUsComponent } from "./components/aboutUs/aboutUs.component";

const routes: Routes = [
  { path: 'menu', component: MenuComponent },
  { path: 'contacts', component: ContactsComponent },
  { path: '', component: HomeComponent },
  { path: 'about-us', component: AboutUsComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
