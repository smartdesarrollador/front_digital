import { Component, OnInit } from '@angular/core';
import { BannerContacto } from 'src/app/models/banner_contacto.model';
import { BannerContactoService } from 'src/app/services/banner-contacto.service';
import { environment } from 'src/environments/environment';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-banner-contacto',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './banner-contacto.component.html',
  styleUrl: './banner-contacto.component.css',
})
export class BannerContactoComponent implements OnInit {
  urlRaiz = environment.urlRaiz + '/';
  listBanners: any = [];
  constructor(private dataService: BannerContactoService) {}

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
