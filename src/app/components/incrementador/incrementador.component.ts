import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-incrementador',
  templateUrl: './incrementador.component.html',
  styles: [
  ]
})
export class IncrementadorComponent {

  public progress: number = 50;

  get getPorcentaje() {
    return `${ this.progress }%`;
  }

  changeValue(value: number) {
    if(this.progress >= 100 && value >= 0 ) {
      return this.progress = 100;
    }

    if(this.progress <= 0 && value < 0 ) {
      return this.progress = 0;
    }

    return this.progress = this.progress + value;
  }

}
