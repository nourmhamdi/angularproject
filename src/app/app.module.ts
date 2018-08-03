import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ServerComponent } from './server/server.component';
import{ FormsModule} from '@angular/forms';
import { HttpModule } from '@angular/http';
@NgModule({
  declarations: [ // here we declare our new component  , we have to import them from were they are defined 
    AppComponent,
    ServerComponent
  ],
  imports: [
    BrowserModule,
    FormsModule, // pour pouvoir utilis� ngModel
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
