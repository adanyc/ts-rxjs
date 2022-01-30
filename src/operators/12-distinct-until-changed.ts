// Si el elemento anterior es igual al que se quiere emitir en ese momento, entonces no lo emite

import { distinctUntilChanged, from, of } from "rxjs";

// todos numeros
// const numbers$ = of(1, 1, 1, 3, 3, 2, 2, 4, 4, 5, 3, 1);

// numeros y strings
const numbers$ = of(1, '1', 1, 3, 3, 2, 2, 4, '4', 5, 3, 1);

numbers$.pipe(
  distinctUntilChanged()
).subscribe({
  next: val => console.log('next:', val),
  complete: () => console.log('complete')
});

interface Character {
  name: string;
};

const characters: Character[] = [
  { name: 'Megaman' },
  { name: 'Megaman' },
  { name: 'X' },
  { name: 'Zero' },
  { name: 'Dr. Willy' },
  { name: 'X' },
  { name: 'X' },
  { name: 'Megaman' },
  { name: 'Zero' }
];

from(characters).pipe(
  distinctUntilChanged((prev, curr) => prev.name === curr.name)
).subscribe({
  next: val => console.log('next:', val),
  complete: () => console.log('complete')
});
