import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit {

  constructor() { }
  Logo ="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQzLAvv9ZPvaX1vcOV-9KDiQrL-wYMKu6tfWMRi5D4Gc9_OJBQ5WkBVNrGmmbWHErBC39E&usqp=CAU"
  username =" ";
  name= 'admin';
  mycolor='blue';
  changeColor = '#333300';
  ngOnInit(): void {
  }
  disableBox = true;
  showMsg = false;

  clickEvent(){
     this.disableBox = false;
     this.name = "admin clicked it";  
  }
  clickMe(){
     alert("Hello User, Welcome!");
     this.changeColor='#cc0000';
     this.username ="John";
    }
    
}
