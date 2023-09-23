import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { MaquetaComponent } from './maqueta.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { OfertaLaboralComponent } from './contratacion/oferta-laboral/oferta-laboral.component';
import { ContratoComponent } from './contratacion/contrato/contrato.component';
import { AdendasComponent } from './contratacion/adendas/adendas.component';

const routes: Routes = [
  {
    path: '',
    component: MaquetaComponent,
  },
  {
    path: 'dashboard',
    component: DashboardComponent,
  },
  {
    path: 'contratacion/oferta-laboral',
    component: OfertaLaboralComponent,
  },
  {
    path: 'contratacion/contrato',
    component: ContratoComponent,
  },
  {
    path: 'contratacion/adendas',
    component: AdendasComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MaquetaRoutingModule { }
