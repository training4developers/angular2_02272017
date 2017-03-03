import { Injectable } from "@angular/core";
import { Http, RequestOptions, Headers } from "@angular/http";

import "rxjs";
import { Observable } from "rxjs";

import { Car } from "../../car-tool-app/interfaces/car";

@Injectable()
export class Cars {

    private requestOptions = new RequestOptions({
        headers: new Headers({
            "Content-Type": "application/json",
        }),
    });

    private lastCarId: number = 4;
    private updateFns: Function[] = [];

    private cars: Car[] = [
        // { id: 1, make: "Toyota", model: "Yaris", color: "red", year: 2000, price: 12000 },
        // { id: 2, make: "Honda", model: "Yaris", color: "red", year: 2010, price: 12000 },
        // { id: 3, make: "Saab", model: "Yaris", color: "red", year: 2013, price: 12000 },
        // { id: 4, make: "Ford", model: "Yaris", color: "red", year: 2005, price: 12000 },
    ];

    constructor(private http: Http) { }

    public refresh(): Observable<Car[]> {
        return this.http.get("http://localhost:3010/cars")
            .map((res) => res.json())
            .map((cars) => {
                this.cars = cars;
                this.notifyUpdate();
                return this.cars;
            });
    }

    public getAll(): Car[] {
        return this.cars;
    }

    public append(car: Car): Promise<Car> {

        return this.http.post("http://localhost:3010/cars", JSON.stringify(car), this.requestOptions)
            .toPromise()
            .then((result) => {
                this.refresh();
                return car;
            });

    }

    public updated(fn: Function) {
        this.updateFns.push(fn);
    }

    public notifyUpdate() {
        this.updateFns.forEach((updateFn) => {
            updateFn();
        });
    }
}
