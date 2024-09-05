import { Component, OnInit } from '@angular/core';
import { BannerCurso } from 'src/app/models/banner_curso.model';
import { BannerCursoService } from 'src/app/services/banner-curso.service';
import { environment } from 'src/environments/environment';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-banner-curso',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './banner-curso.component.html',
  styleUrl: './banner-curso.component.css',
})
export class BannerCursoComponent implements OnInit {
  urlRaiz = environment.urlRaiz + '/';
  listBanners: any = [];
  constructor(private dataService: BannerCursoService) {}

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
