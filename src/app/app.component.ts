import {Component, OnInit} from '@angular/core';
import { HttpClient } from "@angular/common/http";
import {UserInterface} from "./user.interface";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'List of users';
  users: UserInterface[] = [];
  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.http.get<UserInterface[]>('https://jsonplaceholder.typicode.com/users').subscribe(res => {
      this.users = res;
    })


  }
}
