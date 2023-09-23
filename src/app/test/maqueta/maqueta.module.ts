import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MaquetaRoutingModule } from './maqueta-routing.module';
import { DashboardComponent } from './dashboard/dashboard.component';
import { OfertaLaboralComponent } from './contratacion/oferta-laboral/oferta-laboral.component';
import { ContratoComponent } from './contratacion/contrato/contrato.component';
import { AdendasComponent } from './contratacion/adendas/adendas.component';
/* import { MaquetaComponent } from './maqueta.component'; */

@NgModule({
  declarations: [/* MaquetaComponent */
    DashboardComponent, OfertaLaboralComponent, ContratoComponent, AdendasComponent
  ],
  imports: [CommonModule, MaquetaRoutingModule],
})
export class MaquetaModule { }
