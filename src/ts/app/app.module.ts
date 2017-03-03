import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { FormsModule } from "@angular/forms";
import { HttpModule } from "@angular/http";

import { AppComponent, MyComp } from "./app.component";
import { Cars } from "./services/cars.service";

@NgModule({
    imports: [ BrowserModule, FormsModule, HttpModule ],
    declarations: [ AppComponent, MyComp ],
    bootstrap: [ AppComponent ],
    providers: [ Cars ],
})
export class AppModule { }
