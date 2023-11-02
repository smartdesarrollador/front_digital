import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  title: string = 'hola mundo';

  ngOnInit(): void {
    /*  console.log('Inicio del Proyecto');
    this.getPost(); */

    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  /*   getPost() {
    fetch('http://localhost/back_legajo/public/api/test_api').then((response) =>
      console.log(response)
    );
  } */

  /* getPost() {
    fetch('http://localhost/back_legajo/public/api/test_api')
      .then((response) => response.json())
      .then((json) => console.log(json));
  } */
}
