import { Component, Input, OnInit } from '@angular/core';
import { TodoService } from '../todo/todo.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {

  constructor(
    private todoService: TodoService,
  ) { }

  ngOnInit(): void {
  }

  public toggleToDo(): void {
    this.todoService.toggleTodo();
  }

}
