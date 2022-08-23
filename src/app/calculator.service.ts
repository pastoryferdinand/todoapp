import { EventEmitter, Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class CalculatorService {
  constructor() {}
  subText = '';
  mainText = '';
  operand1 = 0;
  operand2 = 0;
  calculationString = '';
  answered = false;
  operatorSet = false;
  operator = '';

  pressKey(key: string) {
    if (key === '/' || key === 'x' || key === '-' || key === '+') {
      const lastKey = this.mainText[this.mainText.length - 1];
      if (
        lastKey === '/' ||
        lastKey === 'x' ||
        lastKey === '-' ||
        lastKey === '+'
      ) {
        this.operatorSet = true;
      }
      if (this.operatorSet || this.mainText === '') {
        return;
      }
      this.operand1 = parseFloat(this.mainText);
      this.operator = key;
      this.operatorSet = true;
    }
    if (this.mainText.length === 10) {
      return;
    }
    this.mainText += key;
  }
  getAnswer() {
    this.calculationString = this.mainText;
    this.operand2 = parseFloat(this.mainText.split(this.operator)[1]);
    if (this.operator === '/') {
      this.subText = this.mainText;
      this.mainText = (this.operand1 / this.operand2).toString();
      this.subText = this.calculationString;
      if (this.mainText.length > 9) {
        this.mainText = this.mainText.substr(0, 9);
      }
    } else if (this.operator === 'x') {
      this.subText = this.mainText;
      this.mainText = (this.operand1 * this.operand2).toString();
      this.subText = this.calculationString;
      if (this.mainText.length > 9) {
        this.mainText = 'ERROR';
        this.subText = 'Range Exceeded';
      }
    } else if (this.operator === '-') {
      this.subText = this.mainText;
      this.mainText = (this.operand1 - this.operand2).toString();
      this.subText = this.calculationString;
    } else if (this.operator === '+') {
      this.subText = this.mainText;
      this.mainText = (this.operand1 + this.operand2).toString();
      this.subText = this.calculationString;
      if (this.mainText.length > 9) {
        this.mainText = 'ERROR';
        this.subText = 'Range Exceeded';
      }
    } else {
      this.subText = 'ERROR: Invalid Operation';
    }
    this.answered = true;
  }
  clearText() {
    this.mainText = '';
    this.subText = '';
    this.mainText = '';
    this.operand1 = 0;
    this.operand2 = 0;
    this.calculationString = '';
    this.answered = false;
    this.operatorSet = false;
    this.operator = '';
  }

  dataEmitter = new EventEmitter<string>();
  raiseDataEmmitterEvent(data: string) {
    this.dataEmitter.emit(data);
  }
}
