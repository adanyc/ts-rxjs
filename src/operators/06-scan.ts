import { from, map, reduce, scan } from "rxjs";

// const numbers = [1, 2, 3, 4, 5];

// const totalAcumulador = (acc: number, cur: number) => acc + cur;

// Reduce
// from(numbers).pipe(
//   reduce(totalAcumulador, 0)
// ).subscribe(console.log);

// Scan
// from(numbers).pipe(
//   scan(totalAcumulador, 0)
// ).subscribe(console.log);

// Redux
// Podriamos decir que es manejar el estado global de mi aplicacion
// en un unico objeto.
interface User {
  id?: string;
  token?: string;
  authenticated?: boolean;
  age?: number;
}

const users: User[] = [
  { id: 'adcl', authenticated: false, token: null },
  { id: 'adcl', authenticated: true, token: 'ABC' },
  { id: 'adcl', authenticated: true, token: 'ABC123' }
];

const state$ = from(users).pipe(
  scan<User, User>((acc, cur) => {
    return { ...acc, ...cur }
  }, { age: 33 })
);

const id$ = state$.pipe(
  map(state => state.id)
);

id$.subscribe(console.log);