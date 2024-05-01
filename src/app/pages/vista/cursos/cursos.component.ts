import { Component } from '@angular/core';
import { CardCursoComponent } from 'src/app/layout/componentes/card-curso/card-curso.component';
import { CardEspecialidadComponent } from 'src/app/layout/componentes/card-especialidad/card-especialidad.component';
import { JumbotronImagenComponent } from 'src/app/layout/componentes/jumbotron-imagen/jumbotron-imagen.component';

@Component({
  selector: 'app-cursos',
  standalone: true,
  imports: [
    CardCursoComponent,
    CardEspecialidadComponent,
    JumbotronImagenComponent,
  ],
  templateUrl: './cursos.component.html',
  styleUrl: './cursos.component.css',
})
export class CursosComponent {}
