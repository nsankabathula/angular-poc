import { Component, ViewChild } from '@angular/core';
import { MatMenuTrigger } from '@angular/material';

@Component({
  selector: 'app-nav',
  //templateUrl: './app.component.html',
  //styleUrls: ['./app.component.css']
  template:`

  <mat-menu #appMenu="matMenu">
    <button mat-menu-item>Settings</button>
    <button mat-menu-item>Settings 2</button>
  </mat-menu>
  <button mat-icon-button [matMenuTriggerFor] = "appMenu">
  <mat-icon> more-vert</mat-icon>
  </button>
  `
})
export class AppNavComponent {
  title = 'APP-NAV';
  @ViewChild(MatMenuTrigger) trigger: MatMenuTrigger
}
