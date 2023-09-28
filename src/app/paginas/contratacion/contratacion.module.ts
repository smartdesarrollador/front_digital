import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ContratacionRoutingModule } from './contratacion-routing.module';
import { OfertaLaboralComponent } from './oferta-laboral/oferta-laboral.component';
import { ContratoComponent } from './contrato/contrato.component';
import { AdendasComponent } from './adendas/adendas.component';
import { PrimerProcesoComponent } from './contrato/primer-proceso/primer-proceso.component';
import { SegundoProcesoComponent } from './contrato/segundo-proceso/segundo-proceso.component';
import { TercerProcesoComponent } from './contrato/tercer-proceso/tercer-proceso.component';
import { CuartoProcesoComponent } from './contrato/cuarto-proceso/cuarto-proceso.component';
import { QuintoProcesoComponent } from './contrato/quinto-proceso/quinto-proceso.component';
import { SextoProcesoComponent } from './contrato/sexto-proceso/sexto-proceso.component';
import { SeptimoProcesoComponent } from './contrato/septimo-proceso/septimo-proceso.component';
import { OctavoProcesoComponent } from './contrato/octavo-proceso/octavo-proceso.component';
import { NovenoProcesoComponent } from './contrato/noveno-proceso/noveno-proceso.component';


@NgModule({
  declarations: [
    OfertaLaboralComponent,
    ContratoComponent,
    AdendasComponent,
    PrimerProcesoComponent,
    SegundoProcesoComponent,
    TercerProcesoComponent,
    CuartoProcesoComponent,
    QuintoProcesoComponent,
    SextoProcesoComponent,
    SeptimoProcesoComponent,
    OctavoProcesoComponent,
    NovenoProcesoComponent
  ],
  imports: [
    CommonModule,
    ContratacionRoutingModule
  ]
})
export class ContratacionModule { }
