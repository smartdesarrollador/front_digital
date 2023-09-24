import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ContratacionRoutingModule } from './contratacion-routing.module';
import { OfertaLaboralComponent } from './oferta-laboral/oferta-laboral.component';
import { ContratoComponent } from './contrato/contrato.component';
import { AdendasComponent } from './adendas/adendas.component';


@NgModule({
  declarations: [
    OfertaLaboralComponent,
    ContratoComponent,
    AdendasComponent
  ],
  imports: [
    CommonModule,
    ContratacionRoutingModule
  ]
})
export class ContratacionModule { }
