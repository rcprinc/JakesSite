import { OnInit } from '@angular/core';
import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

@Component({
    selector: 'app-about',
    templateUrl: './about.component.html',
    styleUrls: ['./about.component.scss']
  })
export class AboutComponent implements OnInit { 
    ngOnInit() {
    }
  }