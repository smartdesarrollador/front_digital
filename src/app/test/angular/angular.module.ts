import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

import { AngularRoutingModule } from './angular-routing.module';
import { FormsModule } from '@angular/forms';

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
import { Formulario2Component } from './formulario2/formulario2.component';
import { AddCategoryComponent } from './crud/add-category/add-category.component';
import { ListCategoryComponent } from './crud/list-category/list-category.component';
import { CrudComponent } from './crud/crud.component';
import { PdfComponent } from './pdf/pdf.component';

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
    Formulario2Component,
    AddCategoryComponent,
    ListCategoryComponent,
    CrudComponent,
    PdfComponent,
  ],
  imports: [CommonModule, AngularRoutingModule, FormsModule, HttpClientModule],
})
export class AngularModule {}
