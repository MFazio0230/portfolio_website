/* eslint-env es6 */
/* eslint-disable no-console */

console.log("Hi, my name is Michael, and welcome to my portfolio website.")

document.addEventListener('DOMContentLoaded', () => {
  const hamMenu = document.querySelector('.hamburger-menu');
  const navmenu = document.querySelector('.nav-menu');

  hamMenu.addEventListener('click', () => {
    hamMenu.classList.toggle('active');
    navmenu.classList.toggle('active');
  });
});


document.addEventListener('DOMContentLoaded', () => {
  const coll = document.getElementsByClassName("collapsible");

  for (let i = 0; i < coll.length; i++) {
    coll[i].addEventListener("click", function() {
      this.classList.toggle("active");
      var content = this.nextElementSibling;
      if (content.style.maxHeight){
        content.style.maxHeight = null;
      } else {
        content.style.maxHeight = content.scrollHeight + "px";
      } 
    });
  }
});




// JavaScript Document