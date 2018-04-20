import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LoginComponent } from './login/login.component';
import { AppLayoutComponent } from './app-layout/app-layout.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { NotFoundComponent } from './not-found/not-found.component';

const appRoutes: Routes = [
  // Routes for components with application layout
  {
    path: '',
    component: AppLayoutComponent,
    data: { title: 'Farmmin' },
    children: [
      // Routes here
      { path: '', component: DashboardComponent, data: { title: 'Início' }, /*, canActivate: [CanActivateSupplier]*/ },
      // Projects
      /*{
        path: 'projects', component: ProjectComponent, data: { title: null, restaurant: true },
        children: [

          { path: '', component: ProjectListComponent, data: { title: 'Projetos' }, canActivate: [CanActivateUser] },
          { path: 'new', component: ProjectFormComponent, data: { title: 'Add Projeto' }, canActivate: [CanActivateAdmin] },
          { path: 'address/:id', component: ProjectAddressFormComponent, data: { title: 'Adicionar Filial' }, canActivate: [CanActivateUser] },
          { path: ':id', component: ProjectFormComponent, data: { title: 'Editar Projeto' }, canActivate: [CanActivateUser] },
          { path: 'access/:id', component: ProjectFormOwnerComponent, data: { title: 'Editar Acesso Projeto' }, canActivate: [CanActivateUser] },
        ]
      },*/
      // Tasks
      /*{
        path: 'tasks', component: TaskComponent, data: { title: null },
        children: [
          { path: '', component: TaskListComponent, data: { title: 'Tarefas' }, canActivate: [CanActivateUser] },
          { path: 'new', component: TaskFormComponent, data: { title: 'Add Tarefa' }, canActivate: [CanActivateUser] },
          { path: ':id', component: TaskFormComponent, data: { title: 'Editar Tarefa' }, canActivate: [CanActivateUser] },
          { path: 'view/:id', component: TaskViewComponent, data: { title: 'Visualizar Tarefa' }, canActivate: [CanActivateUser] },
        ]
      }*/
    ]
  },
  // Routes for different layouts
  { path: 'login', component: LoginComponent },
  // Route for 404
  { path: '**', component: NotFoundComponent }
];

export const AppRoutes = RouterModule.forRoot(appRoutes);
