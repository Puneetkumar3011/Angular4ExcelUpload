import { Injectable } from "@angular/core";
import * as XLSX from 'xlsx';

import { appModal } from "../../app.modal";

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

}