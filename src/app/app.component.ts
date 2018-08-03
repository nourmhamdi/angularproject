import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  //styleUrls: ['./app.component.css']
  styles:['h3{color: dodgerblue;}' ] // we can defile the style in line it's an array of styles 
})
export class AppComponent {
  // içi on declare les variables 
  name = 'Nour';
}
