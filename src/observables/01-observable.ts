import { Observable, Observer } from 'rxjs';

const observer: Observer<any> = {
  next: value => console.log('[observer] next:', value),
  error: error => console.warn('[observer] error:', error),
  complete: () => console.log('[observer] complete')
};

// Deprecated: Se puede crear asi pero está deprecado
// const obs$ = Observable.create();

const obs$ = new Observable<string>(subs => {
  subs.next('Hola');
  subs.next('Mundo');

  subs.next('Hola');
  subs.next('Mundo');

  // Forzar un error
  const user = undefined;
  user.name = 'alex';

  subs.complete();

  // estos ya no se emiten porque antes hay un complete
  subs.next('Hola');
  subs.next('Mundo');
});

// Subscripcion normal
// obs$.subscribe(console.log);

// Deprecated: Subscripcion con mas casos
// obs$.subscribe(
//   value => console.log('value: ', value),
//   error => console.warn('error: ', error),
//   () => console.info('Complete')
// )

// Con subscriber
obs$.subscribe(observer);
