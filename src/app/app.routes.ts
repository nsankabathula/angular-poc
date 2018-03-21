import { RouterModule, Routes } from '@angular/router';
import { AppReportComponent } from './reports/report.component';
import { HomeComponent } from './basic/home.component';
import { PageNotFoundComponent } from './basic/pagenotfound.component';
import { NgModule } from '@angular/core';

const APP_ROUTES: Routes = [
    { path: 'reports', component: AppReportComponent },
    {
        path: 'home',
        component: HomeComponent,
        data: { title: 'Heroes List' }
    },
    {
        path: 'rest',
        loadChildren: 'app/rest/rest.module#RestModule'
    },
    {
        path: '',
        redirectTo: '/home',
        pathMatch: 'full'
    },
    { path: '**', component: PageNotFoundComponent }
    /*{ path: 'hero/:id', component: null },
    */
];


@NgModule({
    imports: [
        RouterModule.forRoot(
            APP_ROUTES,
            { enableTracing: true } // <-- debugging purposes only
        )
    ],
    exports: [
        RouterModule
    ]
})
export class AppRoutingModule { }

