import { catchError, of } from 'rxjs';
import { ajax, AjaxError } from 'rxjs/ajax';

const url = 'https://httpbinXXX.org/delay/1';

// const errorHandler = (resp: AjaxError) => {
//   console.warn('error:', resp.message);
//   return of({
//     ok: false,
//     users: []
//   });
// }

// const obs$ = ajax.getJSON(url).pipe(
  // catchError(errorHandler)
// );
// const obs2$ = ajax(url).pipe(
//   catchError(errorHandler)
// );

// obs$.subscribe(data => console.log('getJSON:', data));
// obs2$.subscribe(data => console.log('ajax:', data));

const errorHandler = (resp: AjaxError) => {
    console.warn('error:', resp.message);
    return of({
      ok: false,
      users: []
    });
  }

// el error del subscribe no se ejecutará porque
// ya se está manejando el error en el errorHandler
// si se ejecutará el next y el complete, esto porque
// el observable (of) del errorHandler está correcto.
const obs$ = ajax.getJSON(url).pipe(
  catchError(errorHandler)
).subscribe({
  next: val => console.log('next:', val),
  error: err => console.log('error en subscribe:', err),
  complete: () => console.log('complete')
});
