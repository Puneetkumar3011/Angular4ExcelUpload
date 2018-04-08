import {Directive, HostListener, HostBinding, EventEmitter, Output, Input} from '@angular/core';
import * as XLSX from 'xlsx';
import { ExcelService } from "../services/excel.service";
//type AOA = any[][];

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
      let excelData = this.excelSvc.readFile(bstr);
			this.filesChangeEmiter.emit(excelData);
		};
		reader.readAsBinaryString(files[0]);
    
  }

}