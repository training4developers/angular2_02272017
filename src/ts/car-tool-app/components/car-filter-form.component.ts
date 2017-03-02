import { Component, forwardRef } from "@angular/core";

import { FilterForm } from "../../shared/models";

@Component({
    selector: "car-filter-form",
    template: `<form>
        <label for="filter-value-input">Car Make:</label>
        <input type="text" id="filter-value-input"
            [(ngModel)]="filterValue" name="filterValueInput" />
    </form>`,
    providers: [
        { provide: FilterForm, useExisting: forwardRef(() => CarFilterForm) },
    ],
})
export class CarFilterForm {

    public filterValue: string = "";

}
