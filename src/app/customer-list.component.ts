import {Component, OnInit} from "@angular/core";
import {Customer} from "./model";
import {DataService} from "./data.service";
import {LoggerService} from "./logger.service";
/**
 * Created by jenksy on 4/9/17.
 */
@Component({
  moduleId: module.id,
  selector: 'customer-list',
  templateUrl: 'customer-list.component.html',
  styleUrls: ['customer-list.component.css']
})

export class CustomerListComponent implements OnInit {

  customer: Customer;

  customers: Customer[];

  isBusy = false;

  constructor(private dataService : DataService, private loggerService : LoggerService){}

  //called by angular
  ngOnInit(){
    this.getCustomer();
  }

  getCustomer(){
    this.isBusy = true;
    // this.dataService.getCustomersP().then(res=>{
    this.dataService.getCustomers().subscribe(res=>{
      this.isBusy = false;
      this.customers = res;
    })
    this.loggerService.log("Getting customers...");
  }

  shift(increment:number){
    let ix =this.customers.findIndex(c=> c === this.customer) + increment;
    ix = Math.min(this.customers.length-1, Math.max(0, ix));
    this.customer = this.customers[ix];
  }
}
