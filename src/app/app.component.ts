import { Component } from '@angular/core';

import { SheetJSComponent } from './excel/sheet.component';
declare var $ :any;

@Component({
	selector: 'app-root',
	templateUrl: 'app.component.html'
})
export class AppComponent {
	title = 'test';
	excelData : any;

	displayRows(data){
		this.excelData = data;
		console.log(data);
		$('#modalDisplay').modal('show');
	}
}

