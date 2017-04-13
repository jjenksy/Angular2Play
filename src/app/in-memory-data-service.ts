import {InMemoryDbService} from "angular-in-memory-web-api";
import {createTestCustomer} from "./test-data";
/**
 * Created by jenksy on 4/12/17.
 */



export class InMemoryDataService implements InMemoryDbService{

  createDb(): {} {
    return { customers : createTestCustomer()};
  }
}
