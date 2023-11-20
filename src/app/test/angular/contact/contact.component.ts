import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment.development';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css'],
})
export class ContactComponent implements OnInit {
  contactform!: FormGroup;
  cargando = false;
  enviado = false;
  API_URL = environment.apiUrl_domain;

  constructor(public formBuilder: FormBuilder, private http: HttpClient) {}

  ngOnInit(): void {
    this.createContactForm();
  }

  private createContactForm(): void {
    this.contactform = this.formBuilder.group({
      name: ['', [Validators.required]],
      subject: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.email]],
      message: ['', [Validators.required]],
    });
  }

  sendContactForm(): void {
    if (this.contactform.invalid) {
      Object.values(this.contactform.controls).forEach((control) => {
        if (control instanceof FormGroup) {
          // tslint:disable-next-line:no-shadowed-variable
          Object.values(control.controls).forEach((control) =>
            control.markAsTouched()
          );
        } else {
          control.markAsTouched();
        }
      });
      return;
    }
    const url = this.API_URL + '/contact123';
    this.cargando = true;
    this.http.post(url, this.contactform.value).subscribe((value) => {
      this.cargando = false;
      this.enviado = true;
      this.contactform.reset();
      console.log(value);
    });
    console.log(this.contactform.value);
  }
}
