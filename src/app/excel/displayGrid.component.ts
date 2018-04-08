import { Component, Input } from "@angular/core";
import { appModal } from "../app.modal";

@Component({
	selector: 'displaygrid',
	templateUrl: 'displayGrid.component.html'
})
export class DisplyGrid{
    @Input() 
    excelData : any;
}