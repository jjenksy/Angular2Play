import {Component} from "@angular/core";
/**
 * Created by jenksy on 4/9/17.
 */


@Component({
  selector: 'my-app',
  template: `
    <h1>{{title}}</h1>
    <customer-list></customer-list>`
})
export class AppComponent  { title = 'Customer Management'; }
