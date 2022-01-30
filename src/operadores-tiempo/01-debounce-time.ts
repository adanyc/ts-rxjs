// se emite cuando deja realizarse la accion el periodo de tiempo indicado.

import { debounceTime, distinctUntilChanged, fromEvent, map, pluck } from "rxjs";

const click$ = fromEvent(document, 'click');

click$.pipe(
  debounceTime(3000)
)//.subscribe(console.log);

const inputElement = document.createElement('input');
const bodyElement = document.querySelector('body');
bodyElement.append(inputElement);

const input$ = fromEvent(inputElement, 'keyup');
input$.pipe(
  debounceTime(800),
  pluck('target', 'value'),
  distinctUntilChanged()
).subscribe(console.log);
