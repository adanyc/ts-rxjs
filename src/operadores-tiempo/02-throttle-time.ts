import { asyncScheduler, distinctUntilChanged, fromEvent, pluck, throttleTime } from "rxjs";

const click$ = fromEvent(document, 'click');

click$.pipe(
  throttleTime(3000)
).subscribe(console.log);

const inputElement = document.createElement('input');
const bodyElement = document.querySelector('body');
bodyElement.append(inputElement);

const input$ = fromEvent(inputElement, 'keyup');
input$.pipe(
  throttleTime(1000, asyncScheduler, {
    leading: true,
    trailing: true
  }),
  pluck('target', 'value'),
  distinctUntilChanged()
).subscribe(console.log);
