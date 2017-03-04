import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { HttpModule } from "@angular/http";

import { AppComponent } from "./app.component";
import { Cars } from "./services/cars.service";

@NgModule({
    imports: [ BrowserModule, FormsModule, HttpModule, ReactiveFormsModule ],
    declarations: [ AppComponent ],
    bootstrap: [ AppComponent ],
    providers: [ Cars ],
})
export class AppModule { }
