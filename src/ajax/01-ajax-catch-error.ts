import { catchError, map, of, pluck } from 'rxjs';
import { ajax, AjaxError } from 'rxjs/ajax';

const url = 'https://api.github.com/users?per_page=5';

const handleError = (response: Response) => {
  if (!response.ok) {
    throw new Error(response.statusText);
  }

  return response;
};

const fetchPromise = fetch(url);

// sin manejar el error
// fetchPromise
//   .then(resp => resp.json())
//   .then(data => console.log('data:', data))
//   .catch(err => console.warn('Error en usuarios', err));

// manejando el error
// fetchPromise
//   .then(handleError)
//   .then(resp => resp.json())
//   .then(data => console.log('data:', data))
//   .catch(err => console.warn('Error en usuarios', err));

// con RxJs
const errorHandler = (err: AjaxError) => {
  console.warn('error en:', err.message);
  return of([]);
}

ajax(url).pipe(
  // pluck('response'),
  map(resp => resp.response),
  catchError(errorHandler)
).subscribe(users => console.log('users:', users));

