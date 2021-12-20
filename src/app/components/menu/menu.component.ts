import { Component, OnInit } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { PizzaInterface } from "../../pizza.interface";
import { PastaInterface } from "../../pasta.interface";
import { StartereInterface } from "../../startere.interface";

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: [ './menu.component.css' ]
})
export class MenuComponent implements OnInit {
  titlePizza = 'Pizza';
  titlePasta = 'Pasta';
  titleStartere = 'Startere';
  pizzas: PizzaInterface[] = [];
  pastas: PastaInterface[] = [];
  startere: StartereInterface[] = [];

  constructor( private http: HttpClient ) {
  }

  ngOnInit(): void {
    this.getPizza()
    this.getPasta()
    this.getStartere()
  }

  getPizza() {
    this.http.get<PizzaInterface[]>('http://localhost:5050/pizzas').subscribe(res => {
      this.pizzas = res;
    })
  }

  getPasta() {
    this.http.get<PastaInterface[]>('http://localhost:5050/pastas').subscribe(res => {
      this.pastas = res;
    })
  }

  getStartere() {
    this.http.get<StartereInterface[]>('http://localhost:5050/startere').subscribe(res => {
      this.startere = res;
    })
  }

  isLoggedIn() {
    return localStorage.getItem('dataLogin');
  }
}

