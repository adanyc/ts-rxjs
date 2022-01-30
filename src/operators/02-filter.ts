import { from, fromEvent, range } from 'rxjs';
import { filter, map } from 'rxjs/operators';

// Forma básica
// range(1, 10).pipe(
//   filter(val => val % 2 === 1)
// ).subscribe(console.log);

// Con index
// range(20, 30).pipe(
//   filter((val, index) => {
//     console.log('index', index);
//     return val % 2 === 1
//   })
// ).subscribe(console.log);

// interface Personaje {
//   tipo: string;
//   nombre: string;
// }

// const personajes: Personaje[] = [
//   {
//     tipo: 'heroe',
//     nombre: 'batman'
//   },
//   {
//     tipo: 'heroe',
//     nombre: 'superman'
//   },
//   {
//     tipo: 'villano',
//     nombre: 'joker'
//   }
// ];

// from(personajes).pipe(
//   filter(val => val.tipo === 'villano')
// ).subscribe(console.log);

const keyup$ = fromEvent<KeyboardEvent>(document, 'keyup').pipe(
  map(event => event.code),
  filter(key => key === 'Enter')
);
keyup$.subscribe(console.log);
