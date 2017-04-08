import { Component } from '@angular/core';

@Component({
  selector: 'my-app',//<my-app> html to use the component
  templateUrl: 'app/template/default.view.html'//template url for the view
})
export class AppComponent  {
  name = 'Jenkins';
  image = 'favicon.ico';
  color = 'red';
  street = 'Beechnut';
  city = 'Houston';
  region ="U.S.";
  hideAddress = false;

  colorChange(){
    this.color = this.color === 'red' ? 'blue':'red';
  }

  selectColorChange(color: string){
    this.color = color;
  }

  addressClick(){
    this.hideAddress = !this.hideAddress;
  }

  selectRegionChange(region: string){
    this.region = region;
  }
}
