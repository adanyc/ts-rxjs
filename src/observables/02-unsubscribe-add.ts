import { Observable, Observer } from 'rxjs';

const observer: Observer<any> = {
  next: value => console.log('[observer] next:', value),
  error: error => console.warn('[observer] error:', error),
  complete: () => console.log('[observer] complete')
};

const intervalo$ = new Observable<number>(subscriber => {
  // Contador que emite un valor cada segundo
  let count = 0;
  const interval = setInterval(()=> {
    count++;
    subscriber.next(count);
    console.log('count', count);
  },1000);

  setTimeout(() => {
    subscriber.complete();
  }, 2500);

  // Limpiar el intervalo
  return () => {
    clearInterval(interval);
    console.log('Interval destruido');
  }
});

const subs1 = intervalo$.subscribe(observer);
const subs2 = intervalo$.subscribe(observer);
const subs3 = intervalo$.subscribe(observer);

subs1.add(subs2)
subs1.add(subs3);

setTimeout(() => {
  subs1.unsubscribe();
  // subs2.unsubscribe();
  // subs3.unsubscribe();

  console.log('Completado timeout');
}, 3000);