import { Component, OnInit } from '@angular/core';

@Component({
    selector:'app-servers', //to call we use the element name
  //  because the selector is a an element 
  //selector: '[app-servers]', //to call we use the div
  //  because the selector is an attribute and not an element 
 //selector: '.app-servers', //to call we use the div
  //  because the selector is a class 
  template: '<app-server></app-server><app-server></app-server>',   
  // we can define the template directly here 
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
