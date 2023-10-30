import { Component } from '@angular/core';
import { TrabajadorService } from 'src/app/services/trabajador.service';
import { Trabajador } from 'src/app/interface/trabajador';
import { Router } from '@angular/router';
import { ContratoLocalStorageService } from 'src/app/services/localstorage/contrato-local-storage.service';

@Component({
  selector: 'app-cuarto-proceso',
  templateUrl: './cuarto-proceso.component.html',
  styleUrls: ['./cuarto-proceso.component.css'],
})
export class CuartoProcesoComponent {
  selectedValue: string = '';
  constructor(
    public ts: TrabajadorService,
    private router: Router,
    private cl: ContratoLocalStorageService
  ) {}

  saveToLocalStorage() {
    const contratoLocaldatos = this.cl.getItem('contratoLocal');
    contratoLocaldatos.tipo_contrato = this.selectedValue;

    this.cl.setItem('contratoLocal', contratoLocaldatos);

    /* localStorage.setItem('selectedValue', this.selectedValue); */
    if (this.selectedValue == 'Contrato modal') {
      this.router.navigate(['/contratacion/contrato/proceso_5']);
      console.log('elejiste: Contrato Modal');
    } else {
      console.log('elejiste: Contrato a plazo indeterminado');
    }
  }
}
