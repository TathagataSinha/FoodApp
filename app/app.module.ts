import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { OnsenModule } from 'ngx-onsenui';
import { AppComponent } from './app.component';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';




@NgModule({
    declarations: [
    AppComponent,

  ],
    imports: [
    BrowserModule,
     OnsenModule,
  ],
    providers: [],
    schemas: [
    CUSTOM_ELEMENTS_SCHEMA,
],
  bootstrap: [AppComponent]
})
export class AppModule { }
