import { Observable, Observer, Subject, Subscription } from 'rxjs';

const observer: Observer<any> = {
  next: value => console.log('[observer] next:', value),
  error: error => console.warn('[observer] error:', error),
  complete: () => console.log('[observer] complete')
};

const intervalo$ = new Observable<number>(subscriber => {
  const intervalId = setInterval(
    () => subscriber.next(Math.random()), 1000
  );

  return () => {
    clearInterval(intervalId);
    console.log('Intervalo destruído');
  }
});

/**
 * Características del Subject
 * 1.- Casteo múltiple
 * 2.- También es un Observer
 * 3.- También se puede manejar el next, error y complete
 */
const subject$ = new Subject();
const subscription = intervalo$.subscribe(subject$);

const subs1 = subject$.subscribe(observer);
const subs2 = subject$.subscribe(observer);

// const subs1 = subject$.subscribe(rnd => console.log('subs1:', rnd));
// const subs2 = subject$.subscribe(rnd => console.log('subs2:', rnd));

// const subs1 = intervalo$.subscribe(rnd => console.log('subs1:', rnd));
// const subs2 = intervalo$.subscribe(rnd => console.log('subs2:', rnd));

setTimeout(() => {
  subject$.next(10);
  subject$.complete();
  subscription.unsubscribe();
}, 3500);