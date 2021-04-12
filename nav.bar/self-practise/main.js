const toggleBtn = document.querySelector('.toggle_btn');
const menu = document.querySelector('.menu');
const icons = document.querySelector('.icons');

toggleBtn.addEventListener('click', function() {
  console.log('click');
  menu.classList.toggle('active');
  icons.classList.toggle('active');
});