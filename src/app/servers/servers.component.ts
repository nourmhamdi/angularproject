import { Component, OnInit } from '@angular/core';

@Component({

  //selector: '[app-servers]', //to call we use the div
  //  because the selector is an attribute and not an element 
 //selector: '.app-servers', //to call we use the div
  //  because the selector is a class 
      selector:'app-servers', //to call we use the element name
  //  because the selector is a an element 
 // template: '<app-server></app-server><app-server></app-server>', 
  templateUrl: './servers.component.html',  
  // we can define the template directly here 
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {
  allowNewServer= false;
  serverCreationStatus='No server was created!';
  serverName='TestServer';
  serverCreated=false;
  constructor() { 
  setTimeout(()=>{this.allowNewServer=true},2000)
  }
  ngOnInit() {
  }
  onCreateServer(){
    this.serverCreated=true;
  this.serverCreationStatus='Server was created! Name is '+this.serverName;
  }
  onUpdateServerName(event: any){
  console.log(event);
    this.serverName= (<HTMLInputElement> event.target).value;
  }

}
