import { Injectable } from "@angular/core";
import * as XLSX from 'xlsx';

import { appModal } from "../excel-data.modal";
type AOA = any[][];

@Injectable()
export class ExcelService {
  constructor() { }

  processFile(excelData:any) : Array<appModal>{
        let rows: Array<appModal> = [];
        if(excelData && excelData.length > 0){
            excelData.forEach((element, index) => {
                if(index > 0){
                    let row:any = {};
                    row.categoryCode = element[0];
                    row.categoryName = element[1];
                    row.subCategory = element[2];
                    row.subCatName = element[3];
                    row.description = element[4];
                    rows.push(row);
                }
            });
        }
        return rows;
    }

    readFile(targetRes: any){
        const wb: XLSX.WorkBook = XLSX.read(targetRes, {type: 'binary'});
        const wsname: string = wb.SheetNames[0];
        const ws: XLSX.WorkSheet = wb.Sheets[wsname];
        let data = <AOA>(XLSX.utils.sheet_to_json(ws, {header: 1}));
        return this.processFile(data);
    }

}