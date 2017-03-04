import { Component } from "@angular/core";
import { FormControl, FormGroup, FormArray, Validators } from "@angular/forms";

@Component({
    selector: "main",
    template: `
        <div [formGroup]="profileForm">
            First Name: <input type="text" formControlName="firstNameControl">
            <br>
            Last Name: <input type="text" formControlName="lastNameControl">
            <br>
            <div formArrayName="addressGroups">
                <div
                    *ngFor="let addressGroup of profileForm.controls['addressGroups'].controls"
                    [formGroup]="addressGroup">
                    <h2>Address</h2>
                    Street: <input type="text" formControlName="streetControl">
                    <br>
                    City: <input type="text" formControlName="cityControl">
                    <br>
                    State: <input type="text" formControlName="stateControl">
                    <br>
                    Zip Code: <input type="text" formControlName="zipCodeControl">
                    <br>
                </div>
            </div>
            <button type="button" (click)="addAddressGroup()">Add Address</button>
        </div>
        <br>
        <button type="button" (click)="save()">Save</button>
    `,
    styles: [
    ],
})
export class AppComponent {

    public profileForm: FormGroup;

    public firstName: string;

    constructor() {

        this.profileForm = new FormGroup({
            firstNameControl: new FormControl(""),
            lastNameControl: new FormControl(""),
            addressGroups: new FormArray([
                this.getNewAddressGroup(),
            ]),
        });
    }

    public getNewAddressGroup() {
        return new FormGroup({
            streetControl: new FormControl(""),
            cityControl: new FormControl(""),
            stateControl: new FormControl(""),
            zipCodeControl: new FormControl(""),
        });
    }

    public save() {
        console.dir(this.profileForm.value);
    }

    public addAddressGroup() {
        const fa = this.profileForm.controls["addressGroups"] as FormArray;
        fa.push(
            this.getNewAddressGroup(),
        );
    }

}
