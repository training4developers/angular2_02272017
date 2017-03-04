import { Component, OnInit } from "@angular/core";

import { Car } from "./interfaces/car";
import { Cars } from "./services/cars.service";

import { Observable, Observer } from "rxjs";

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
})
export class AppComponent implements OnInit {

    public toolHeader: string = "Car Tool";
    public cars: Car[];
    public newCar: Car = {} as Car;

    constructor(private carsSvc: Cars) {

        this.carsSvc.updated(() => {
            this.cars = carsSvc.getAll();
        });

        this.cars = carsSvc.getAll();
   }

   public ngOnInit() {

       const o = Observable.create((observer: Observer<number>) => {

            let counter = 0;
            const hInterval = window.setInterval(() => {
                console.log("timeout invoked");
                observer.next(counter++);
                if (counter > 5) {
                    window.clearInterval(hInterval);
                    observer.complete();
                }
           }, 1000);

       });

       // o.map((x: number) => x * 2).subscribe((result: number) => console.log(result));
       // console.dir(o.toPromise());
       // o.toPromise().then((result: number) => console.log("result", result));

       o.toPromise()
        .then((results: any) => console.log("resolve", results))
        .catch((results: any) => console.log("catch", results));

   }

   public carFilter = (make: string) => (car: Car) => car.make.startsWith(make);

    public addCar(newCar: Car) {
        this.carsSvc.append(newCar);
    }
}
