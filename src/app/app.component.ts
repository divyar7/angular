import { Component } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Passing data from parent to child';
  subtitletest:string = "initial data";
  getsubtitle(subtitle:string){
    this.subtitletest = subtitle;
    console.log(subtitle)
  }
}
