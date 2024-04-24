import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import { Producto } from 'src/app/models/producto.model';
import { ProductoService } from 'src/app/services/producto.service';
import { CommonModule } from '@angular/common';
import {
  HttpClient,
  HttpEvent,
  HttpRequest,
  HttpResponse,
  HttpClientModule,
} from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Router, ActivatedRoute, RouterLink } from '@angular/router';
import Swal from 'sweetalert2';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-ver-curso',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    RouterLink,
  ],
  templateUrl: './ver-curso.component.html',
  styleUrl: './ver-curso.component.css',
})
export class VerCursoComponent implements OnInit {
  listCursos: any = [];
  valor_id_producto: any;
  urlRaiz = environment.urlRaiz + '/';

  constructor(
    private dataService: ProductoService,
    private route: ActivatedRoute
  ) {
    this.listCursos = this.dataService.selectCategory;
  }

  ngOnInit(): void {
    /*  this.loadCategories(); */

    this.route.queryParams.subscribe((params) => {
      const categoryId = params['categoryId'];
      this.valor_id_producto = categoryId;
    });
  }

  /* loadCategories() {
    return (this.listCursos = this.dataService.selectCategory);
  } */
}
