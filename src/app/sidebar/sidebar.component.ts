import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  ngAfterViewInit(): void {
    this.checkOverlap();
  }

  private checkOverlap() {
    const sidebar = <HTMLDivElement>document.getElementById("sidebar");
    const card = <HTMLDivElement>document.getElementById("card");
    
    console.log(sidebar.clientWidth + ", " + sidebar.clientHeight);
    console.log(card.clientWidth + ", " + card.clientHeight);
    // console.log("Sidebard: (" + sidebar.offsetLeft + sidebar.clientWidth + ", " + (sidebar.offsetTop - sidebar.clientHeight) + ")");
    // console.log("Sidebar: (" + sidebar.offsetLeft + ", " + sidebar.offsetTop + ")");
    // console.log("Card: (" + card.offsetLeft + ", " + card.offsetTop + ")");
  }

}
