import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { FormsModule } from "@angular/forms";

import { AppComponent } from "./app.component";
import { MyUppercasePipe } from "./pipes/my-uppercase.pipe";
import { MyAppendPipe } from "./pipes/my-append.pipe";

import { Logger } from "./services/logger.service";
import { Logger2 } from "./services/logger2.service";

@NgModule({
    imports: [ BrowserModule, FormsModule ],
    declarations: [ AppComponent, MyUppercasePipe, MyAppendPipe ],
    bootstrap: [ AppComponent ],
    providers: [ { provide: Logger, useClass: Logger2 } ],
})
export class AppModule { }
