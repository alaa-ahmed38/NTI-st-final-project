import { Component, AfterViewInit } from '@angular/core';

declare function initTemplateScripts(): void;

@Component({
  selector: 'app-root',
  standalone: false,

  templateUrl: './app.html', 
  styleUrls: ['./app.scss'] 
})
export class AppComponent implements AfterViewInit {
  title = 'style-portfolio';

  constructor() { }

  ngAfterViewInit(): void {
  initTemplateScripts();
  }

}





