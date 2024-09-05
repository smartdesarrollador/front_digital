import { Component, OnInit, Renderer2 } from '@angular/core';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { OwlOptions } from 'ngx-owl-carousel-o';
import { Evento } from 'src/app/models/evento.model';
import { EventoService } from 'src/app/services/evento.service';
import { environment } from 'src/environments/environment';
import { CommonModule } from '@angular/common';
import { ClipboardModule } from 'ngx-clipboard';
import { BannerEventoComponent } from 'src/app/layout/componentes/banner-evento/banner-evento.component';

@Component({
  selector: 'app-evento',
  standalone: true,
  imports: [CommonModule, ClipboardModule, BannerEventoComponent],
  templateUrl: './evento.component.html',
  styleUrl: './evento.component.css',
})
export class EventoComponent implements OnInit {
  urlRaiz = environment.urlRaiz + '/';
  listBanners: any = [];

  constructor(
    private dataService: EventoService,
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

/* onCopySuccess() {
    alert('¡Título copiado al portapapeles!');
  } */
