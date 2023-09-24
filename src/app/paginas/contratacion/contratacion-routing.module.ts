import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { OfertaLaboralComponent } from './oferta-laboral/oferta-laboral.component';
import { ContratoComponent } from './contrato/contrato.component';
import { AdendasComponent } from './adendas/adendas.component';

const routes: Routes = [
  {
    path: 'oferta-laboral',
    component: OfertaLaboralComponent,
  },
  {
    path: 'contrato',
    component: ContratoComponent,
  },
  {
    path: 'adendas',
    component: AdendasComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ContratacionRoutingModule {}
