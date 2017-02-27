import { Component } from "@angular/core";

@Component({
    selector: "main",
    template: `
        <div>
            <h1>{{header}}</h1>
            <ul>
                <li *ngFor="let color of colors">{{color}}</li>
            </ul>
        </div>
        <form>
            <div>
                <label for="new-color-input">New Color</label>
                <input type="text" [(ngModel)]="newColor"
                    id="new-color-input" name="newColorInput">
            </div>
            <button type="button" (click)="addColor()" >
                Add Color
            </button>
        </form>
    `,
})
export class AppComponent {

    public header: string = "Color Tool!";
    public newColor: string = "";

    public colors: any[] = [
        "saffron", "green", "white", "red", "gold", "blue",
        "yellow",
    ];

    public addColor() {
        this.colors.push(this.newColor);
        this.newColor = "";
    }

}
