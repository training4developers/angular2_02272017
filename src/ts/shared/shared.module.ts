import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";

import { FilteredTable } from "./components/filtered-table.component";
import { PaginatedTable } from "./components/paginated-table.component";

@NgModule({
    declarations: [ FilteredTable, PaginatedTable ],
    exports: [ FilteredTable, PaginatedTable ]
})
export class SharedModule { }
