import { Injectable } from "@angular/core";

import { Car } from "../interfaces/car";

@Injectable()
export class Cars {

    private cars: Car[] = [
        { id: 1, make: "Toyota", model: "Yaris", color: "red", year: 2000, price: 12000 },
        { id: 2, make: "Honda", model: "Yaris", color: "red", year: 2010, price: 12000 },
        { id: 3, make: "Saab", model: "Yaris", color: "red", year: 2013, price: 12000 },
        { id: 4, make: "Ford", model: "Yaris", color: "red", year: 2005, price: 12000 },
    ];

    public getAll(): Car[] {
        return this.cars;
    }
}
