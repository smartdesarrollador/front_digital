import { Component, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Producto } from 'src/app/models/producto.model';
import { ProductoService } from 'src/app/services/producto.service';
import { environment } from 'src/environments/environment';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-card-especialidad',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './card-especialidad.component.html',
  styleUrl: './card-especialidad.component.css',
})
export class CardEspecialidadComponent implements OnInit {
  urlRaiz = environment.urlRaiz + '/';
  listBanners: any = [];
  constructor(private dataService: ProductoService) {}

  ngOnInit(): void {
    this.loadBanners();
  }

  loadBanners() {
    return this.dataService.getEspecialidades().subscribe((data: {}) => {
      console.log(data);
      this.listBanners = data;
    });
  }
}
