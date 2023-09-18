import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MaquetaRoutingModule } from './maqueta-routing.module';
import { MaquetaComponent } from './maqueta.component';

@NgModule({
  declarations: [MaquetaComponent],
  imports: [CommonModule, MaquetaRoutingModule],
})
export class MaquetaModule {}
