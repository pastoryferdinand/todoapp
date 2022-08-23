import { Component, OnDestroy, OnInit } from '@angular/core';
import { CalculatorService } from '../calculator.service';
import { interval, Observable, Subscription } from 'rxjs';
import { timeout } from 'rxjs-compat/operator/timeout';

@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.css'],
  providers: [CalculatorService],
})
export class CalculatorComponent implements OnInit, OnDestroy {
  private firstObsSubscription: Subscription;
  constructor(public calculatorService: CalculatorService) {}
  ngOnDestroy(): void {}
  operand1: Subscription;

  ngOnInit() {
    //output: 0,1,2,3,4,5....
    var randomNumberGenerator = new Observable(function (observer) {
      let timer = setInterval(() => console.log('start'), 1000);
      setTimeout(() => {
        clearInterval(timer);
        alert('stop');
      }, 10000);
    });

    randomNumberGenerator.subscribe(function (value) {
      console.log('Value from the Simple Observable: ' + value);
    });
  }
}
