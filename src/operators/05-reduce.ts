import { interval, reduce, take, tap } from "rxjs";

// Reduce con TS (sin rxjs)
const numbers = [1, 2, 3, 4, 5];

const totalReducer = (acumulador: number, valorActual: number) => {
  return acumulador + valorActual;
}

const total = numbers.reduce(totalReducer, 0);
console.log('total', total);

const total2 = numbers.reduce(
  (previousValue: number, currentValue: number) => {
    return previousValue + currentValue;
  }, 0);
console.log('total2', total2);

// Reduce con rxjs
interval(500).pipe(
  take(6),
  tap(console.log),
  reduce(totalReducer)
).subscribe({
  next: val => console.log('next:', val),
  complete: () => console.log('complete')
});