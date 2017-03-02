import { Component } from "@angular/core";
import { Http, RequestOptions, Headers } from "@angular/http";

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

    constructor(private carsSvc: Cars, private http: Http) {

        const requestOptions = new RequestOptions({
            headers: new Headers({
                "Content-Type": "application/json",
            }),
        });

        this.http.post("http://localhost:3010/cars", JSON.stringify({
            make: "Toyota", model: "Yaris", color: "blue", year: 1990, price: 10000,
        }), requestOptions).toPromise().then((res) => res.json())
            .then(() => this.carsSvc.refresh())
            .then((results) => {
                this.cars = this.carsSvc.getAll();
                console.log(results)
            });



    }

}