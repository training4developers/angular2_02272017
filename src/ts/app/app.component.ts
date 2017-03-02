import { Component } from "@angular/core";
import { Http } from "@angular/http";

import { Car } from "../car-tool-app/interfaces/car";
import { Cars } from "./services/cars.service";

@Component({
    selector: "main",
    template: `
        <ul>
            <li *ngFor="let car of cars">
                {{car.make}}
            </li>
        </ul>
    `,
})
export class AppComponent {

    private cars: Car[] = [];

    constructor(private carsSvc: Cars) {

        this.carsSvc.getAll().then((cars) => this.cars = cars);

    }




}