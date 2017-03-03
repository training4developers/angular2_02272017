import { Component } from "@angular/core";

let counter: number = 0;

@Component({
    selector: "my-comp",
    template: `<span>index: {{this.index}}</span>`,
})
export class MyComp { 

    public index: number;

    constructor() {
        this.index = counter++;
        console.dir(this);
    }
    
    public doIt() {
        console.log('doit');
    }

}

@Component({
    selector: "main",
    template: `
        <!-- <my-comp></my-comp>
        <my-comp></my-comp>
        <my-comp></my-comp>
        <my-comp></my-comp>
        <my-comp></my-comp> -->
        <form novalidate>
            <div>
                <label for="first-name-input">First Name:</label>
                <input type="text" id="first-name-input"
                    name="firstNameInput" [(ngModel)]="firstName"
                    required #firstNameInputRef="ngModel" (keydown)="getChange($event)">
                <span *ngIf="firstNameInputRef.invalid && firstNameInputRef.touched">
                    First Name is required.
                </span>
                <br>Value: {{firstName}},
                    {{firstNameInputRef.invalid ? 'invalid' : 'valid'}}
            </div>
            <div>
                <label for="last-name-input">Last Name:</label>
                <input type="text" id="last-name-input"
                    name="lastNameInput" [(ngModel)]="lastName"
                    required>
                <br>Value: {{lastName}}
            </div>
            <div>
                <label for="birth-date-input">Birth Date:</label>
                <input type="date" id="birth-date-input"
                    name="birthDateInput" [(ngModel)]="birthDate" min="2010-01-01">
                <br>Value: {{birthDate}}                
            </div>
            <div>
                <label for="fav-color-input">Favorite Color:</label>
                <input type="color" id="fav-color-input"
                    name="favColorInput" [(ngModel)]="favColor">
                <br>Value: {{favColor}}                
            </div>
            <div>
                <label for="experience-level-input">Experience Level:</label>
                <input type="range" id="experience-level-input"
                    name="experienceLevelInput" [(ngModel)]="experienceLevel">
                <br>Value: {{experienceLevel}}                
            </div>
            <div>
                <label for="is-customer-input">Is Customer:</label>
                <input type="checkbox" id="is-customer-input"
                    name="isCustomerInput" [(ngModel)]="isCustomer">
                <br>Value: {{isCustomer ? 'Is a Customer' : 'Is Not a Customer'}}
            </div>
            <fieldset>
                <legend>Kind of User</legend>
                <div>
                    <label for="kind-of-user-professional-input">Professional:</label>
                    <input type="radio" id="kind-of-user-professional-input"
                        name="kindOfUser" [(ngModel)]="kindOfUser" value="Professional">
                </div>
                <div>
                    <label for="kind-of-user-hobbyist-input">Hobbyist:</label>
                    <input type="radio" id="kind-of-user-hobbyist-input"
                        name="kindOfUser" [(ngModel)]="kindOfUser" value="Hobbyist">
                </div>
                <div>
                    <label for="kind-of-user-student-input">Student:</label>
                    <input type="radio" id="kind-of-user-student-input"
                        name="kindOfUser" [(ngModel)]="kindOfUser" value="Student">
                </div>
                <br>Value: {{kindOfUser}}
            </fieldset>
            <div>
                <label for="comments-textarea">Comments</label>
                <textarea id="comments-textarea" name="commentsTextArea"
                    [(ngModel)]="comments"></textarea>
            </div>
            <div>
                <label for="sample-select">Sample Select</label>
                <select id="sample-select" name="sampleSelect"
                    [(ngModel)]="sampleSelect">
                    <option value="">Select One...</option>
                    <option *ngFor="let option of options" [value]="option.value">
                        {{option.label}}
                    </option>
                </select>
                <br> Value: {{sampleSelect}}
            </div>
            <div>
                <label for="sample-select2">Sample Select</label>
                <select id="sample-select2" name="sampleSelect2"
                    [(ngModel)]="sampleSelect2" size="5">
                    <option *ngFor="let option of options" [value]="option.value">
                        {{option.label}}
                    </option>
                </select>
                <br> Value: {{sampleSelect2}}
            </div>
            <div>
                <label for="sample-select3">Sample Select</label>
                <select id="sample-select3" name="sampleSelect3"
                    [(ngModel)]="sampleSelect3" size="5" multiple>
                    <option *ngFor="let option of options" [value]="option.value">
                        {{option.label}}
                    </option>
                </select>
                <br> Value: {{sampleSelect3}}
            </div>
            <button type="button" (click)="save()">Save</button>
        </form>
    `,
    styles: [
        "input.ng-invalid.ng-touched { border: red 1px solid; }",
        "textarea { vertical-align:top; }",
    ],
})
export class AppComponent {

    public firstName: string = "";

    public options: any[] = [
        { value: 1, label: "Option 1" },
        { value: 2, label: "Option 2" },
        { value: 3, label: "Option 3" },
    ];

    public save() {
        console.dir(this);
    }

    public getChange(e: KeyboardEvent) {
        e.preventDefault();
        console.log((e.target as HTMLInputElement).value);
        console.log("change occurred");
    }
}