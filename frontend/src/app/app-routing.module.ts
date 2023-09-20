import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardcursosComponent } from './components/dashboardcursos/dashboardcursos.component';
import { InicioComponent } from './components/inicio/inicio.component';

const routes: Routes = [
  {
    path:'',
    redirectTo:'/inicio',
    pathMatch:'full'
},
{
  path: 'inicio',
  component: InicioComponent
},
{
    path: 'dashboard',
    component: DashboardcursosComponent
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
