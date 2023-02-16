import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { SidebarModule } from '@syncfusion/ej2-angular-navigations';

import { AppComponent } from './app.component';
import {
  HtmlEditorService,
  ImageService,
  LinkService, RichTextEditorAllModule,
  RichTextEditorModule, ToolbarService
} from "@syncfusion/ej2-angular-richtexteditor";

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    SidebarModule,
    RichTextEditorAllModule,
    BrowserModule
  ],
  providers: [
    ToolbarService, LinkService, ImageService, HtmlEditorService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
