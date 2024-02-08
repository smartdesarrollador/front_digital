import { Component, OnInit } from '@angular/core';
import { Footer1Component } from '../componentes/footer-1/footer-1.component';
import { SidebarDashboardComponent } from '../componentes/sidebar-dashboard/sidebar-dashboard.component';
import { Table1Component } from '../componentes/table-1/table-1.component';
import { initFlowbite } from 'flowbite';

@Component({
  selector: 'app-layout-tres',
  standalone: true,
  imports: [Footer1Component, SidebarDashboardComponent, Table1Component],
  templateUrl: './layout-tres.component.html',
  styleUrl: './layout-tres.component.css',
})
export class LayoutTresComponent implements OnInit {
  ngOnInit(): void {
    initFlowbite();
  }
}
