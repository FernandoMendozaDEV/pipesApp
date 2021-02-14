import { Component } from '@angular/core';

@Component({
  selector: 'app-basicos',
  templateUrl: './basicos.component.html',
  styles: [
  ]
})
export class BasicosComponent {

  nombreLower: string = 'fernando';
  nombreUpper: string = 'fErnANDO';
  nombreCompleto: string = 'fernando MeNdOza';

  fecha: Date = new Date();

}
