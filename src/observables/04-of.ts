import { Observer, of } from 'rxjs';

const obs$ = of(1, 2, 3, 4, 5, 6);

// Forma Deprecada
// obs$.subscribe(
//   next => console.log('next', next),
//   error => console.log(error),
//   () => console.log('Finished')
// );

// Forma Directa
// obs$.subscribe({
//   next: value => console.log('Next', value),
//   error: error => console.log(error),
//   complete: () => console.log('Finished')
// });

// Forma con Observer separado
const observer: Observer<any> = {
  next: value => console.log('[observer] next:', value),
  error: error => console.warn('[observer] error:', error),
  complete: () => console.log('[observer] complete')
}

console.log('Inicio Subscription');
obs$.subscribe(observer);
console.log('Fin Subscription');