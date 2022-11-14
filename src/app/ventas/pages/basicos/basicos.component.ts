import { Component } from '@angular/core';

@Component({
  selector: 'app-basicos',
  templateUrl: './basicos.component.html'
})
export class BasicosComponent  {

  nombreLower: string = 'irati';
  nombreUpper: string = 'IRATI';
  nombreCompleto: string = 'iRaTi allEnDe';

  fecha: Date = new Date();
  
}
