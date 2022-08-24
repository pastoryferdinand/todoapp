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

  ngOnInit() {
    //output: 0,1,2,3,4,5....
  }
}
