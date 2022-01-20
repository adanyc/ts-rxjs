import { fromEvent } from 'rxjs';

/**
 * Eventos del DOM
 */

const src1$ = fromEvent(document, 'click');
const src2$ = fromEvent(document, 'keyup');

const observer = {
  next: value => console.log('[observer] next:', value),
}

// src1$.subscribe(observer);
src2$.subscribe(observer);

src1$.subscribe(value => {
  console.log(value);
});
