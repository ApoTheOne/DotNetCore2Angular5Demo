import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule} from '@angular/http';


import { AppComponent } from './app.component';
import { JsFrameworkService } from './services/js-framework.service';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule, 
    HttpModule
  ],
  providers: [JsFrameworkService],
  bootstrap: [AppComponent]
})
export class AppModule {}
