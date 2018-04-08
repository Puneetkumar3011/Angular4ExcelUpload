import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { SheetJSComponent } from './excel/sheet.component';


import { Component } from '@angular/core';

@Component({
	selector: 'app-root',
	templateUrl: 'app.component.html'
})
export class AppComponent {
	title = 'test';
	excelData : any;

	displayRows(data){
		this.excelData = data;
	}
}

