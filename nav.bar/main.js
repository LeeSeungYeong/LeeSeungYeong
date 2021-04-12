const toggleBtn = document.querySelector('.menu_toggle');
const menu = document.querySelector('.menu');
const icons = document.querySelector('.icons');

toggleBtn.addEventListener('click',function(){
  menu.classList.toggle('active');
  icons.classList.toggle('active');
});


