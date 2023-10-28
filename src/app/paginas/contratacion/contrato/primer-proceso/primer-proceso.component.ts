import { Component, OnInit } from '@angular/core';
import { TrabajadorService } from 'src/app/services/trabajador.service';
import { Trabajador } from 'src/app/interface/trabajador';
import { Router } from '@angular/router';
import { ContratoLocalStorageService } from 'src/app/services/localstorage/contrato-local-storage.service';

@Component({
  selector: 'app-primer-proceso',
  templateUrl: './primer-proceso.component.html',
  styleUrls: ['./primer-proceso.component.css'],
})
export class PrimerProcesoComponent {
  listTrabajadores: any = [];
  selectedValue: string = '';

  constructor(public ts: TrabajadorService, private router: Router, private cl: ContratoLocalStorageService) { }

  ngOnInit(): void {
    this.loadTrabajadores();
  }

  loadTrabajadores() {
    return this.ts.getTrabajadores().subscribe((data: {}) => {
      console.log(data);
      this.listTrabajadores = data;
    });
  }

  saveToLocalStorage() {
    this.cl.setItem('contratoLocal', { trabajador: this.selectedValue });
    localStorage.setItem('selectedValue', this.selectedValue);
    this.router.navigate(['/contratacion/contrato/proceso_3']);
  }
}
