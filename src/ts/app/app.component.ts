import { Component } from "@angular/core";

@Component({
    selector: "main",
    template: "<h1>{{header}}</h1>",
})
export class AppComponent {

    public header: string = "Color Tool!";

}
