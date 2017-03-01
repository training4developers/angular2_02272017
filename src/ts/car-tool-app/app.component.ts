import { Component } from "@angular/core";

import { Car } from "./interfaces/car";
import { Cars } from "./services/cars.service";

@Component({
    selector: "main",
    template: `
        <tool-header [header]="toolHeader"></tool-header>
        <table>
            <thead>
                <tr>
                    <th>Make</th>
                    <th>Model</th>
                    <th>Year</th>
                    <th>Color</th>
                    <th>Price</th>
                </tr>
            </thead>
            <tbody>
                <tr *ngFor="let car of cars">
                    <td>{{car.make}}</td>
                    <td>{{car.model}}</td>
                    <td>{{car.year}}</td>
                    <td>{{car.color}}</td>
                    <td>{{car.price}}</td>
                </tr>
            </tbody>
        </table>
        <form>
            <div>
                <label for="make-input">Make</label>
                <input type="text" [(ngModel)]="newCar.make" id="make-input" name="makeInput">
            </div>
            <div>
                <label for="model-input">Model</label>
                <input type="text" [(ngModel)]="newCar.model" id="model-input" name="modelInput">
            </div>
            <div>
                <label for="year-input">Year</label>
                <input type="text" [(ngModel)]="newCar.year" id="year-input" name="yearInput">
            </div>
            <div>
                <label for="color-input">Color</label>
                <input type="text" [(ngModel)]="newCar.color" id="color-input" name="colorInput">
            </div>
            <div>
                <label for="price-input">Price</label>
                <input type="text" [(ngModel)]="newCar.price" id="price-input" name="priceInput">
            </div>
            <button type="button" (click)="addCar()" >
                Add Car
            </button>
        </form>
    `,
    providers: [ Cars ],
})
export class AppComponent {

    public toolHeader: string = "Car Tool!!";
    public cars: Car[];
    public newCar: Car = {} as Car;

    public currentPage: number = 0;
    public pageLength: number = 10;

    public get startIndex() {
        return this.currentPage * this.pageLength;
    }

    public get endIndex() {
        return this.startIndex + this.pageLength;
    }

    constructor(private carsSvc: Cars) {

        this.carsSvc.updated(() => {
            console.log("car svc updated");
            this.cars = carsSvc.getAll();
        });

        this.cars = carsSvc.getAll();
   }

    public nextPage() {
        this.currentPage++;
    }

    public prevPage() {
        this.currentPage--;
    }

    public addCar() {
        this.carsSvc.append(this.newCar);
        this.newCar = {} as Car;
    }
}
