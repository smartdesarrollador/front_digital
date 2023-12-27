import { Routes } from '@angular/router';
import { DashboardComponent } from './paginas/admin/dashboard/dashboard.component';
import { AdminComponent } from './paginas/admin/admin.component';
import { LoginComponent } from './paginas/login/login/login.component';
import { RegisterComponent } from './paginas/login/register/register.component';
import { PageNotFoundComponent } from './paginas/page-not-found/page-not-found.component';
import { EmpresaComponent } from './paginas/admin/configuracion/empresa/empresa.component';
import { PrimerProcesoComponent } from './paginas/admin/contratacion/contrato/primer-proceso/primer-proceso.component';
import { AuthGuard } from './guards/auth.guard';
import { SegundoProcesoComponent } from './paginas/admin/contratacion/contrato/segundo-proceso/segundo-proceso.component';
import { TercerProcesoComponent } from './paginas/admin/contratacion/contrato/tercer-proceso/tercer-proceso.component';
import { CuartoProcesoComponent } from './paginas/admin/contratacion/contrato/cuarto-proceso/cuarto-proceso.component';
import { QuintoProcesoComponent } from './paginas/admin/contratacion/contrato/quinto-proceso/quinto-proceso.component';
import { QuintoProcesoBComponent } from './paginas/admin/contratacion/contrato/quinto-proceso-b/quinto-proceso-b.component';
import { QuintoProcesoCComponent } from './paginas/admin/contratacion/contrato/quinto-proceso-c/quinto-proceso-c.component';
import { QuintoProcesoDComponent } from './paginas/admin/contratacion/contrato/quinto-proceso-d/quinto-proceso-d.component';
import { SextoProcesoComponent } from './paginas/admin/contratacion/contrato/sexto-proceso/sexto-proceso.component';
import { SextoProcesoBComponent } from './paginas/admin/contratacion/contrato/sexto-proceso-b/sexto-proceso-b.component';
import { SextoProcesoCComponent } from './paginas/admin/contratacion/contrato/sexto-proceso-c/sexto-proceso-c.component';
import { SextoProcesoDComponent } from './paginas/admin/contratacion/contrato/sexto-proceso-d/sexto-proceso-d.component';
import { SextoProcesoEComponent } from './paginas/admin/contratacion/contrato/sexto-proceso-e/sexto-proceso-e.component';
import { SextoProcesoFComponent } from './paginas/admin/contratacion/contrato/sexto-proceso-f/sexto-proceso-f.component';
import { OctavoProcesoComponent } from './paginas/admin/contratacion/contrato/octavo-proceso/octavo-proceso.component';
import { OctavoProcesoBComponent } from './paginas/admin/contratacion/contrato/octavo-proceso-b/octavo-proceso-b.component';
import { OctavoProcesoAComponent } from './paginas/admin/contratacion/contrato/octavo-proceso-a/octavo-proceso-a.component';
import { NovenoProcesoComponent } from './paginas/admin/contratacion/contrato/noveno-proceso/noveno-proceso.component';
import { DecimoProcesoComponent } from './paginas/admin/contratacion/contrato/decimo-proceso/decimo-proceso.component';
import { UndecimoProcesoComponent } from './paginas/admin/contratacion/contrato/undecimo-proceso/undecimo-proceso.component';
import { DuodecimoProcesoComponent } from './paginas/admin/contratacion/contrato/duodecimo-proceso/duodecimo-proceso.component';
import { SeptimoProcesoComponent } from './paginas/admin/contratacion/contrato/septimo-proceso/septimo-proceso.component';

export const routes: Routes = [
  {
    path: 'auth',
    children: [
      {
        path: 'login',
        component: LoginComponent,
      },
      {
        path: 'register',
        component: RegisterComponent,
      },
    ],
  },
  {
    path: 'admin',
    canActivate: [AuthGuard],
    component: AdminComponent,
    children: [
      {
        path: 'dashboard',
        component: DashboardComponent,
      },
      {
        path: 'configuracion/empresa',
        component: EmpresaComponent,
      },
      {
        path: 'contratacion',
        children: [
          {
            path: 'contrato',
            children: [
              { path: 'proceso_1', component: PrimerProcesoComponent },
              { path: 'proceso_2', component: SegundoProcesoComponent },
              { path: 'proceso_3', component: TercerProcesoComponent },
              { path: 'proceso_4', component: CuartoProcesoComponent },
              { path: 'proceso_5_a', component: QuintoProcesoComponent },
              { path: 'proceso_5_b', component: QuintoProcesoBComponent },
              { path: 'proceso_5_c', component: QuintoProcesoCComponent },
              { path: 'proceso_5_d', component: QuintoProcesoDComponent },
              { path: 'proceso_6', component: SextoProcesoComponent },
              { path: 'proceso_6_b', component: SextoProcesoBComponent },
              { path: 'proceso_6_c', component: SextoProcesoCComponent },
              { path: 'proceso_6_d', component: SextoProcesoDComponent },
              { path: 'proceso_6_e', component: SextoProcesoEComponent },
              { path: 'proceso_6_f', component: SextoProcesoFComponent },
              { path: 'proceso_7', component: SeptimoProcesoComponent },
              { path: 'proceso_8', component: OctavoProcesoComponent },
              { path: 'proceso_8_a', component: OctavoProcesoAComponent },
              { path: 'proceso_8_b', component: OctavoProcesoBComponent },
              { path: 'proceso_9', component: NovenoProcesoComponent },
              { path: 'proceso_10', component: DecimoProcesoComponent },
              { path: 'proceso_11', component: UndecimoProcesoComponent },
              { path: 'proceso_12', component: DuodecimoProcesoComponent },
            ],
          },
        ],
      },
    ],
  },
  { path: '', redirectTo: '/admin/dashboard', pathMatch: 'full' },
  { path: '**', component: PageNotFoundComponent },
];
