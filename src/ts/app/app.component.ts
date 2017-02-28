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
                <li *ngFor="let color of filteredColors(colorSort) | slice:startIndex:endIndex">{{color}}</li>
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

    public startIndex: number = 1;
    public endIndex: number = 4;

    public colors: any[] = [
        "saffron", "green", "white", "red", "gold", "blue",
        "yellow",
    ];

    public lastColors: any[];

    private filterCache: Map<string, string[]> =
        new Map<string, string[]>();

    public filteredColors(sortFn: Function) {

        if (!this.filterCache.has(this.colorFilter)) {
            this.filterCache.set(this.colorFilter,
                sortFn(this.colors.filter((color) => color.startsWith(this.colorFilter))));
        }
        return this.filterCache.get(this.colorFilter);
    }

    public colorSort(colors: string[]) {
        return colors.sort();
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

