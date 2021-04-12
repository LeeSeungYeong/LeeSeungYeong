const btn = document.querySelector('.info .titleAndButton button');
const title = document.querySelector('.info .titleAndButton span');

btn.addEventListener('click', function() {
  title.classList.toggle('clamp');
  btn.classList.toggle('clicked');
});