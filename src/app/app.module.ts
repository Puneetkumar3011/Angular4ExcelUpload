import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { SheetJSComponent } from "./excel/sheet.component";
import { FileDragDropDirective } from "./shared/directives/dragDrop.directive";


@NgModule({
  declarations: [
    AppComponent,
    SheetJSComponent,
    FileDragDropDirective
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
