import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  public todos = [{isCompleted:false,title: 'Sample TODO 1'}];
  public todoInput: string = '';

  public handleTodoAddClick(){
    if(!this.todoInput){
      alert('Enter something into todo input box');
      return;
    }
    this.addTodo({isCompleted:false, title: this.todoInput});
    this.todoInput = '';
  }

  public handleCheckBoxChange(e,todo){
    if(todo.isCompleted===false){
      todo.isCompleted = true;
    } else {
      todo.isCompleted = false;
    }
    console.log(e.target);
  }

  public handleDelete(todo){
    let idx = this.todos.indexOf(todo);
    this.todos.splice(idx,1);

  }

  public getTotalLeft(){
    return this.todos.filter(t=>t.isCompleted===false).length;
  }
  public getTotalCompleted(){
    return this.todos.filter(t=>t.isCompleted===true).length;
  }

  private addTodo(todo){
    if(!todo){
      return;
    }
    this.todos.push(todo);
  }


}
