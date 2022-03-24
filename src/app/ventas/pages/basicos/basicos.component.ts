import { Component } from '@angular/core';

@Component({
  selector: 'app-basicos',
  templateUrl: './basicos.component.html',
  styles: [],
})
export class BasicosComponent {
  nombreLower: string = 'pablo';
  nombreUpper: string = 'PABLO';
  nombreCompleto: string = 'PaBlO RoDrIguEZ';

  fecha: Date = new Date();
}
