import { Component, OnInit } from '@angular/core';
import { BannerSolucionService } from 'src/app/services/banner-solucion.service';
import { BannerSolucion } from 'src/app/models/banner_solucion.model';
import { environment } from 'src/environments/environment';
import { CommonModule } from '@angular/common';
import { SolucionService } from 'src/app/services/solucion.service';

@Component({
  selector: 'app-banner-solucion',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './banner-solucion.component.html',
  styleUrl: './banner-solucion.component.css',
})
export class BannerSolucionComponent implements OnInit {
  urlRaiz = environment.urlRaiz + '/';
  listBanners: any = [];
  constructor(private dataService: BannerSolucionService) {}

  ngOnInit(): void {
    this.loadBanners();
  }

  loadBanners() {
    return this.dataService.getCategories().subscribe((data: {}) => {
      console.log(data);
      this.listBanners = data;
    });
  }
}
