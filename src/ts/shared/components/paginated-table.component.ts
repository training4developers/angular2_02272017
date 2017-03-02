import {
    Component, Input, OnInit, ContentChild, AfterContentInit,
    Optional, Inject, AfterContentChecked, forwardRef,
} from "@angular/core";

import { FilterTable, PageableTable } from "../models";

@Component({
    selector: "paginated-table",
    template: `
    <ng-content></ng-content>
    <form>
        <button type="button" (click)="go(-1)">Prev</button>
        <button type="button" (click)="go(1)">Next</button>
        <span>
            Page {{currentPage+1}} of {{totalPages}}
        </span>
    </form>`,
    providers: [
        { provide: FilterTable, useExisting: forwardRef(() => PaginatedTable) },
    ],
})
export class PaginatedTable implements OnInit, AfterContentInit, AfterContentChecked {

    @Input()
    public data: any[] = [];

    @Input()
    public pageLength: number = 10;

    @Input()
    public initialPage: number = 0;

    @Input()
    public listPropName: string = "cars";

    @ContentChild(PageableTable)
    public pageableTable: Object;

    public get listPage(): any[] {
        const startIndex = this.currentPage * this.pageLength;
        const endIndex = startIndex + this.pageLength;
        return this.data.slice(startIndex, endIndex);
    }

    public get totalPages(): number {
        return Math.ceil(this.data.length / this.pageLength);
    }

    public currentPage: number = 0;

    public ngOnInit() {
        this.currentPage = this.initialPage;
    }

    public ngAfterContentInit() {
        this.data = this.pageableTable[this.listPropName];
        console.log("paginated after content init");
    }

    public ngAfterContentChecked() {
        this.pageableTable[this.listPropName] = this.listPage;
        console.log("paginated after content checked");
    }

    public go(pages: number) {
        this.currentPage += pages;
        this.pageableTable[this.listPropName] = this.listPage;
    }
}
