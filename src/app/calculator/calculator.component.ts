import { Component } from '@angular/core';

@Component({
  selector: 'app-calculator',
  standalone: true,
  imports: [],
  templateUrl: './calculator.component.html',
  styleUrl: './calculator.component.css'
})
export class CalculatorComponent {
  currentInput: string = '';
  isResultDisplayed: boolean = false;

  appendNumber(number: string) {
    if (this.isResultDisplayed) {
      this.currentInput = '';
      this.isResultDisplayed = false;
    }
    this.currentInput += number;
  }

  chooseOperator(op: string) {
    if (this.currentInput !== '' && !this.currentInput.endsWith(' ')) {
      this.currentInput += ' ' + op + ' ';
    }
  }

  compute() {
    try {
      const result = eval(this.currentInput.replace(/×/g, '*').replace(/÷/g, '/'));
      this.currentInput = result.toString();
      this.isResultDisplayed = true;
    } catch {
      this.currentInput = 'Error';
      this.isResultDisplayed = true;
    }
  }

  clear() {
    this.currentInput = '';
    this.isResultDisplayed = false;
  }
}
