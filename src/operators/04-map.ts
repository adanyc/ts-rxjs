import { fromEvent, map } from "rxjs";

const div = document.createElement('div');
div.innerHTML = `
  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur quam lacus, interdum id feugiat sed, placerat faucibus lectus. Mauris elementum, dui in iaculis efficitur, tellus lacus fermentum libero, vitae aliquam eros massa ut nunc. Nullam et maximus justo. Etiam dignissim erat mauris, eget rutrum tellus tincidunt at. Nam aliquet at libero eu commodo. Sed consectetur justo sed finibus vehicula. Etiam auctor maximus dui, id rhoncus mi feugiat at. Integer odio orci, dapibus imperdiet eleifend eget, dapibus eu tellus. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sed elit non ex dignissim convallis. Pellentesque mollis tortor et congue finibus. Cras suscipit, ante at fermentum imperdiet, dolor erat sollicitudin sapien, eget tempor augue risus vitae ex. Fusce sagittis commodo eros, nec efficitur nisl suscipit sed.
  <br/><br/>
  Nulla eleifend elit in enim pretium elementum. Vivamus quis ultricies est. Vestibulum eros lorem, ullamcorper eu urna euismod, eleifend ultrices risus. Vestibulum purus mi, tempus nec suscipit condimentum, malesuada ut augue. Nunc gravida elit ac tincidunt sagittis. Aliquam non ullamcorper justo. In blandit dui convallis tempor efficitur. Integer dapibus lobortis eleifend. Mauris cursus massa at convallis semper. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque eu faucibus lacus.
  <br/><br/>
  Vestibulum viverra interdum mi, ut sagittis est porttitor eget. Integer ipsum libero, hendrerit quis quam a, vestibulum maximus nunc. Aenean egestas maximus vulputate. Nullam vitae viverra ex. Aliquam nec purus lectus. Nam quis convallis purus. Etiam et nunc et tortor fermentum gravida vitae in nibh. Aenean mattis libero et felis congue aliquet. Nunc sed felis pulvinar, malesuada erat a, consequat lacus. Nam pretium lectus semper, rutrum nisi semper, dapibus urna. In sollicitudin egestas dui, nec tristique tellus sagittis at. Fusce vel odio maximus, aliquet eros a, egestas tellus.
  <br/><br/>
  Vivamus a molestie diam. Donec placerat eros non ligula gravida, at convallis libero sodales. Mauris sit amet volutpat nisl. Phasellus ac ante sed augue vestibulum accumsan. Aenean tempus ipsum quis leo feugiat scelerisque. Fusce sodales quam et nisi posuere fringilla. Maecenas pellentesque felis ex, sit amet volutpat enim mattis vel. Pellentesque vulputate in magna vel euismod.
  <br/><br/>
  Nulla facilisi. Maecenas enim tellus, congue nec justo cursus, pharetra congue nisl. Aenean sed mauris et ipsum lobortis aliquet et sed metus. Ut lorem tellus, rhoncus a suscipit eu, ullamcorper in lacus. Proin id tortor purus. Maecenas id tellus dapibus, pretium turpis a, viverra leo. Sed nec dolor a ligula elementum feugiat. Ut in lacus in justo laoreet laoreet a a tellus. Donec eu lectus tellus. Nulla ex purus, rhoncus non sapien non, vestibulum aliquet odio. Ut ac elementum odio. In quam dolor, finibus quis mauris dapibus, interdum ornare orci. Curabitur vulputate est sit amet justo lacinia, eget fringilla tellus vehicula. Maecenas vel augue ex. Donec fermentum ornare dui, ac vulputate neque rutrum et.
`;

const body = document.querySelector('body');
body.append(div);

const progressBar = document.createElement('div');
progressBar.setAttribute('class', 'progress-bar');
body.append(progressBar);

// Funcion que hace el calculo
const scrollPercentage = (event) => {
  const {
    scrollTop,
    scrollHeight,
    clientHeight,
  } = event.target.documentElement;

  return (scrollTop / (scrollHeight - clientHeight)) * 100;
}

// Streams
const scroll$ = fromEvent(document, 'scroll');

const progress$ = scroll$.pipe(
  // map(event => scrollPercentage(event))
  map(scrollPercentage)
);

progress$.subscribe(percentage => {
  progressBar.style.width = `${percentage}%`;
});
