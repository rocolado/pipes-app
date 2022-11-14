import { Component } from '@angular/core';
import { interval } from "rxjs";

@Component({
  selector: 'app-no-comunes',
  templateUrl: './no-comunes.component.html'
})
export class NoComunesComponent  {

  //i18nSelect
  nombre: string = 'Irati';
  genero: string = 'femenino';

  invitacionMapa = {
    'masculino': 'invitarlo',
    'femenino': 'invitarla'
  }

  //i18nPlural
  clientes: string[] = ['María', 'Carmen', 'Lucía'];

  clientesMapa = {
    '=0': 'no tenemos ningún cliente esperando.',
    '=1': 'tenemos 1 cliente esperando.',
    '=2': 'tenemos 2 clientes esperando.',
    'other': 'tenemos # clientes esperando.'
  }

  //KeyValue Pipe
  persona = {
    nombre: 'Irati', 
    edad: 35,
    direccion: 'Gotham'
  }

  //Json Pipe
  heroes = [
    {
      nombre: 'Batman',
      vuela: true
    },
    {
      nombre: 'Superman',
      vuela: true
    },
    {
      nombre: 'Aquaman',
      vuela: false
    }
  ]

  //Async Pipe
  miObservable = interval(1000);

  valorPromesa = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve('Tenemos data de promesa');
    }, 3500);
  });


  cambiarCliente() {
    this.nombre = 'Bruce'
    this.genero = 'masculino';
  }

  borrarCliente() {
    this.clientes.pop();
  }

}
