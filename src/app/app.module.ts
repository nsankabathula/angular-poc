import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';


import { AppComponent } from './app.component';
import { AppNavComponent } from './nav.component';
import { AppReportComponent } from './reports/report.component';

import { HomeComponent } from './basic/home.component';
import { PageNotFoundComponent } from './basic/pagenotfound.component';

import { MaterialModule } from './shared/material.module';

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
    PageNotFoundComponent
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

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {

}
