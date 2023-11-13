import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

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
import { OctavoProcesoAComponent } from './contrato/octavo-proceso-a/octavo-proceso-a.component';
import { OctavoProcesoBComponent } from './contrato/octavo-proceso-b/octavo-proceso-b.component';
import { QuintoProcesoBComponent } from './contrato/quinto-proceso-b/quinto-proceso-b.component';
import { QuintoProcesoCComponent } from './contrato/quinto-proceso-c/quinto-proceso-c.component';
import { QuintoProcesoDComponent } from './contrato/quinto-proceso-d/quinto-proceso-d.component';
import { DecimoProcesoComponent } from './contrato/decimo-proceso/decimo-proceso.component';
import { UndecimoProcesoComponent } from './contrato/undecimo-proceso/undecimo-proceso.component';
import { DuodecimoProcesoComponent } from './contrato/duodecimo-proceso/duodecimo-proceso.component';

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
    NovenoProcesoComponent,
    OctavoProcesoAComponent,
    OctavoProcesoBComponent,
    QuintoProcesoBComponent,
    QuintoProcesoCComponent,
    QuintoProcesoDComponent,
    DecimoProcesoComponent,
    UndecimoProcesoComponent,
    DuodecimoProcesoComponent,
  ],
  imports: [
    CommonModule,
    ContratacionRoutingModule,
    FormsModule,
    ReactiveFormsModule,
  ],
})
export class ContratacionModule {}
