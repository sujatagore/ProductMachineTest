import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { MobileProductComponent } from './shared/component/mobile products/mobilePro.component';

@NgModule({
  declarations: [
    AppComponent,
    MobileProductComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
