import { Component, OnInit } from '@angular/core';
import { TodoService } from './todo.service';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})

export class TodoComponent implements OnInit {

  constructor(
    private todoService: TodoService,
    ) {
    this.todoService.toggleTodo = this.toggleToDo.bind(this);
  }

  ngOnInit(): void {
    this.registerDragElement();
  }

  // Make Card Draggable
  private registerDragElement() {
    const element = <HTMLDivElement>document.getElementById('todo');
    
    let pos1 = 0, pos2 = 0, pos3 = 0, pos4 = 0;
    
    
    const dragMouseDown = (e: MouseEvent) => {

      e = e || window.event;
      // get the mouse cursor position at startup:
      pos3 = e.clientX;
      pos4 = e.clientY;

      document.onmouseup = closeDragElement;
      // call a function whenever the cursor moves:
      document.onmousemove = elementDrag;
    };
  
    const elementDrag = (e: MouseEvent) => {
      e = e || window.event;
      // calculate the new cursor position:
      pos1 = pos3 - e.clientX;
      pos2 = pos4 - e.clientY;
      pos3 = e.clientX;
      pos4 = e.clientY;
      // set the element's new position:
      element.style.top = element.offsetTop - pos2 + 'px';
      element.style.left = element.offsetLeft - pos1 + 'px';
    };
  
    const closeDragElement = () => {
      /* stop moving when mouse button is released:*/
      document.onmouseup = null;
      document.onmousemove = null;
    };
  
    element.onmousedown = dragMouseDown;
  }
  
  public allowDrop(ev: DragEvent): void {
    ev.preventDefault();
  }
  
  public drag(ev: DragEvent): void {
    ev?.dataTransfer?.setData("text", (<HTMLDivElement>ev?.target).id);
  }
  
  public drop(ev: DragEvent, elementId: string): void {
    ev.preventDefault();
    var data = ev?.dataTransfer?.getData("text") || elementId;
    (<HTMLDivElement>ev.target).appendChild(<HTMLDivElement>document.getElementById(data));
  }

  public toggleToDo(): void {
    const element = <HTMLDivElement>document.getElementById("todo");
    const computedStyle = window.getComputedStyle(element);
    console.log(computedStyle.display);
    if (element.style.display === "none") {
      element.style.display = "block";
    } else {
      element.style.display = "none";
    }
    console.log(computedStyle.display);
  }
}
