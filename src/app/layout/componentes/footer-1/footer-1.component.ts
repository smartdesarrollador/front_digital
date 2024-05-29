import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Jumbotron1Component } from '../jumbotron-1/jumbotron-1.component';

@Component({
  selector: 'app-footer-1',
  standalone: true,
  imports: [RouterLink, Jumbotron1Component],
  templateUrl: './footer-1.component.html',
  styleUrl: './footer-1.component.css',
})
export class Footer1Component {}
