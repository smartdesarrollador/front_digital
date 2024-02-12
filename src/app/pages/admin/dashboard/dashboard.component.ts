import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { PermissionDirective } from 'src/app/directives/permission.directive';
import { Toast1Component } from 'src/app/layout/componentes/toast-1/toast-1.component';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [CommonModule, PermissionDirective, Toast1Component],
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
})
export class DashboardComponent implements OnInit {
  ngOnInit() {}
}
