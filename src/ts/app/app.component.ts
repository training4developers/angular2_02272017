import { Component, Pipe, PipeTransform, DoCheck } from "@angular/core";

// @Pipe({
//     name: "demo",
//     pure: true,
// })
// export class DemoPipe implements PipeTransform {

//     public transform(list: string[]) {
//         console.log("called demo pipe");
//         return list.sort();
//     }
// }

@Component({
    selector: "main",
    template: `
        <div>
            <h1>{{header | uppercase}}</h1>
            <ul>
                <li *ngFor="let color of sortedColors">{{color}}</li>
            </ul>
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
export class AppComponent implements DoCheck {

    public header: string = "Color Tool!";
    public newColor: string = "";

    public colors: any[] = [
        "saffron", "green", "white", "red", "gold", "blue",
        "yellow",
    ];

    public lastColors: any[];
    private internalSortedColors: any[];

    public get sortedColors() {

        if (this.lastColors !== this.colors) {
            console.log("do sort");
            this.lastColors = this.colors;
            this.internalSortedColors = this.colors.concat().sort();
        }
        return this.internalSortedColors;
    }

    public addColor() {

        //this.colors = this.colors.concat(this.newColor);

        this.colors.push(this.newColor);
        console.log(this.colors);
        this.newColor = "";
    }

    public ngDoCheck() {
        console.log("ran change detection");
    }

}
