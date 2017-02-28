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
            <form>
                <div>
                    <label>Filter:</label>
                    <input type="text" name="colorFilterInput" [(ngModel)]="colorFilter">
                </div>
            </form>
            <ul>
                <li *ngFor="let color of filteredColors">{{color}}</li>
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
    public colorFilter: string = "";

    public colors: any[] = [
        "saffron", "green", "white", "red", "gold", "blue",
        "yellow",
    ];

    public lastColors: any[];

    private internalSortedColors: any[];
    private filterCache: Map<string, string[]> =
        new Map<string, string[]>();

    public get filteredColors(): string[] {
        if (!this.filterCache.has(this.colorFilter)) {
            console.log("did filter");
            this.filterCache.set(this.colorFilter,
                this.colors.filter((color) => color.startsWith(this.colorFilter)));
        }
        return this.filterCache.get(this.colorFilter);
    }

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
        this.filterCache.clear();
    }

    public ngDoCheck() {
        //console.log("ran change detection");
    }

}

                // this.colors.filter((color) => {
                //     if (this.colorFilter == null || String(this.colorFilter).length === 0) {
                //         return true;
                //     } else {
                //         return color.startsWith(this.colorFilter);
                //     }

                // }));

