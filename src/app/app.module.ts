import { BrowserModule } from '@angular/platform-browser';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';  // replaces previous Http service


import { AppComponent } from './app.component';

import { AppReportComponent } from './reports/report.component';
import { AppFilterComponent } from './reports/filters/filters.component';
import { AppReportGridComponent } from './reports/grid/grid.component';

import { HomeComponent } from './basic/home.component';
import { PageNotFoundComponent } from './basic/pagenotfound.component';
import { AppNavComponent } from './basic/nav.component';

import { MaterialModule } from '@shared/material.module';
import { SharedModule } from '@shared/shared.module';
import { DataService } from './services/data.service';

import { RouterModule, Routes } from '@angular/router';

import { AppRoutingModule } from './app.routes';



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
    AppRoutingModule,
    FormsModule,
    BrowserModule,
    BrowserAnimationsModule,
    RouterModule,
    // MaterialModule,
    ReactiveFormsModule,
    SharedModule
  ],
  providers: [DataService],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  bootstrap: [AppComponent]
})
export class AppModule {

}
