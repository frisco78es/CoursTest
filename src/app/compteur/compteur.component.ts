import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-compteur',
  templateUrl: './compteur.component.html',
  styleUrls: ['./compteur.component.css']
})
export class CompteurComponent {
  constructor() {}

  ngOnInit(): void {}

  @Input() count = 0
  @Output() change = new EventEmitter()

  increment(): void {
    this.count = this.count + 1;
    this.change.emit(this.count)
  }

  decrement(): void {
    this.count = this.count - 1;
    this.change.emit(this.count)
  }
}
