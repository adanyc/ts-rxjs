import { first, fromEvent, map, tap } from "rxjs";

const click$ = fromEvent<PointerEvent>(document, 'click');

click$.pipe(
  tap<PointerEvent>(console.log),
  // forma regular
  // map(event => {
  //   clientX: event.clientX,
  //   clientY: event.clientY
  // }),
  // forma acortada
  map(({ clientX, clientY }) => ({ clientX, clientY })),
  first(event => event.clientY >= 150)
).subscribe({
  next: val => console.log('next:', val),
  complete: () => console.log('complete')
});
