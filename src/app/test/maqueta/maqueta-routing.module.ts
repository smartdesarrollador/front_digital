import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { MaquetaComponent } from './maqueta.component';

const routes: Routes = [
  {
    path: '',
    component: MaquetaComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MaquetaRoutingModule {}
