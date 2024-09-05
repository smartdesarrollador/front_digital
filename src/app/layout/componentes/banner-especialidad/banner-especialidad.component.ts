import { Component, OnInit } from '@angular/core';
import { BannerEspecialidad } from 'src/app/models/banner_especialidad.model';
import { BannerEspecialidadService } from 'src/app/services/banner-especialidad.service';
import { environment } from 'src/environments/environment';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-banner-especialidad',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './banner-especialidad.component.html',
  styleUrl: './banner-especialidad.component.css',
})
export class BannerEspecialidadComponent implements OnInit {
  urlRaiz = environment.urlRaiz + '/';
  listBanners: any = [];
  constructor(private dataService: BannerEspecialidadService) {}

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
