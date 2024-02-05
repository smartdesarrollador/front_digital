import { Component, OnInit } from '@angular/core';
import { initFlowbite } from 'flowbite';

@Component({
  selector: 'app-navbar-dropdown',
  standalone: true,
  imports: [],
  templateUrl: './navbar-dropdown.component.html',
  styleUrl: './navbar-dropdown.component.css',
})
export class NavbarDropdownComponent implements OnInit {
  ngOnInit(): void {
    initFlowbite();
  }
}
