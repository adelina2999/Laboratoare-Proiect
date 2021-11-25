import { Component } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {HttpClient} from "@angular/common/http";
import {RezervariInterface} from "../../rezervari.interface";

@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.css']
})
export class ContactsComponent {
  rezervariForm: FormGroup;
  constructor(private fb: FormBuilder, private http: HttpClient) {
    this.rezervariForm = this.fb.group({
      id: [''],
      nume: ['', Validators.required],
      cati_oameni: ['', Validators.compose([Validators.required, Validators.max(15)])],
      data: ['', Validators.required],
      mesaj: ['']
    });
  }

  trimiteRezervare() {
    const form = {
      cati_oameni: this.rezervariForm.value.cati_oameni,
      data: this.rezervariForm.value.data,
      mesaj: this.rezervariForm.value.mesaj,
      nume: this.rezervariForm.value.nume
    }
    this.http.post<RezervariInterface>('http://localhost:5050/rezervari', form).subscribe(res => {
      if(res.data) {
        alert("Mesajul a fost transmis!!!");
      }
      this.rezervariForm.reset();
    })
  }
}
