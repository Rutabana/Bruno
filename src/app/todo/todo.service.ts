import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TodoService {
  
  constructor() { }
  
  public toggleTodo(): void {
    const element = document.getElementById("todo");
  };
}
