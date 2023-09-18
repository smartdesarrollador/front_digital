import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/home',
    pathMatch: 'full',
  },
  {
    path: 'test/carga-perezosa',
    loadChildren: () =>
      import('./test/carga-perezosa/carga-perezosa.module').then(
        (m) => m.CargaPerezosaModule
      ),
  },
  {
    path: 'test/tailwind',
    loadChildren: () =>
      import('./test/tailwind/tailwind.module').then((m) => m.TailwindModule),
  },
  {
    path: 'test/angular',
    loadChildren: () =>
      import('./test/angular/angular.module').then((m) => m.AngularModule),
  },
  {
    path: 'test/maqueta',
    loadChildren: () =>
      import('./test/maqueta/maqueta.module').then((m) => m.MaquetaModule),
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
