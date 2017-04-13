///<reference path="../../node_modules/rxjs/add/operator/map.d.ts"/>
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
import 'rxjs/add/operator/toPromise'
import 'rxjs/add/operator/map'
import {Http} from "@angular/http";


@Injectable()
export class DataService {
    private customersUrl = 'api/customers';
    constructor(private loggerService: LoggerService,
                private http: Http) { }

    getCustomersP() : Promise<Customer[]>{
      this.loggerService.log(`Getting customers as a promise via http... `);
      return this.http.get(this.customersUrl).toPromise().then(res =>{
        const cust = res.json().data as Customer[];
             this.loggerService.log(`Got ${cust.length} customers!`);
        return cust;
      },error =>{
        this.loggerService.log(`An error occured in http promise service ${error}`);
        return Promise.reject(`Something bad happened check the console`);
      });
      // const customers = createTestCustomer();
      //
      // return new Promise<Customer[]>(resolve =>{
      //   setTimeout(()=>{
      //     this.loggerService.log(`Got ${customers.length} customers!`);
      //     resolve(customers);
      //   },1500)
      // });
    }

    getCustomers(): Observable<Customer[]>{
      this.loggerService.log(`Getting customers as a observable... `);
      return this.http.get(this.customersUrl).map(response => response.json().data as Customer[])
         .do((custs)=>{
           this.loggerService.log(`Got ${custs.length} customers!`);    // const customers = createTestCustomer();
         });

    }

}
