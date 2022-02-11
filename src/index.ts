import { debounceTime, fromEvent, map, mergeAll, pluck } from "rxjs";
import { ajax } from "rxjs/ajax";

// Referencias
const body = document.querySelector('body');
const textInput = document.createElement('input');
const orderList = document.createElement('ol');
body.append(textInput, orderList);

// Streams
const input$ = fromEvent<KeyboardEvent>(textInput, 'keyup');

// input$.pipe(
//   debounceTime(500),
//   map(event => {
//     const target = event.target as HTMLInputElement;
//     const text = target.value;
//     return ajax.getJSON(
//       `https://api.github.com/users/${text}`
//     );
//   })
// ).subscribe(resp => {
//   resp.pipe(
//     pluck('url')
//   ).subscribe(console.log);
// });

// Mejorado: usando el mergeAll
input$.pipe(
  debounceTime<KeyboardEvent>(500),
  // pluck<KeyboardEvent, string>('target', 'value'),
  map(text => ajax.getJSON(
    `https://api.github.com/search/users?q=${text}`
  )),
  mergeAll(),
  pluck('items')
).subscribe(resp => {
  console.log(resp);
});