import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { FooterComponent } from './test/shared/components/footer/footer.component';
import { NavigationComponent } from './test/shared/components/navigation/navigation.component';
import { NavbarComponent } from './test/shared/components/navbar/navbar.component';
import { MaquetaComponent } from './test/maqueta/maqueta.component';
import { SidebarComponent } from './test/shared/components/sidebar/sidebar.component';

@NgModule({
  declarations: [AppComponent, NavigationComponent, FooterComponent, MaquetaComponent, NavbarComponent, SidebarComponent],
  imports: [BrowserModule, AppRoutingModule, FormsModule, HttpClientModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule { }
