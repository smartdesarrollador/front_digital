import { Component } from '@angular/core';
import { TrabajadorService } from 'src/app/services/trabajador.service';
import { Trabajador } from 'src/app/interface/trabajador';
import { Router } from '@angular/router';
import { ContratoLocalStorageService } from 'src/app/services/localstorage/contrato-local-storage.service';

@Component({
  selector: 'app-undecimo-proceso',
  templateUrl: './undecimo-proceso.component.html',
  styleUrls: ['./undecimo-proceso.component.css'],
})
export class UndecimoProcesoComponent {
  obligaciones_compromisos: boolean = false;
  confidencialidad: boolean = false;
  propiedad_intelectual: boolean = false;
  tecnologia_informacion: boolean = false;
  exclusividad: boolean = false;
  proteccion_datos: boolean = false;

  constructor(
    public ts: TrabajadorService,
    private router: Router,
    private cl: ContratoLocalStorageService
  ) {}

  ngOnInit() {}

  saveToLocalStorage() {
    const contratoLocaldatos = this.cl.getItem('contratoLocal');
    contratoLocaldatos.obligaciones_compromisos = this.obligaciones_compromisos;
    contratoLocaldatos.confidencialidad = this.confidencialidad;
    contratoLocaldatos.propiedad_intelectual = this.propiedad_intelectual;
    contratoLocaldatos.tecnologia_informacion = this.tecnologia_informacion;
    contratoLocaldatos.exclusividad = this.exclusividad;
    contratoLocaldatos.proteccion_datos = this.proteccion_datos;

    this.cl.setItem('contratoLocal', contratoLocaldatos);

    this.router.navigate(['/contratacion/contrato/proceso_12']);
  }
}
