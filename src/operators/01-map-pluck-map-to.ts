import { fromEvent, range } from 'rxjs';
import { map, mapTo, pluck } from 'rxjs/operators';

// range(1, 5).pipe(
//   map<number, number>(val => val * 10)
// )
//   .subscribe(console.log);

// Normal
// const keyup$ = fromEvent<KeyboardEvent>(document, 'keyup');
// keyup$.subscribe(val => console.log('map', val.code));

// Pasarlo por el map operator
const keyup$ = fromEvent<KeyboardEvent>(document, 'keyup');
const keyupCode$ = keyup$.pipe(
  map(val => val.code)
);
keyupCode$.subscribe(val => console.log('map', val));

// Pluck
const keyupPluck$ = keyup$.pipe(
  pluck('target', 'baseURI')
);
keyupPluck$.subscribe(val => console.log('pluck', val));

// MapTo
const keyupMapTo$ = keyup$.pipe(
  mapTo('Tecla presionada')
);
keyupMapTo$.subscribe(val => console.log('mapTo', val));