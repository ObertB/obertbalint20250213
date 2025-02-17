import { Component } from '@angular/core';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent {
  a: number = 0;
  b: number = 0;
  result: number = 0;

  onResultReceived(result: number) {
    this.result = result; 
  }
}
