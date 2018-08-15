import { Component } from '@angular/core';
@Component({ // component configuration 
  selector:'app-server', //have to be unique it allows to use the component us an html element 
  templateUrl:'./server.component.html',
}) // to make angular know it's a component and not a normal ts class 
export class ServerComponent { //typeScript class 
  // here we declare the attribut of the comonent
  serverId: number =10;
  serverStatus: string ='offline';
  
  constructor(){
  this.serverStatus = Math.random() > 0.5 ? 'online' : 'offline';
  }
  
  getServerStatus(){
 return this.serverStatus;
 }
  getColor(){
  return this.serverStatus === 'online' ? 'green' : 'red' ;
  }
}