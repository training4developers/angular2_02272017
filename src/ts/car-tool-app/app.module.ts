import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { FormsModule } from "@angular/forms";

import { AppComponent } from "./app.component";
import { ToolHeader } from "./components/tool-header.component";
import { CarForm } from "./components/car-form.component";

@NgModule({
    imports: [ BrowserModule, FormsModule ],
    declarations: [ AppComponent, ToolHeader, CarForm ],
    bootstrap: [ AppComponent ],
})
export class AppModule { }
