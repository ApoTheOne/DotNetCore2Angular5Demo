import { Component } from '@angular/core';
import { JsFrameworkService } from './services/js-framework.service'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  FetchJsFrameWorks(): any {
    this.jsFrameworkService.GetJsFrameWork().subscribe(resp => {this.items = resp;})
  }
  title = 'DotNetCoreNg5';
  items : string[];
  constructor(private jsFrameworkService: JsFrameworkService)
  {
    this.items = [];
    this.FetchJsFrameWorks();
    console.log(this.items);
  } 
}
