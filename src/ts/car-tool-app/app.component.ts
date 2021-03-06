import { Component, ViewEncapsulation } from "@angular/core";

import { Car } from "./interfaces/car";
import { Cars } from "./services/cars.service";

@Component({
    selector: "main",
    template: `
        <tool-header [header]="toolHeader"></tool-header>
        <filtered-table [filterFn]="carFilter">
            <section data-filter-form>
                <car-filter-form></car-filter-form>
            </section>
            <section data-filter-table>
                <paginated-table [pageLength]="3">
                    <car-table [cars]="cars"></car-table>
               </paginated-table>
            </section>
        </filtered-table>
        <car-form (carSubmitted)="addCar($event)"></car-form>
    `,
    providers: [ Cars ],
    encapsulation: ViewEncapsulation.Emulated,
})
export class AppComponent {

    public toolHeader: string = "Car Tool";
    public cars: Car[];
    public newCar: Car = {} as Car;

    constructor(private carsSvc: Cars) {

        this.carsSvc.updated(() => {
            this.cars = carsSvc.getAll();
        });

        this.cars = carsSvc.getAll();
   }

   public carFilter = (make: string) =>
        (car: Car) => car.make.startsWith(make);

    public addCar(newCar: Car) {
        this.carsSvc.append(newCar);
    }
}
