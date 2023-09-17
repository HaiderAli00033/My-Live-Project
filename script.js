let menu = document.querySelector(".menu");
let nav = document.querySelector(".nav-mob");
let navpc = document.querySelector(".nav-main")
let close = document.querySelector(".end")

menu.addEventListener("click", function(){
  nav.classList.toggle("show");
  navpc.classList.add('remove');
  menu.classList.add('pressed')
})

close.addEventListener("click", function () {
  nav.classList.toggle('show');
  navpc.classList.remove('remove');
})