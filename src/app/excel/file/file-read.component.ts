import { Component, Output, EventEmitter } from '@angular/core';
import * as XLSX from 'xlsx';
import { ExcelService } from "../services/excel.service";

@Component({
	selector: 'sheetjs',
	templateUrl: 'file-read.component.html'
})

export class SheetJSComponent {
	@Output() filesChangeEmiter : EventEmitter<any> = new EventEmitter();
	@Output() filesChangeCompleteEmiter : EventEmitter<any> = new EventEmitter();
	wopts: XLSX.WritingOptions = { bookType: 'xlsx', type: 'array' };
	fileName: string = 'SheetJS.xlsx';

	constructor(private excelSvc: ExcelService){}

	onFileChange(evt: any) {
		/* wire up file reader */
		const target: DataTransfer = <DataTransfer>(evt.target);
		if (target.files.length !== 1) throw new Error('Cannot use multiple files');
		const reader: FileReader = new FileReader();
		reader.onload = (e: any) => {
			this.filesChangeEmiter.emit(null);
			setTimeout(()=>{
				/* read workbook */
				const bstr: string = e.target.result;
				let excelData = this.excelSvc.readFile(bstr);
				this.filesChangeCompleteEmiter.emit(excelData);
			},3000);
		};
		reader.readAsBinaryString(target.files[0]);
	}
}
