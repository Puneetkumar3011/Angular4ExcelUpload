import { Component, Input } from "@angular/core";
import { appModal } from "../excel-data.modal";

@Component({
	selector: 'displaygrid',
	templateUrl: 'displayGrid.component.html'
})
export class DisplyGrid{
    @Input() 
    excelData : any;
}