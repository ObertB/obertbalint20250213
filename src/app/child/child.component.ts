import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent {
  @Input() num1!: number;
  @Input() num2!: number;
  @Output() resultEvent = new EventEmitter<number>();

  calculate(operation: string) {
    let result: number;
    switch (operation) {
      case 'add':
        result = this.num1 + this.num2;
        break;
      case 'subtract':
        result = this.num1 - this.num2;
        break;
      case 'multiply':
        result = this.num1 * this.num2;
        break;
      case 'divide':
        result = this.num2 !== 0 ? this.num1 / this.num2 : 0;
        break;
      default:
        result = 0;
    }
    
    this.resultEvent.emit(result); // Eredmény visszaküldése a ParentComponent-nek
  }
}
