import {NgModule} from "@angular/core";
import {BrowserModule} from "@angular/platform-browser";
import {FormsModule} from "@angular/forms";
import {AppComponent} from "./app.component";
import {AddressComponent} from "./address.component";
import {CustomerListComponent} from "./customer-list.component";
import {CustomerDetailComponent} from "./customer-detail.component";
import {DataService} from "./data.service";
import {LoggerService} from "./logger.service";
import {InMemoryWebApiModule} from "angular-in-memory-web-api";
import {InMemoryDataService} from "./in-memory-data-service";
import {HttpModule} from "@angular/http";
/**
 * Created by jenksy on 4/9/17.
 */
@NgModule({
  imports: [                  // What stuff do I need?
    BrowserModule,
    FormsModule,
    HttpModule,
    InMemoryWebApiModule.forRoot(InMemoryDataService)//fake backend server not a server just fake as hell
  ],
  declarations: [             // What's in my app module?
    AppComponent,
    AddressComponent,
    CustomerDetailComponent,
    CustomerListComponent
  ],
  providers :[DataService, LoggerService],//providers is for services
  bootstrap: [ AppComponent ] // Where do I start?
})
export class AppModule { }
