import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { FormsModule } from "@angular/forms";

import { AppComponent } from "./app.component";
import { MyUppercasePipe } from "./pipes/my-uppercase.pipe";
import { MyAppendPipe } from "./pipes/my-append.pipe";

@NgModule({
    imports: [ BrowserModule, FormsModule ],
    declarations: [ AppComponent, MyUppercasePipe, MyAppendPipe ],
    bootstrap: [ AppComponent ],
})
export class AppModule { }
