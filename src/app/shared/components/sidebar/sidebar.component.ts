import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})





export class SidebarComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  
  onPanelOpened() {
    console.log('Panel opened');
    // Handle panel opening
  }

  onPanelClosed() {
    console.log('Panel closed');
    // Handle panel closing
  }

}
