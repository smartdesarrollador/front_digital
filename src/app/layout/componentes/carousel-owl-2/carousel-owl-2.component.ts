import { Component } from '@angular/core';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { OwlOptions } from 'ngx-owl-carousel-o';

@Component({
  selector: 'app-carousel-owl-2',
  standalone: true,
  imports: [CarouselModule],
  templateUrl: './carousel-owl-2.component.html',
  styleUrl: './carousel-owl-2.component.css',
})
export class CarouselOwl2Component {
  customOptions: OwlOptions = {
    /* animateIn: 'animate__animated animate__fadeIn',
    animateOut: 'animate__animated animate__zoomOut', */
    loop: true,
    mouseDrag: false,
    touchDrag: false,
    pullDrag: false,
    dots: false,
    navSpeed: 700,
    margin: 0,

    autoplay: true,

    autoplayTimeout: 4000,

    navText: ['<', '>'],

    responsive: {
      0: {
        items: 1,
      },
      400: {
        items: 1,
      },
      740: {
        items: 2,
      },
      940: {
        items: 3,
      },
    },
    nav: true,
  };
}
