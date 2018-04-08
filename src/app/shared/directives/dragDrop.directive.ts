import {Directive, HostListener, HostBinding, EventEmitter, Output, Input} from '@angular/core';
import * as XLSX from 'xlsx';
import { ExcelService } from "../services/excel.service";
type AOA = any[][];

@Directive({
  selector: '[fileDragDrop]'
})
export class FileDragDropDirective {
  @HostBinding('style.background') private background = '#eee';
  @Output() filesChangeEmiter : EventEmitter<any> = new EventEmitter();

  constructor(private excelSvc: ExcelService) { }

  @HostListener('dragover', ['$event']) public onDragOver(evt){
    evt.preventDefault();
    evt.stopPropagation();
    this.background = '#999';
  }

  @HostListener('dragleave', ['$event']) public onDragLeave(evt){
    evt.preventDefault();
    evt.stopPropagation();
    this.background = '#eee'
  }

  @HostListener('drop', ['$event']) public onDrop(evt){
    evt.preventDefault();
    evt.stopPropagation();
    let files = evt.dataTransfer.files;

		const reader: FileReader = new FileReader();
		reader.onload = (e: any) => {
			/* read workbook */
			const bstr: string = e.target.result;
			const wb: XLSX.WorkBook = XLSX.read(bstr, {type: 'binary'});
			/* grab first sheet */
			const wsname: string = wb.SheetNames[0];
			const ws: XLSX.WorkSheet = wb.Sheets[wsname];
			/* save data */
      let data = <AOA>(XLSX.utils.sheet_to_json(ws, {header: 1}));
      let excelData = this.excelSvc.processFile(data);
      this.filesChangeEmiter.emit(excelData);
		};
		reader.readAsBinaryString(files[0]);
    
  }

}