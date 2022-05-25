import { Observable, Subject } from 'rxjs';

// Observable
const observable$ = new Observable(subs => {
  subs.next(Math.random())
});

observable$.subscribe(value => console.log('observer value A:', value));
observable$.subscribe(value => console.log('observer value B:', value));

console.log('----');

// Subject
// La suscripción debe hacerse antes de la emisión (next)
const subject = new Subject();

subject.subscribe(value => console.log('observer value A:', value));
subject.subscribe(value => console.log('observer value B:', value));

subject.next(Math.random());
