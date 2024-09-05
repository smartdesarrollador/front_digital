import { Component } from '@angular/core';
import { BannerEspecialidadComponent } from 'src/app/layout/componentes/banner-especialidad/banner-especialidad.component';
import { CardEspecialidadComponent } from 'src/app/layout/componentes/card-especialidad/card-especialidad.component';
import { JumbotronImagenComponent } from 'src/app/layout/componentes/jumbotron-imagen/jumbotron-imagen.component';

@Component({
  selector: 'app-especialidades',
  standalone: true,
  imports: [
    CardEspecialidadComponent,
    JumbotronImagenComponent,
    BannerEspecialidadComponent,
  ],
  templateUrl: './especialidades.component.html',
  styleUrl: './especialidades.component.css',
})
export class EspecialidadesComponent {}
