import { Component, Input } from "@angular/core";
import { appModal } from "../excel-data.modal";
declare var $ :any;

@Component({
	selector: 'displaygrid',
    templateUrl: 'display-grid.component.html',
    styleUrls: ['display-grid.component.css']
})
export class DisplyGrid{
    @Input() 
    excelData : any;
    isDataValid: Boolean = true;
    validationComplete: Boolean = false;
    isUploading: Boolean = false;
    uploadStatus: String = "";

    constructor(){}

    getValidationStatusCss(errorCode){
        if(errorCode === '003'){
            this.isDataValid = false;
            return "text-danger";
        }else if(errorCode === '002'){
            return "text-warning";
        }else{
            return "text-primary";
        }
    }

    uploadData(){
        this.isUploading = true;
        this.validationComplete = true;
        setTimeout(()=>{
            this.isUploading = false;
            this.uploadStatus = "success";
       },3000);
    }

    closeModal(id: String){
        $('#' + id).modal('hide');
    }
}