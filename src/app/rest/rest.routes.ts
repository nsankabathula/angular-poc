import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RestComponent } from './components/rest.component';



const routes: Routes = [
    {
        path: '',
        component: RestComponent
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class RestRoutingModule { }
