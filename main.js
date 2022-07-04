const menuBtn = document.querySelector('.menuBtn');
const menu = document.querySelector('.slideOutNav');
const closeMenu = document.querySelector('.close');
const openBtn = document.querySelector('.open');
function openMenu (){
 if(menu.classList.contains("showMenu")){
  menu.classList.remove("showMenu");
  closeMenu.style.display = "none";
  openBtn.style.display="block";
  
 }else{
  menu.classList.add("showMenu");
  closeMenu.style.display = "block";
  openBtn.style.display="none";
 }
}


menuBtn.addEventListener('click',openMenu);
