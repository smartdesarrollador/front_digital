import { Component } from '@angular/core';
import { NgForm, NgModel } from '@angular/forms';
import { Router } from '@angular/router';
import { Trabajador } from 'src/app/interface/trabajador';
import { TrabajadorService } from 'src/app/services/trabajador.service';
import { ContratoLocalStorageService } from 'src/app/services/localstorage/contrato-local-storage.service';

@Component({
  selector: 'app-octavo-proceso-b',
  templateUrl: './octavo-proceso-b.component.html',
  styleUrls: ['./octavo-proceso-b.component.css']
})
export class OctavoProcesoBComponent {
  selectedValue: string = '';
  tercera_pregunta: string = '';

  constructor(
    public ts: TrabajadorService,
    private router: Router,
    private cl: ContratoLocalStorageService
  ) { }

  saveToLocalStorage() {
    console.log(this.tercera_pregunta);
    const contratoLocaldatos = this.cl.getItem('contratoLocal');
    contratoLocaldatos.pregunta_3 = this.tercera_pregunta;

    this.cl.setItem('contratoLocal', contratoLocaldatos);

    this.router.navigate(['/contratacion/contrato/proceso_9']);
  }
}
