/* xlsx.js (C) 2013-present SheetJS -- http://sheetjs.com */
/* vim: set ts=2: */
import { Component, Output, EventEmitter } from '@angular/core';

import * as XLSX from 'xlsx';

type AOA = any[][];

@Component({
	selector: 'sheetjs',
	templateUrl: 'sheet.component.html'
})

export class SheetJSComponent {
	@Output() filesDropEmiter : EventEmitter<any> = new EventEmitter();
	data: AOA;
	wopts: XLSX.WritingOptions = { bookType: 'xlsx', type: 'array' };
	fileName: string = 'SheetJS.xlsx';

	onFileChange(evt: any) {
		/* wire up file reader */
		const target: DataTransfer = <DataTransfer>(evt.target);
		if (target.files.length !== 1) throw new Error('Cannot use multiple files');
		const reader: FileReader = new FileReader();
		reader.onload = (e: any) => {
			/* read workbook */
			const bstr: string = e.target.result;
			const wb: XLSX.WorkBook = XLSX.read(bstr, {type: 'binary'});
			/* grab first sheet */
			const wsname: string = wb.SheetNames[0];
			const ws: XLSX.WorkSheet = wb.Sheets[wsname];
			/* save data */
			this.data = <AOA>(XLSX.utils.sheet_to_json(ws, {header: 1}));
			this.filesDropEmiter.emit(this.data);
		};
		reader.readAsBinaryString(target.files[0]);
	}
}
