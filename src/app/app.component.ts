import { Component, OnInit } from '@angular/core';
import { TableService } from 'primeng/table';
import { Car } from './domain/car';
import { CarService } from './service/carservice';
import {C9DialogService} from './dd/ddservice';
import { MessageService } from 'primeng/components/common/messageservice';
import {Componenta} from './componenta/componenta.component';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [CarService, C9DialogService, MessageService]
})
export class AppComponent implements OnInit {
  name = 'Angular';

  cars: Car[];

  cols: any[];

  display: boolean = false;
  value: Date = new Date();

  constructor(public dialogService: C9DialogService, public messageService: MessageService, private carService: CarService){}



    showDialog() {
        this.display = true;
    }

    show() {
       const ref = this.dialogService.open(Componenta, {
            header: 'Choose a Car',
            width: '70%',
            contentStyle: {"max-height": "350px", "overflow": "auto"}
        });

        ref.onClose.subscribe((car: Car) =>{
            if (car) {
                this.messageService.add({severity:'info', summary: 'Car Selected', detail:'Vin:' + car.vin});
            }
        });
    }

  ngOnInit() {
    this.cars = [
        {"brand": "VW Updated", "year": 2012, "color": "Orange", "vin": "dsad231ff"},
        {"brand": "Audi", "year": 2011, "color": "Black", "vin": "gwregre345"},
        {"brand": "Renault", "year": 2005, "color": "Gray", "vin": "h354htr"},
        {"brand": "BMW", "year": 2003, "color": "Blue", "vin": "j6w54qgh"},
        {"brand": "Mercedes", "year": 1995, "color": "Orange", "vin": "hrtwy34"},
        {"brand": "Volvo", "year": 2005, "color": "Black", "vin": "jejtyj"},
        {"brand": "Honda", "year": 2012, "color": "Yellow", "vin": "g43gr"},
        {"brand": "Jaguar", "year": 2013, "color": "Orange", "vin": "greg34"},
        {"brand": "Ford", "year": 2000, "color": "Black", "vin": "h54hw5"},
        {"brand": "Fiat", "year": 2013, "color": "Red", "vin": "245t2s"}
    ];

    // this.carService.getCarsSmall().then(cars => this.cars = cars);

    this.cols = [
      { field: 'vin', header: 'Vin' },
      { field: 'year', header: 'Year' },
      { field: 'brand', header: 'Brand' },
      { field: 'color', header: 'Color' }
    ];
  }
}
