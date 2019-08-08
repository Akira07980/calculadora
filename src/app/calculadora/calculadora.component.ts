import { Component } from '@angular/core';

@Component({
  selector: 'app-calculadora',
  templateUrl: './calculadora.component.html',
  styleUrls: ['./calculadora.component.css']
})
export class CalculadoraComponent {

  titulo = 'Aplicación calculadora';
  OperadorA: number;
  OperadorB: number;
  Resultado: number;

  onSuma(): void {
    this.Resultado = this.OperadorA + this.OperadorB;

  }
  onRestar(): void {
    this.Resultado = this.OperadorA - this.OperadorB;
  }
  onDividir(): void {
    this.Resultado = this.OperadorA / this.OperadorB;
  }
  onMultiplicar(): void {
    this.Resultado = this.OperadorA * this.OperadorB;
  }

  
  constructor() { }


}
