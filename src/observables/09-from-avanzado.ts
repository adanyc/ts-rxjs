import { of, from } from 'rxjs';

/**
 * of = toma argumentos y genera una secuencia
 * from = array, iterable, promise, observable
 */

const observer = {
  next: value => console.log('next:', value),
  complete: () => console.log('complete')
}

// From
// const source$ = from([1,2,3,4,5]);
// source$.subscribe(observer);

// const source$ = from('Alex');
// source$.subscribe(observer);

// Con fetch
// const source$ = from(fetch('https://api.github.com/users/adanyc'));
// source$.subscribe(async (resp) => {
//   const data = await resp.json();
//   console.log(data);
// });

// Con Funciones Generadoras (iterables)
const myGenerator = function* () {
  yield 1;
  yield 2;
  yield 3;
  yield 4;
  yield 5;
}

const myIterable = myGenerator();

// for (let id of myIterable) {
//   console.log(id);
// }

from(myIterable).subscribe(observer);

// Of
// const source$ = of(...[1,2,3,4,5]);
// source$.subscribe(observer);