import {Directive, HostListener, HostBinding, EventEmitter, Output, Input} from '@angular/core';
import * as XLSX from 'xlsx';
import { ExcelService } from "../services/excel.service";
//type AOA = any[][];

@Directive({
  selector: '[fileDragDrop]'
})
export class FileDragDropDirective {
  @HostBinding('style.background') private background = '#eee';
  @Output() filesDropEmiter : EventEmitter<any> = new EventEmitter();
  @Output() filesDropCompleteEmiter : EventEmitter<any> = new EventEmitter();

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
      this.filesDropEmiter.emit(null);
      setTimeout(()=>{
        /* read workbook */
        const bstr: string = e.target.result;
        let excelData = this.excelSvc.readFile(bstr);
        this.filesDropCompleteEmiter.emit(excelData);
      },3000);
		};
		reader.readAsBinaryString(files[0]);
    
  }

}