import { Component, Pipe, PipeTransform, DoCheck } from "@angular/core";
import { Logger } from "./services/logger.service";

// const MockLogger = {
//     log: () => {},
//     error: () => {},
// };

@Component({
    selector: "main",
    template: `
        <div>
            <h1>{{header | myUppercase | myAppend:'!!!!'}}</h1>
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
    providers: [ { provide: Logger, useClass: Logger } ],
})
export class AppComponent implements DoCheck {

    public header: string = "Color Tool!";
    public newColor: string = "";
    public colorFilter: string = "";

    //public startIndex: number = 1;
    //public endIndex: number = 4;

    public currentPage: number = 0;
    public pageLength: number = 10;

    // private logger: Logger;

    // constructor(logger: Logger) {
    //     this.logger = logger;
    // }

    public get startIndex() {
        return this.currentPage * this.pageLength;
    }

    public get endIndex() {
        return this.startIndex + this.pageLength;
    }

    public colors: any[] = [
        "saffron", "green", "white", "red", "gold", "blue",
        "yellow",
    ];

    public lastColors: any[];

    private filterCache: Map<string, string[]> =
        new Map<string, string[]>();

    constructor(private logger: Logger) { }

    public nextPage() {
        this.currentPage++;
    }

    public prevPage() {
        this.currentPage--;
    }

    public filteredColors(sortFn: Function) {

        if (!this.filterCache.has(this.colorFilter)) {
            this.logger.log("doing some filtering");
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

