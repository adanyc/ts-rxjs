// Distinct emite valores que previamente no han sido emitidos.

import { distinct, from, of } from "rxjs";

// todos numeros
// const numbers$ = of(1, 1, 1, 3, 3, 2, 2, 4, 4, 5, 3, 1);

// numeros y strings
const numbers$ = of(1, '1', 1, 3, 3, 2, 2, 4, '4', 5, 3, 1);

numbers$.pipe(
  distinct()
).subscribe({
  next: val => console.log('next:', val),
  complete: () => console.log('complete')
});

interface Character {
  name: string;
};

const characters: Character[] = [
  { name: 'Megaman' },
  { name: 'X' },
  { name: 'Zero' },
  { name: 'Dr. Willy' },
  { name: 'X' },
  { name: 'Megaman' },
  { name: 'Zero' }
];

from(characters).pipe(
  distinct(p => p.name)
).subscribe({
  next: val => console.log('next:', val),
  complete: () => console.log('complete')
});
