import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { PermissionDirective } from 'src/app/directives/permission.directive';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [CommonModule, PermissionDirective],
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
})
export class DashboardComponent implements OnInit {
  ngOnInit() {}
}
