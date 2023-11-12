import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

/* Test */
import { FooterComponent } from './test/shared/components/footer/footer.component';
import { NavigationComponent } from './test/shared/components/navigation/navigation.component';
import { MaquetaComponent } from './test/maqueta/maqueta.component';
import { TestNavbarComponent } from './test/shared/components/test-navbar/test-navbar.component';
import { TestSidebarComponent } from './test/shared/components/test-sidebar/test-sidebar.component';
import { TestMenuLateralComponent } from './test/shared/components/test-menu-lateral/test-menu-lateral.component';

/* Oficiales */
import { NavbarComponent } from './shared/navbar/navbar.component';
import { SidebarComponent } from './shared/sidebar/sidebar.component';

/* Toastr */
import { CommonModule } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';

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
    TestMenuLateralComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    CommonModule,
    BrowserAnimationsModule, // required animations module
    ToastrModule.forRoot(), // ToastrModule added
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
