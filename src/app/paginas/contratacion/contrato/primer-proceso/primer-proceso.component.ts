import { Component, OnInit } from '@angular/core';
import { TrabajadorService } from 'src/app/services/trabajador.service';
import { Trabajador } from 'src/app/interface/trabajador';
import { Router } from '@angular/router';

@Component({
  selector: 'app-primer-proceso',
  templateUrl: './primer-proceso.component.html',
  styleUrls: ['./primer-proceso.component.css']
})
export class PrimerProcesoComponent {
  listTrabajadores: any = [];

  constructor(public ts: TrabajadorService, private router: Router) { };

  ngOnInit(): void {
    this.loadTrabajadores();
  }

  loadTrabajadores() {
    return this.ts.getTrabajadores().subscribe((data: {}) => {
      console.log(data);
      this.listTrabajadores = data;
    })
  }

}
