import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {productListComponent} from './products/product-list.component'
import { from } from 'rxjs';
@NgModule({
  declarations: [
    AppComponent, productListComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
