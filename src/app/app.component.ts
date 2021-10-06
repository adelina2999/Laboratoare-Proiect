import {Component, OnInit} from '@angular/core';
import { HttpClient } from "@angular/common/http";
import {PizzaInterface} from "./pizza.interface";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'List of pizzas';
  pizzas: PizzaInterface[] = [];
  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.http.get<PizzaInterface[]>('http://localhost:5050/pizzas').subscribe(res => {
      this.pizzas = res;
    })


  }
}
