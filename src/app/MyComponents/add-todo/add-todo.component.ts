import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Todo } from 'src/app/Todo';

@Component({
  selector: 'app-add-todo',
  templateUrl: './add-todo.component.html',
  styleUrls: ['./add-todo.component.css']
})
export class AddTodoComponent implements OnInit{
  @Output() TodoAdd: EventEmitter<Todo> = new EventEmitter();
  title: string;
  desc: string;
  regexp = new RegExp('^[a-zA-Z]');
  constructor(){}
  ngOnInit(): void {
  }
  
  onSubmit(addingForm:NgForm){
    const todo = {
      sno: 8,
      title: this.title,
      desc: this.desc,
      active: true
    }
    if(this.regexp.test(todo.title)&& this.regexp.test(todo.desc)){
      this.TodoAdd.emit(todo);
      this.title='';
      this.desc='';
    }
    this.completeLogin(addingForm);
  }
  completeLogin(login: NgForm){
    login.reset();
  }


}
