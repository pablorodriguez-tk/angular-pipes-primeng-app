import { Component } from '@angular/core';
import { interval } from 'rxjs';

@Component({
  selector: 'app-no-comunes',
  templateUrl: './no-comunes.component.html',
  styles: [],
})
export class NoComunesComponent {
  //i18nSelect
  nombre: string = 'Pablo';
  genero: string = 'masculino';

  invitacionMapa = {
    masculino: 'invitarlo',
    femenino: 'invitarla',
  };

  //i18nPlural
  clientes: string[] = ['Maria', 'Pedro', 'Pedro', 'Pedro', 'Pedro', 'Pedro'];
  clientesMapa = {
    '=0': 'no tenemos ningún hay clientes',
    '=1': 'tenemos un cliente esperando',
    other: 'hay # clientes esperando',
  };

  cambiarCliente() {
    this.nombre = 'Susana';
    this.genero = 'femenino';
  }

  borrarCliente() {
    this.clientes.pop();
  }

  //keyValue Pipe
  persona = { nombre: 'Pablo', edad: 33, direccion: 'Buenos Aires' };

  //Json Pipe
  heroes = [
    { nombre: 'Batman', poder: 'Dinero' },
    { nombre: 'Superman', poder: 'Superpoderes' },
    { nombre: 'Flash', poder: 'Velocidad' },
    { nombre: 'Aquaman', poder: 'Volar', ojos: true },
  ];

  //Async Pipe
  miObservable = interval(1000); // 0 , 1 , 2 , 3 , 4 .....
  valorPromesa = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve('Tenemos data de promesa');
    }, 3500);
  });
}
