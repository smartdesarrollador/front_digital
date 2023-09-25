import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

/* Test */
import { FooterComponent } from './test/shared/components/footer/footer.component';
import { NavigationComponent } from './test/shared/components/navigation/navigation.component';
import { MaquetaComponent } from './test/maqueta/maqueta.component';
import { TestNavbarComponent } from './test/shared/components/test-navbar/test-navbar.component';
import { TestSidebarComponent } from './test/shared/components/test-sidebar/test-sidebar.component';

/* Oficiales */
import { NavbarComponent } from './shared/navbar/navbar.component';
import { SidebarComponent } from './shared/sidebar/sidebar.component';

@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    FooterComponent,
    MaquetaComponent,
    NavbarComponent,
    SidebarComponent,
    TestNavbarComponent,
    TestSidebarComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, FormsModule, HttpClientModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
