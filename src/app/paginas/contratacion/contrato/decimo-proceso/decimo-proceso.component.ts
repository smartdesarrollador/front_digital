import { Component } from '@angular/core';
import { TrabajadorService } from 'src/app/services/trabajador.service';
import { Trabajador } from 'src/app/interface/trabajador';
import { Router } from '@angular/router';
import { ContratoLocalStorageService } from 'src/app/services/localstorage/contrato-local-storage.service';

@Component({
  selector: 'app-decimo-proceso',
  templateUrl: './decimo-proceso.component.html',
  styleUrls: ['./decimo-proceso.component.css'],
})
export class DecimoProcesoComponent {
  prevencion_covid: boolean = false;

  constructor(
    public ts: TrabajadorService,
    private router: Router,
    private cl: ContratoLocalStorageService
  ) {}

  ngOnInit() {}

  saveToLocalStorage() {
    const contratoLocaldatos = this.cl.getItem('contratoLocal');
    contratoLocaldatos.prevencion_covid = this.prevencion_covid;

    this.cl.setItem('contratoLocal', contratoLocaldatos);

    this.router.navigate(['/contratacion/contrato/proceso_11']);
  }
}
