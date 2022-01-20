import { asyncScheduler } from 'rxjs';

// setTimeout(() => { }, 3000);
// setInterval(() => { }, 3000);

// Sin argumentos
// const saludar = () => console.log('Hola');
// asyncScheduler.schedule(saludar);

// Con argumentos
// const saludar2 = nombre => console.log(`Hola ${nombre}`);
// asyncScheduler.schedule(saludar2, 2000, 'Alex');

// asyncScheduler.schedule(function (state) {
//   console.log('state:', state);
// }, 3000, 0);

// Hacer que funcione como un timer
const subs$ = asyncScheduler.schedule(function (state) {
  console.log('state:', state);
  this.schedule(state + 1, 1000);
}, 3000, 0);

// Cancelar la subscripcion
// setTimeout(() => {
//   subs$.unsubscribe();
// }, 6000);

asyncScheduler.schedule(() => subs$.unsubscribe(), 6000);