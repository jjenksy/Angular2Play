/**
 * Created by jenksy on 4/10/17.
 */
import { Injectable } from '@angular/core';

@Injectable()
export class LoggerService {

    constructor() { }

    log(data : string){
      console.log(data);
    }

}
