import { Component } from '@angular/core';
import { Color, Heroe } from '../../interfaces/ventas.interfaces';

@Component({
  selector: 'app-ordenar',
  templateUrl: './ordenar.component.html',
  styles: [
  ]
})
export class OrdenarComponent {

  enMayusculas: boolean = true;
  ordenarPor: string = '';

  heroes: Heroe[] = [
    {
      nombre: 'Ironman',
      vuela : true,
      color : Color.rojo
    },
    {
      nombre: 'Superman',
      vuela : true,
      color : Color.rojo
    },
    {
      nombre: 'Robin',
      vuela : false,
      color : Color.verde
    },
    {
      nombre: 'Aquaman',
      vuela : false,
      color : Color.negro
    },
    {
      nombre: 'Batman',
      vuela : false,
      color : Color.negro
    },
    {
      nombre: 'Capitan America',
      vuela : false,
      color : Color.azul
    },
  ]

  cambiarMayusculas(){
    this.enMayusculas = !this.enMayusculas;
  }

  cambiarOrden(valor: string){
    this.ordenarPor = valor;
  }
}
