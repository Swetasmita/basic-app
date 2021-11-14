import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Welcome to Basic Angular Application';
  subTitle= "Its fun to learn Angular";
  Intro = "This is from my app component";
  placeholderValue ="Enter Value";
  className ='c1';
  hrefVal= "https://www.w3schools.com/angular/";

//Event Binding
  consoleLog(){
   console.log("The event is focused!");
  }
}
