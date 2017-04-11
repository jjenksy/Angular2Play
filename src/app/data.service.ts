/**
 * Created by jenksy on 4/10/17.
 */

import { Injectable } from '@angular/core';
import {createTestCustomer} from "./test-data";
import {LoggerService} from "./logger.service";

@Injectable()
export class DataService {

    constructor(private loggerService: LoggerService) { }

    getCustomers(){
      const customers = createTestCustomer();
      this.loggerService.log(`Got ${customers.length} customers!`);
      return customers;
    }

}
