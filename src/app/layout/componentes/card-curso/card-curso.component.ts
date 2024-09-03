import { Component, OnInit } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { Producto } from 'src/app/models/producto.model';
import { ProductoService } from 'src/app/services/producto.service';
import { environment } from 'src/environments/environment';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-card-curso',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './card-curso.component.html',
  styleUrl: './card-curso.component.css',
})
export class CardCursoComponent implements OnInit {
  urlRaiz = environment.urlRaiz + '/';
  listBanners: any = [];
  constructor(private dataService: ProductoService, private router: Router) {}

  ngOnInit(): void {
    this.loadBanners();
  }

  loadBanners() {
    return this.dataService.getCursos().subscribe((data: {}) => {
      console.log(data);
      this.listBanners = data;
    });
  }

  /* onDetail(dataProducto: Producto) {
    console.log(dataProducto);
    this.dataService.selectCategory = Object.assign({}, dataProducto);
    this.router.navigate(['/detalle'], {
      queryParams: { Id: dataProducto.id_producto },
    });
  } */

  /* onDetail(dataProducto: Producto) {
    console.log(dataProducto);
    this.dataService.selectCategory = Object.assign({}, dataProducto);

    let nombreConGuiones = '';
    if (dataProducto.nombre) {
      // Reemplazamos espacios por guiones
      nombreConGuiones = dataProducto.nombre.split(' ').join('-');
    }

    this.router.navigate(['/detalle'], {
      queryParams: { Id: nombreConGuiones },
    });
  } */

  onDetail(dataProducto: Producto) {
    console.log(dataProducto);
    this.dataService.selectCategory = Object.assign({}, dataProducto);

    let nombreConGuiones = '';
    if (dataProducto.nombre) {
      // Reemplazamos espacios por guiones en el nombre del curso
      nombreConGuiones = dataProducto.nombre.split(' ').join('-');
    }

    // Navegamos a la ruta con los parámetros Id y curso_nombre
    this.router.navigate([
      '/detalle',
      dataProducto.id_producto,
      nombreConGuiones,
    ]);
  }
}
