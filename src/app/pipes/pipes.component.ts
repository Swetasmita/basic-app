import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pipes',
  templateUrl: './pipes.component.html',
  styleUrls: ['./pipes.component.css']
})
export class PipesComponent implements OnInit {

  dateToday: Date = new Date();
  todayNumber: number = Date.now();
  user ={
    userId : 20,
    firstName:'Michel',
    lastName: 'Smith',
    DOB:'08/10/2005',
    salary:42000,

  }
  constructor() { }
 
  ngOnInit(): void {
    
  }


}
