import { Component, OnInit } from '@angular/core';
import { BannerEvento } from 'src/app/models/banner_evento.model';
import { BannerEventoService } from 'src/app/services/banner-evento.service';
import { environment } from 'src/environments/environment';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-banner-evento',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './banner-evento.component.html',
  styleUrl: './banner-evento.component.css',
})
export class BannerEventoComponent implements OnInit {
  urlRaiz = environment.urlRaiz + '/';
  listBanners: any = [];
  constructor(private dataService: BannerEventoService) {}

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
