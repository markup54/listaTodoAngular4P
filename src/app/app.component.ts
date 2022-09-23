import { Component } from '@angular/core';
import { Todo } from './todo';
import { TODO } from './todos';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'miejsca4p';
  todos: Todo[] = TODO;
  aktualneTodo! :Todo;
  szczeg_wyswietl(todo:Todo):void{
      console.log(todo.nazwa);
      this.aktualneTodo=todo;
  }
}
