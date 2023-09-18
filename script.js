let menu = document.querySelector(".menu");
let nav = document.querySelector(".nav-mob");
let navpc = document.querySelector(".nav-main")
let close = document.querySelector(".end")

menu.addEventListener("click", function(){
  nav.classList.toggle("show");
  navpc.classList.add('remove');
})

close.addEventListener("click", function () {
  nav.classList.toggle('show');
  navpc.classList.remove('remove');
})

window.addEventListener("resize", function(){
  nav.classList.remove("show");
  navpc.classList.remove("remove");
})