import { Component, ViewChild } from '@angular/core';
import { MatMenuTrigger } from '@angular/material';

@Component({
    selector: 'app-404',
    template: `
    <h4>404 page not found </h4> 
    <button mat-icon-button aria-label="home" routerLink="/home">
      <i class="material-icons md-48">home</i>
    </button>
    `
})
export class PageNotFoundComponent {


}
