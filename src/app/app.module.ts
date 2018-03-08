import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


import { AppComponent } from './app.component';

import { AppReportComponent } from './reports/report.component';
import { AppFilterComponent } from './reports/filters/filters.component';
import { AppReportGridComponent } from './reports/grid/grid.component';

import { HomeComponent } from './basic/home.component';
import { PageNotFoundComponent } from './basic/pagenotfound.component';
import { AppNavComponent } from './basic/nav.component';

import { MaterialModule } from './shared/material.module';
import { DataService } from './services/data.service';

import { RouterModule, Routes } from '@angular/router';

const appRoutes: Routes = [
  { path: 'reports', component: AppReportComponent },
  {
    path: '',
    redirectTo: '/home',
    pathMatch: 'full'
  },
  {
    path: 'home',
    component: HomeComponent,
    data: { title: 'Heroes List' }
  },
  { path: '**', component: PageNotFoundComponent }
  /*{ path: 'hero/:id', component: null },
  */
];

@NgModule({
  declarations: [
    AppComponent,
    AppNavComponent,
    AppReportComponent,
    HomeComponent,
    PageNotFoundComponent,
    AppFilterComponent,
    AppReportGridComponent
  ],
  imports: [
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: true } // <-- debugging purposes only
    ),
    FormsModule,
    BrowserModule,
    RouterModule,
    MaterialModule,
    ReactiveFormsModule
  ],
  providers: [DataService],
  bootstrap: [AppComponent]
})
export class AppModule {

}
