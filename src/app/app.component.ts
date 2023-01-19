import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title: string = 'To-Do List';
  // constructor(){  //timeout for changing after a certain timeout
  //   setTimeout(()=>
  //   {
  //     this.title ="Changed Title";
  //   },2000);
  // }
}
