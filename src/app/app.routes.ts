import { Routes } from '@angular/router';
import { DashboardComponent } from './paginas/admin/dashboard/dashboard.component';
import { AdminComponent } from './paginas/admin/admin.component';
import { LoginComponent } from './paginas/login/login/login.component';
import { RegisterComponent } from './paginas/login/register/register.component';
import { PageNotFoundComponent } from './paginas/page-not-found/page-not-found.component';
import { EmpresaComponent } from './paginas/admin/configuracion/empresa/empresa.component';
import { PrimerProcesoComponent } from './paginas/admin/contratacion/contrato/primer-proceso/primer-proceso.component';
import { AuthGuard } from './guards/auth.guard';

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
            ],
          },
        ],
      },
    ],
  },
  { path: '', redirectTo: '/admin/dashboard', pathMatch: 'full' },
  { path: '**', component: PageNotFoundComponent },
];
