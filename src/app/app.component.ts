import { Component } from '@angular/core';
import {Customer, Address} from "./model";

@Component({
  moduleId: module.id,
  selector: 'my-app',//<my-app> html to use the component
  templateUrl: 'template/default.view.html',//template url for the view id using module.id it will look for the template from this module
  styleUrls: ['app.component.css']
})
export class AppComponent  {


  hideAddress = false;
  color = 'red';
  customer : Customer = new Customer(1,"John", "favicon.ico", new Address("Beechnut", "Houston", "South", "Tx"));

  colorChange(){
    this.color = this.color === 'red' ? 'blue':'red';
  }

  selectColorChange(color: string){
    this.color = color;
  }
}
