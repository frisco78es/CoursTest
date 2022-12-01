import { Component, EventEmitter, Output } from '@angular/core';

@Component({
    selector: 'app-compteur',
    templateUrl: './compteur.component.html',
    styleUrls: ['./compteur.component.css']
})
export class CompteurComponent {
    count: number = 0;

    increment(): void {
        this.count += 1;
    }

    decrement(): void {
        if (this.count !== 0) {
            this.count -= 1;
        }
    }
}
