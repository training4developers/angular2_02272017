import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { FormsModule } from "@angular/forms";

import { AppComponent } from "./app.component";
import { ToolHeader } from "./components/tool-header.component";

@NgModule({
    imports: [ BrowserModule, FormsModule ],
    declarations: [ AppComponent, ToolHeader ],
    bootstrap: [ AppComponent ],
})
export class AppModule { }
