// slideout menu event 
 //define UI variables
const menuBtn = document.querySelector('.menuBtn');
const menu = document.querySelector('.slideOutNav');
const closeMenu = document.querySelector('.close');
const openBtn = document.querySelector('.open');
// open/close menu event
menuBtn.addEventListener('click',openMenu);
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

//Popup Modal event 
  // define UI variables 
  //const submitFormBtn =document.querySelector('.modalBtn');
  const modalClose= document.querySelector('.modalContent');
  const form = document.querySelector('form');
  const modal = document.querySelector('.modal');
  const inputFields = document.querySelectorAll('input');
  const text = document.querySelector('#message');
  const checkBox=document.querySelector('#terms');
  //const checkBox = document.querySelector('#terms');
// step-1 add modal event 
  //submitFormBtn.addEventListener('click', showModal);
  form.addEventListener('submit',showModal);
  function showModal(e){
   e.preventDefault();
   modal.style.display='block';

   inputFields.forEach(function(input){
    input.value='';
   });
   
   text.value='';
   checkBox.checked=false;
  }
//step-2 remove modal event
modalClose.addEventListener('click', removeModal);

function removeModal(e){
 e.preventDefault();
 if(e.target.parentElement.classList.contains('closeBtn')){
  modal.style.display='none';

}
}

