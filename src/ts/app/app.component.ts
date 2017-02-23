import { Component } from "@angular/core";

@Component({
    selector: "main",
    template: "<h1>{{message}}</h1>",
})
export class AppComponent {
    public message: string = "Hello World!";
}