import { Component } from "@angular/core";

@Component({
  selector: 'app-header',
  templateUrl: './app-header.html',
  styleUrls: ['./app-header.css']
})

export class AppHeader {

  isLoggedIn() {
    return localStorage.getItem('dataLogin');
  }

  delogare() {
    localStorage.removeItem('dataLogin');
    this.isLoggedIn();
    alert("Delogare");
  }
}
