import { Component, OnInit, Renderer2 } from '@angular/core';
import { TodoService } from './todo.service';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css'],
})

export class TodoComponent implements OnInit {
  number = 0;
  tasks = 1;

  constructor(
    private todoService: TodoService,
    private renderer: Renderer2,
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

      e = e || window.event as MouseEvent;
      // get the mouse cursor position at startup:
      pos3 = e.clientX;
      pos4 = e.clientY;

      document.onmouseup = closeDragElement;
      // call a function whenever the cursor moves:
      document.onmousemove = elementDrag;
    };
  
    const elementDrag = (e: MouseEvent) => {
      e = e || window.event as MouseEvent;
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

  public addTask(): void {
    if (this.tasks == 9) return;
    this.number++;
    this.tasks++;
    // this.tasks[this.tasks.length - 1] = "something";

    const section = document.getElementById("tasks");

    //Creating  elements to later append
    var task = this.renderer.createElement("label");
    this.renderer.addClass(task, "task-container");
    this.renderer.setAttribute(task, 'id', `${(this.tasks)}a`);

    // Applying CSS
    var checkbox = this.renderer.createElement("input");
    this.renderer.setAttribute(checkbox, 'type', 'checkbox');
    var checkmark = this.renderer.createElement("span");
    this.renderer.addClass(checkmark, "checkmark");
    var div = this.renderer.createElement("div");
    this.renderer.addClass(div, 'flex');
    var text = this.renderer.createElement("input");
    this.renderer.setAttribute(text, 'type', 'text');
    this.renderer.setAttribute(text, "placeholder", "Enter Task");
    var del = this.renderer.createElement("img");
    this.renderer.addClass(del, 'icon');
    this.renderer.setAttribute(del, 'src', '../../assets/img/icons/trash.svg');
    this.renderer.setAttribute(del, 'id', `${this.tasks}`);
    var id = this.tasks;
    this.renderer.listen(del, 'click', (event) => this.removeTask(`${id}`));

    // Appending
    this.renderer.appendChild(task, checkbox);
    this.renderer.appendChild(task, checkmark);
    this.renderer.appendChild(task, div)
    this.renderer.appendChild(div, text);
    this.renderer.appendChild(div, del);

    section?.appendChild(task);
  }

  public removeTask(id: string): void {
    const label = document.getElementById(`${id}a`);
    this.renderer.removeChild(label.parentElement, label);
  }
}
