const checkbox = document.querySelector('#check');
const button = document.querySelector('.ico');
const nav = document.querySelector('nav');

checkbox.addEventListener('change', () => {
  if (checkbox.checked) {
    nav.classList.add('open');
  } else {
    nav.classList.remove('open');
  }
});

button.addEventListener('click', () => {
  nav.classList.toggle('open');
});

document.body.addEventListener('click', () => {
  if (nav.classList.contains('open')) {
    checkbox.checked = false;
    nav.classList.remove('open');
  }
});