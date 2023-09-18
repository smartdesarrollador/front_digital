import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

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

const routes: Routes = [
  {
    path: 'interpolacion',
    component: InterpolacionComponent,
  },
  {
    path: 'event-binding',
    component: EventBindingComponent,
  },
  {
    path: 'class-binding',
    component: ClassBindingComponent,
  },
  {
    path: 'formulario',

    component: FormularioComponent,
  },
  {
    path: 'property-binding',
    component: PropertyBindingComponent,
  },
  {
    path: 'ngif',
    component: NgifComponent,
  },
  {
    path: 'children',
    component: ChildrenComponent,
  },
  {
    path: 'rutas/home',
    component: HomeComponent,
  },
  {
    path: 'rutas/user-details/:id',
    component: UserDetailsComponent,
  },
  {
    path: 'rutas/page-not-found',
    component: PageNotFoundComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AngularRoutingModule {}
