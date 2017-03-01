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
        <car-form (carSubmitted)="addCar($event)"></car-form>
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

    public addCar(newCar: Car) {
        this.carsSvc.append(newCar);
    }
}
