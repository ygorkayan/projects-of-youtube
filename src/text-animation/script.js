const section = document.querySelector('section');
const fragment = new DocumentFragment();

const lines = [
  '--d: 25; --y: 200',
  '--d: -25; --y: 400',
  '--d: 15; --y: 500',
  '--d: -5; --y: 50',
  '--d: -15; --y: 350',
];

const msg = 'police line do not cross';

const createLine = (style, msg) => {
  const container = document.createElement('div');
  const containerOfSpan = document.createElement('div');
  const span = document.createElement('span');
  containerOfSpan.appendChild(span);

  container.classList.add('scroll');
  container.setAttribute('style', style);
  span.innerText = new Array(8).fill(msg).join(' - ');

  container.appendChild(containerOfSpan);
  container.appendChild(containerOfSpan.cloneNode(true));

  return container;
};

lines.forEach(value => fragment.appendChild(createLine(value, msg)));

section.appendChild(fragment);
