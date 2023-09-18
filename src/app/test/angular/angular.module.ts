import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AngularRoutingModule } from './angular-routing.module';

import { InterpolacionComponent } from './interpolacion/interpolacion.component';
import { EventBindingComponent } from './event-binding/event-binding.component';
import { ClassBindingComponent } from './class-binding/class-binding.component';
import { FormularioComponent } from './formulario/formulario.component';
import { PropertyBindingComponent } from './property-binding/property-binding.component';
import { NgifComponent } from './ngif/ngif.component';
import { ChildrenComponent } from './children/children.component';

import { HomeComponent } from './rutas/home/home.component';
import { PageNotFoundComponent } from './rutas/page-not-found/page-not-found.component';
import { UserDetailsComponent } from './rutas/user-details/user-details.component';

@NgModule({
  declarations: [
    InterpolacionComponent,
    EventBindingComponent,
    ClassBindingComponent,
    FormularioComponent,
    PropertyBindingComponent,
    NgifComponent,
    ChildrenComponent,
    HomeComponent,
    PageNotFoundComponent,
    UserDetailsComponent,
  ],
  imports: [CommonModule, AngularRoutingModule],
})
export class AngularModule {}
