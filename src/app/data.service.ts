/**
 * Created by jenksy on 4/10/17.
 */

import { Injectable } from '@angular/core';
import {createTestCustomer} from "./test-data";
import {LoggerService} from "./logger.service";
import {Customer} from "./model";
import {Observable} from "rxjs";
import {of} from "rxjs/observable/of";
import 'rxjs/add/operator/delay'
import 'rxjs/add/operator/do'


@Injectable()
export class DataService {

    constructor(private loggerService: LoggerService) { }

    getCustomersP() : Promise<Customer[]>{
      this.loggerService.log(`Getting customers as a promise... `);
      const customers = createTestCustomer();

      return new Promise<Customer[]>(resolve =>{
        setTimeout(()=>{
          this.loggerService.log(`Got ${customers.length} customers!`);
          resolve(customers);
        },1500)
      });
    }

    getCustomers(): Observable<Customer[]>{
      this.loggerService.log(`Getting customers as a observable... `);
      const customers = createTestCustomer();

      return of(customers)
        .delay(1500)
        .do(()=>{
          this.loggerService.log(`Got ${customers.length} customers!`);
        })
    }

}
