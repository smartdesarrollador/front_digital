import { Component, OnInit } from '@angular/core';
import { NavbarBasicoComponent } from '../componentes/navbar-basico/navbar-basico.component';
import { DropdownBasicoComponent } from '../componentes/dropdown-basico/dropdown-basico.component';
import { ModalBasicoComponent } from '../componentes/modal-basico/modal-basico.component';
import { NavbarDropdownComponent } from '../componentes/navbar-dropdown/navbar-dropdown.component';
import { CarouselComponent } from '../componentes/carousel/carousel.component';
import { Card1Component } from '../componentes/card-1/card-1.component';
import { Footer1Component } from '../componentes/footer-1/footer-1.component';
import { PostCardComponent } from '../componentes/post-card/post-card.component';
import { Post1Component } from '../componentes/post-1/post-1.component';
import { Post2Component } from '../componentes/post-2/post-2.component';
import { PostGridComponent } from '../componentes/post-grid/post-grid.component';
import { Galeria1Component } from '../componentes/galeria-1/galeria-1.component';

@Component({
  selector: 'app-layout-uno',
  standalone: true,
  imports: [
    NavbarBasicoComponent,
    DropdownBasicoComponent,
    ModalBasicoComponent,
    NavbarDropdownComponent,
    CarouselComponent,
    Card1Component,
    Footer1Component,
    PostCardComponent,
    Post1Component,
    Post2Component,
    PostGridComponent,
    Galeria1Component,
  ],
  templateUrl: './layout-uno.component.html',
  styleUrl: './layout-uno.component.css',
})
export class LayoutUnoComponent implements OnInit {
  ngOnInit(): void {}
}
