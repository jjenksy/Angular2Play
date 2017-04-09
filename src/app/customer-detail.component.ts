import {Component, Input, Output, EventEmitter} from "@angular/core";
import {Customer} from "./model";
/**
 * Created by jenksy on 4/9/17.
 */
@Component({
  moduleId: module.id,
  selector: 'customer-detail',
  templateUrl: 'customer-detail.component.html',
  styleUrls: ['customer-detail.component.css']

})

export class CustomerDetailComponent {
  @Input()
  customer: Customer;
  @Output()
  shift = new EventEmitter<number>();

  showAddress = true;
  //go left method
  left(){
    this.shift.emit(-1);
  }
  //go right method
  right(){
    this.shift.emit(1);
  }
}
