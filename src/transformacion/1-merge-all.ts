import { debounceTime, fromEvent, mergeAll, Observable } from "rxjs";
import { ajax } from "rxjs/ajax";
import { map, mergeMap, pluck } from 'rxjs/operators';
import { GithubUser } from "../interfaces/github-user.interface";
import { GithubUsersResponse } from "../interfaces/github-users.interface";

// Referencias
const body = document.querySelector('body');
const textInput = document.createElement('input');
const orderList = document.createElement('ol');
body.append(textInput, orderList);

// Helpers
const showUsers = (users: GithubUser[]) => {
  orderList.innerHTML = '';
  for (const user of users) {
    const li = document.createElement('li');
    const img = document.createElement('img');
    img.src = user.avatar_url;

    const anchor = document.createElement('a');
    anchor.href = user.html_url;
    anchor.text = 'View page';
    anchor.target = '_blank';

    li.append(img);
    li.append(user.login + ' ');
    li.append(anchor);

    orderList.append(li);
  }
};

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
// El tipado se puede obtener de app.quicktype.io
input$.pipe(
  debounceTime<KeyboardEvent>(500),
  map<KeyboardEvent, string>(event => (event.target as HTMLInputElement).value),
  map<string, Observable<GithubUsersResponse>>(text => ajax.getJSON(
    `https://api.github.com/search/users?q=${text}`
  )),
  mergeAll<Observable<GithubUsersResponse>>(),
  map<GithubUsersResponse, GithubUser[]>(item => item.items)
).subscribe(showUsers);
