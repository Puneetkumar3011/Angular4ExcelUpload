import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { SheetJSComponent } from "./excel/file/file-read.component";
import { DisplyGrid } from "./excel/display/display-grid.component";
import { FileDragDropDirective } from "./excel/drop/dragDrop.directive";
import { ExcelService } from "./excel/services/excel.service";


@NgModule({
  declarations: [
    AppComponent,
    SheetJSComponent,
    DisplyGrid,
    FileDragDropDirective
  ],
  imports: [
    BrowserModule
  ],
  providers: [ExcelService],
  bootstrap: [AppComponent]
})
export class AppModule { }
