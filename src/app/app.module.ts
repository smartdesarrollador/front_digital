import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BotonesComponent } from './test/tailwind/botones/botones.component';
import { AlertasComponent } from './test/tailwind/alertas/alertas.component';
import { CardsComponent } from './test/tailwind/cards/cards.component';
import { LoginFormComponent } from './test/tailwind/login-form/login-form.component';
import { MaquetaComponent } from './test/maqueta/maqueta.component';

@NgModule({
  declarations: [
    AppComponent,
    BotonesComponent,
    AlertasComponent,
    CardsComponent,
    LoginFormComponent,
    MaquetaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
