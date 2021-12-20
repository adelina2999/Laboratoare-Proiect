import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { HttpClient } from "@angular/common/http";
import { ActivatedRoute, Router } from "@angular/router";
import { PizzaInterface } from "../../pizza.interface";

@Component({
  selector: 'app-contacts',
  templateUrl: './edit-pizza.component.html',
  styleUrls: [ './edit-pizza.component.css' ]
})
export class EditPizzaComponent implements OnInit {

  pizzaForm: FormGroup;
  constructor( private fb: FormBuilder, private http: HttpClient, private route: ActivatedRoute,
              private router: Router ) {
    this.pizzaForm = this.fb.group({
      id_pizza: [ '' ],
      name: [ '', Validators.required ],
      price: [ '', Validators.required ],
      in_stock: [ '', Validators.required ],
      ingrediente: [ '', Validators.required ],
      greutate: [ '', Validators.required ],
    });
  }

  ngOnInit(): void {
    this.route.queryParams.subscribe(res => {
      this.pizzaForm.setValue( res )
    })
  }

  editare() {
    const form = {
      id_pizza: this.pizzaForm.value.id_pizza,
      name: this.pizzaForm.value.name,
      price: this.pizzaForm.value.price,
      in_stock: this.pizzaForm.value.in_stock,
      ingrediente: this.pizzaForm.value.ingrediente,
      greutate: this.pizzaForm.value.greutate
    }

    this.http.post<PizzaInterface>(`http://localhost:5050/pizza`, form).subscribe(res => {
      this.router.navigate([ 'menu' ]);
    })
  }
}
