import { Component } from '@angular/core';

@Component({
  selector: 'app-no-comunes',
  templateUrl: './no-comunes.component.html',
  styles: [
  ]
})
export class NoComunesComponent {

  //i18nSelect
  nombre: string = "Juancarlos";
  genero: string = "masculino";

  invitacionMapa = {
    'masculino' : 'invitarlo',
    'femenino'  : 'invitarla',
  }

  //i18nPlural
  clientes: string[] = ['Juan','Ana','Andres','Fernando','Madelyn','Mafer'];

  clientesMapa = {
    '=0'   : 'no tenemos clientes esperando.',
    '=1'   : 'tenemos 1 cliente esperando.',
    '=2'   : 'tenemos 2 clientes esperando.',
    'other': 'tenemos # clientes esperando.'
  }

  cambiarPersona(){
    this.nombre = 'Alejandra';
    this.genero = 'femenino';
  }

  eliminarCliente(){
    this.clientes.pop();
  }

  //KeyValue Pipe

  persona = {
    nombre: 'fernando mendoza',
    edad: 20,
    direccion: 'san pedro sula'
  }

  //JSON pipe

  heroes = [
    {
      nombre: 'superman',
      vuela: true,
    },
    {
      nombre: 'ironman',
      vuela: true,
    },
    {
      nombre: 'thor',
      vuela: true,
    },
    {
      nombre: 'Wanda',
      vuela: true,
    },
  ]

}
