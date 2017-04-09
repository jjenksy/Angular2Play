import {Component, Input} from "@angular/core";
import {Address} from "./model";
/**
 * Created by jenksy on 4/9/17.
 */


@Component({
  moduleId: module.id,
  selector: 'my-address',
  templateUrl: 'address.component.html'
})
export class AddressComponent  {
  @Input() address: Address;

  regions   = ['East', 'Midwest', 'North', 'South', 'West'];
  states    = ['California', 'Illinois', 'Jalisco', 'Quebec'];
}
