import { Component } from '@angular/core';
import { Footer1Component } from '../componentes/footer-1/footer-1.component';
import { SidebarDashboardComponent } from '../componentes/sidebar-dashboard/sidebar-dashboard.component';

@Component({
  selector: 'app-layout-tres',
  standalone: true,
  imports: [Footer1Component, SidebarDashboardComponent],
  templateUrl: './layout-tres.component.html',
  styleUrl: './layout-tres.component.css',
})
export class LayoutTresComponent {}
