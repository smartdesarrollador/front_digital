import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ContratacionRoutingModule } from './contratacion-routing.module';
import { OfertaLaboralComponent } from './oferta-laboral/oferta-laboral.component';
import { ContratoComponent } from './contrato/contrato.component';
import { AdendasComponent } from './adendas/adendas.component';
import { PrimerProcesoComponent } from './contrato/primer-proceso/primer-proceso.component';
import { SegundoProcesoComponent } from './contrato/segundo-proceso/segundo-proceso.component';
import { TercerProcesoComponent } from './contrato/tercer-proceso/tercer-proceso.component';


@NgModule({
  declarations: [
    OfertaLaboralComponent,
    ContratoComponent,
    AdendasComponent,
    PrimerProcesoComponent,
    SegundoProcesoComponent,
    TercerProcesoComponent
  ],
  imports: [
    CommonModule,
    ContratacionRoutingModule
  ]
})
export class ContratacionModule { }
