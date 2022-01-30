import { fromEvent, interval, map, of, takeWhile } from "rxjs";

const click$ = fromEvent<MouseEvent>(document, 'click');

click$.pipe(
  map(({ x, y }) => ({ x, y })),
  // takeWhile(({ y }) => y <= 150)
  takeWhile(({ y }) => y <= 150, true)
).subscribe({
  next: val => console.log('next:', val),
  complete: () => console.log('complete')
});

interval(500).pipe(
  takeWhile(val => val < 5)
)
  .subscribe({
    next: val => console.log('next:', val),
    complete: () => console.log('complete')
  })
