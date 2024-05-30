import { Component, AfterViewInit } from '@angular/core';
import 'slick-carousel';
import * as $ from 'jquery';

@Component({
  selector: 'app-slick-carousel',
  standalone: true,
  imports: [],
  templateUrl: './slick-carousel.component.html',
  styleUrl: './slick-carousel.component.css',
})
export class SlickCarouselComponent implements AfterViewInit {
  ngAfterViewInit(): void {
    (<any>$('.multiple-items')).slick({
      dots: true,
      infinite: true,
      speed: 300,
      slidesToShow: 3,
      slidesToScroll: 1,
      adaptiveHeight: true,
      arrows: true,
      responsive: [
        {
          breakpoint: 768,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
          },
        },
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 1,
          },
        },
      ],
    });
  }
}
