import { Component } from '@angular/core';
import { NavbarBasicoComponent } from '../componentes/navbar-basico/navbar-basico.component';

@Component({
  selector: 'app-layout-uno',
  standalone: true,
  imports: [NavbarBasicoComponent],
  templateUrl: './layout-uno.component.html',
  styleUrl: './layout-uno.component.css',
})
export class LayoutUnoComponent {}
