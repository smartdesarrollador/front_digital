import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './test/angular/rutas/home/home.component';
import { PageNotFoundComponent } from './test/angular/rutas/page-not-found/page-not-found.component';
import { AppComponent } from './app.component';
import { AuthGuard } from 'src/app/guards/auth.guard';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'dashboard',
    pathMatch: 'full',
  },
  /*   {
      path: 'home',
      component: HomeComponent,
    }, */
  /*   {
      path: '',
      component: AppComponent,
    }, */
  {
    path: 'test/carga-perezosa',
    loadChildren: () =>
      import('./test/carga-perezosa/carga-perezosa.module').then(
        (m) => m.CargaPerezosaModule
      ),
      canActivate: [AuthGuard],
  },
  {
    path: 'test/tailwind',
    loadChildren: () =>
      import('./test/tailwind/tailwind.module').then((m) => m.TailwindModule),
      canActivate: [AuthGuard],
  },
  {
    path: 'test/angular',
    loadChildren: () =>
      import('./test/angular/angular.module').then((m) => m.AngularModule),
      canActivate: [AuthGuard],
  },
  {
    path: 'test/maqueta',
    loadChildren: () =>
      import('./test/maqueta/maqueta.module').then((m) => m.MaquetaModule),
      canActivate: [AuthGuard],
  },
  {
    path: 'dashboard',
    loadChildren: () =>
      import('./paginas/dashboard/dashboard.module').then(
        (m) => m.DashboardModule
      ),
      canActivate: [AuthGuard],
  },
  {
    path: 'contratacion',
    loadChildren: () =>
      import('./paginas/contratacion/contratacion.module').then(
        (m) => m.ContratacionModule
      ),
      canActivate: [AuthGuard],
  },
  {
    path: 'auth',
    loadChildren: () =>
      import('./paginas/login/login.module').then(
        (m) => m.LoginModule
      ),
  },
  {
    path: 'page-not-found',
    component: PageNotFoundComponent,
  },
  {
    path: '**',
    redirectTo: 'page-not-found',
    pathMatch: 'full',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
