import { range, observeOn, asyncScheduler } from 'rxjs';

// Sincrono
const src1$ = range(1, 5);
console.log('[Inicio] Sincrono');
src1$.subscribe(console.log);
console.log('[Fin] Sincrono');

// Asincrono (Deprecado)
// const src2$ = range(1,5, asyncScheduler);
// console.log('[Inicio] Asincrono');
// src2$.subscribe(console.log);
// console.log('[Fin] Asincrono');

// Asincrono (Deprecado)
const src2$ = range(1, 5).pipe(observeOn(asyncScheduler));
console.log('[Inicio] Asincrono');
src2$.subscribe(console.log);
console.log('[Fin] Asincrono');