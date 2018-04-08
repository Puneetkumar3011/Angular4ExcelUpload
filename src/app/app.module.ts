import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { SheetJSComponent } from "./excel/sheet.component";
import { DisplyGrid } from "./excel/displayGrid.component";
import { FileDragDropDirective } from "./shared/directives/dragDrop.directive";
import { ExcelService } from "./shared/services/excel.service";


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
