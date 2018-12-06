// princesas
const fills = document.querySelectorAll('.foto');
const empties = document.querySelectorAll('.empty');
let counter = 0;
// arreglo
let imagenes = [
  'ariel.jpg',
  'mulan.jpg',
  'cenicienta.jpg',
  'merida.jpg',
  'tiana.png',
  'bella.png'
];

// Fill listeners
for (const fill of fills) {
  fill.children[0].src = 'img/'+imagenes[counter];
  fill.setAttribute('data', counter);
  fill.addEventListener('dragstart', () => {
    fill.className += ' hold';
    num = fill.getAttribute('data')
    setTimeout(() => (fill.className = 'invisible'), 0);
  });
  fill.addEventListener('dragend', () => {
    fill.className = 'fill';
  });
  counter++;
}
// Loop through empty boxes and add listeners
for (const empty of empties) {
  empty.addEventListener('dragover', (e) => {
    e.preventDefault();
  });
  empty.addEventListener('dragenter', (e) => {
    e.preventDefault();
    empty.className += ' hovered';
  });
  empty.addEventListener('dragleave', () => {
    empty.className = 'empty';
  });
  empty.addEventListener('drop', () => {
    empty.className = 'empty';
    empty.append(fills[num]);
    // console.log(fills.indexOf(fills[0]));
  });
}