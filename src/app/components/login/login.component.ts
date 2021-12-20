import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { HttpClient } from "@angular/common/http";
import { LoginInterface } from "../../login.interface";
import { Router } from "@angular/router";

@Component({
  selector: 'app-contacts',
  templateUrl: './login.component.html',
  styleUrls: [ './login.component.css' ]
})
export class LoginComponent {
  loginForm: FormGroup;
  constructor( private fb: FormBuilder, private http: HttpClient, private router: Router ) {
    this.loginForm = this.fb.group({
      id: [ '' ],
      login: [ '', Validators.required ],
      password: [ '', Validators.required ],
    });
  }

  send() {
    const form = {
      login: this.loginForm.value.login,
      password: this.loginForm.value.password
    }
    this.http.get<LoginInterface>(`http://localhost:5050/login?login=${form.login}&password=${form.password}`).subscribe(res => {
      if(res.login === null && res.password === null) {
        alert( "Parola sau numele de utilizator este greșit" )
      } else {
        alert( "Logare reusită" );
        this.router.navigate(['/']);
        localStorage.setItem( 'dataLogin', res.id.toString() );
        this.loginForm.reset();
      }
    })
  }
}
