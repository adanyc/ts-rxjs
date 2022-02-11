import { ajax } from 'rxjs/ajax';

const url = 'https://httpbin.org/delay/1'

// ajax.post(url, {
//   id: 1,
//   name: 'alex'
// }, {
//   'my-token': 'ABC123'
// }).subscribe(console.log);

// para el metodo dinamico (POST, PUT, GET)
ajax({
  url,
  method: 'POST',
  headers: {
    'my-token': 'ABC123'
  },
  body: {
    id: 1,
    name: 'alex'
  }
}).subscribe(console.log);