import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// General layouts
import { LoginComponent } from './login/login.component';
import { AppLayoutComponent } from './app-layout/app-layout.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { NotFoundComponent } from './not-found/not-found.component';
// Projects components
import { ProjectComponent } from './project/project.component';
import { ProjectListComponent } from './project/project-list/project-list.component';
// Task components
import { TaskComponent } from './task/task.component';
import { TaskListComponent } from './task/task-list/task-list.component';
// Report components
import { ReportComponent } from './report/report.component';
import { ReportListComponent } from './report/report-list/report-list.component';

const appRoutes: Routes = [
  // Routes for components with application layout
  {
    path: '',
    component: AppLayoutComponent,
    data: { title: 'Farmmin' },
    children: [
      // Routes here
      { path: '', component: DashboardComponent, data: { title: 'Início' } },
      // Projects
      {
        path: 'projects', component: ProjectComponent, data: { title: null },
        children: [

          { path: '', component: ProjectListComponent, data: { title: 'Projetos' } },
          /*{ path: 'new', component: ProjectFormComponent, data: { title: 'Add Projeto' }] },
          { path: 'address/:id', component: ProjectAddressFormComponent, data: { title: 'Adicionar Filial' } },
          { path: ':id', component: ProjectFormComponent, data: { title: 'Editar Projeto' } },
          { path: 'access/:id', component: ProjectFormOwnerComponent, data: { title: 'Editar Acesso Projeto' } },*/
        ]
      },
      // Tasks
      {
        path: 'tasks', component: TaskComponent, data: { title: null },
        children: [
          { path: '', component: TaskListComponent, data: { title: 'Tarefas' } },
          /*{ path: 'new', component: TaskFormComponent, data: { title: 'Add Tarefa' } },
          { path: ':id', component: TaskFormComponent, data: { title: 'Editar Tarefa' } },
          { path: 'view/:id', component: TaskViewComponent, data: { title: 'Visualizar Tarefa' } },*/
        ]
      },
      // Reports
      {
        path: 'reports', component: ReportComponent, data: { title: null },
        children: [
          { path: '', component: ReportListComponent, data: { title: 'Relatórios' } },
          /*{ path: 'new', component: TaskFormComponent, data: { title: 'Add Tarefa' } },
          { path: ':id', component: TaskFormComponent, data: { title: 'Editar Tarefa' } },
          { path: 'view/:id', component: TaskViewComponent, data: { title: 'Visualizar Tarefa' } },*/
        ]
      }
    ]
  },
  // Routes for different layouts
  { path: 'login', component: LoginComponent },
  // Route for 404
  { path: '**', component: NotFoundComponent }
];

export const AppRoutes = RouterModule.forRoot(appRoutes);
