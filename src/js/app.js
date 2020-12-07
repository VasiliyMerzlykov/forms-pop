import PopOver from './Pop';

const button = document.getElementById('button');
const pop = new PopOver(
  document.body,
  'Popover title',
  'And here`s some amazing content. It`s very engaging. Right?',
);
pop.bindToDOM();

button.addEventListener('click', () => {
  pop.positionWidget(button);
});
