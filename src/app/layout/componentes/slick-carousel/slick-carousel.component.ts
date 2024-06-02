import {
  Component,
  AfterViewInit,
  OnInit,
  ElementRef,
  ChangeDetectorRef,
} from '@angular/core';
import 'slick-carousel';
import { Router, RouterLink } from '@angular/router';
import { TestimonioService } from 'src/app/services/testimonio.service';
import { environment } from 'src/environments/environment';
import { CommonModule } from '@angular/common';

declare var $: any;

@Component({
  selector: 'app-slick-carousel',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './slick-carousel.component.html',
  styleUrls: ['./slick-carousel.component.css'],
})
export class SlickCarouselComponent implements OnInit, AfterViewInit {
  urlRaiz = environment.urlRaiz + '/';
  listTestimonios: any[] = []; // Initialize as empty array

  constructor(
    private dataService: TestimonioService,
    private router: Router,
    private cdr: ChangeDetectorRef,
    private el: ElementRef
  ) {}

  ngOnInit(): void {
    this.loadTestimonios();
  }

  loadTestimonios() {
    this.dataService.getCategories().subscribe((data: any) => {
      console.log(data);
      this.listTestimonios = data;
      this.cdr.detectChanges(); // Forcing change detection might not be strictly necessary here

      // Initialize Slick only after data is available
      this.initializeSlick();
    });
  }

  ngAfterViewInit(): void {
    // No need to call initializeSlick here (handled in loadTestimonios)
  }

  private initializeSlick() {
    if (this.listTestimonios.length > 0) {
      const multipleItems =
        this.el.nativeElement.querySelector('.multiple-items');
      if (multipleItems) {
        $(multipleItems).slick({
          dots: true,
          infinite: true,
          speed: 300,
          slidesToShow: 4,
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
                slidesToShow: 4,
                slidesToScroll: 1,
              },
            },
          ],
        });
      }
    }
  }
}
