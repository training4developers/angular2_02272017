import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { FormsModule } from "@angular/forms";

import { SharedModule } from "../shared/shared.module";

import { AppComponent } from "./app.component";
import { ToolHeader } from "./components/tool-header.component";
import { CarTable } from "./components/car-table.component";
import { CarForm } from "./components/car-form.component";
import { CarFilterForm } from "./components/car-filter-form.component";

@NgModule({
    imports: [ BrowserModule, FormsModule, SharedModule ],
    declarations: [
        AppComponent, ToolHeader,
        CarForm, CarTable, CarFilterForm,
    ],
    bootstrap: [ AppComponent ],
})
export class AppModule { }
