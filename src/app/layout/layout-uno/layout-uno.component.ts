import { Component, OnInit } from '@angular/core';
import { NavbarBasicoComponent } from '../componentes/navbar-basico/navbar-basico.component';
import { DropdownBasicoComponent } from '../componentes/dropdown-basico/dropdown-basico.component';

@Component({
  selector: 'app-layout-uno',
  standalone: true,
  imports: [NavbarBasicoComponent, DropdownBasicoComponent],
  templateUrl: './layout-uno.component.html',
  styleUrl: './layout-uno.component.css',
})
export class LayoutUnoComponent implements OnInit {
  ngOnInit(): void {}
}
