import { Component, OnInit, Renderer2 } from '@angular/core';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { OwlOptions } from 'ngx-owl-carousel-o';
import { Solucion } from 'src/app/models/solucion.model';
import { SolucionService } from 'src/app/services/solucion.service';
import { environment } from 'src/environments/environment';
import { CommonModule } from '@angular/common';
import { ClipboardModule } from 'ngx-clipboard';
import { BannerSolucionComponent } from 'src/app/layout/componentes/banner-solucion/banner-solucion.component';

@Component({
  selector: 'app-solucion',
  standalone: true,
  imports: [CommonModule, ClipboardModule, BannerSolucionComponent],
  templateUrl: './solucion.component.html',
  styleUrl: './solucion.component.css',
})
export class SolucionComponent implements OnInit {
  urlRaiz = environment.urlRaiz + '/';
  listBanners: any = [];

  constructor(
    private dataService: SolucionService,
    private renderer: Renderer2
  ) {}

  ngOnInit(): void {
    this.loadBanners();
  }

  loadBanners() {
    return this.dataService.getCategories().subscribe((data: any) => {
      this.listBanners = data;
    });
  }

  loadHubSpotForm(scriptContent: string, index: number) {
    const script = this.renderer.createElement('script');
    script.type = 'text/javascript';
    script.charset = 'utf-8';

    // Asignar el código de HubSpot (item.codigo) al script
    script.text = scriptContent;

    // Definir el contenedor donde se cargará el formulario
    const formContainer = document.getElementById(`formContainer-${index}`);

    if (formContainer) {
      formContainer.innerHTML = ''; // Limpiar cualquier contenido previo
      this.renderer.appendChild(formContainer, script);
    }
  }

  // Función que se ejecutará cuando se haga clic en el botón
  onButtonClick(item: any, index: number) {
    if (item.codigo) {
      this.loadHubSpotForm(item.codigo, index); // Cargar el script del item
    }
  }
}
