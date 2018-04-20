import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { AppRoutes } from './app-routing.module';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AppLayoutComponent } from './app-layout/app-layout.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { TaskComponent } from './task/task.component';
import { ProjectComponent } from './project/project.component';
import { ReportComponent } from './report/report.component';
import { ProjectListComponent } from './project/project-list/project-list.component';
import { TaskListComponent } from './task/task-list/task-list.component';
import { ReportListComponent } from './report/report-list/report-list.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    DashboardComponent,
    AppLayoutComponent,
    NotFoundComponent,
    TaskComponent,
    ProjectComponent,
    ReportComponent,
    ProjectListComponent,
    TaskListComponent,
    ReportListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutes,
    NgbModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
