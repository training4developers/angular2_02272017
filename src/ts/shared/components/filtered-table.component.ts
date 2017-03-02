import {
    Component, ContentChild, Input,
    AfterContentInit, AfterContentChecked,
} from "@angular/core";

import { FilterForm, FilterTable } from "../models";

@Component({
    selector: "filtered-table",
    template: `
        <ng-content select="[data-filter-form]"></ng-content>
        <ng-content select="[data-filter-table]"></ng-content>
    `,
})
export class FilteredTable implements AfterContentInit, AfterContentChecked {

    @ContentChild(FilterForm)
    public filterForm: FilterForm;

    @ContentChild(FilterTable)
    public filterTable: FilterTable;

    @Input()
    public filterFn: (filterValue: string) =>
        (value: any, index: number, array: any[]) => boolean;

    public data: any[];

    public ngAfterContentInit() {
        console.log("filter after content init");
        this.data = this.filterTable.data;
    }

    public ngAfterContentChecked() {
        console.log("filter after content checked");
        console.log(this.filterForm.filterValue);
    }

    public ngDoCheck() {
        console.log("do check");
        if (this.data) {
            this.filterTable.data = this.filteredData;
        }
    }

    public get filteredData(): any[] {
        return this.data.filter(this.filterFn(this.filterForm.filterValue));
    }
}
