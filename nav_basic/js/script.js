/**
 * animate drop-down menu
 */

/**************************************
 * get values from the DOM
 **************************************/

const burger = document.getElementById('burger');
const navHeader = document.getElementById('nav-header');

/**************************************
 * event listeners
 **************************************/

/**
 * rotate the burger icon when clicked
 */
burger.addEventListener('click', () => {
  if (burger.classList.contains('fa-bars-clicked')) {
    burger.classList.remove('fa-bars-clicked');
    navHeader.classList.remove('show');
  } else {
    burger.classList.add('fa-bars-clicked');
    navHeader.classList.add('show');
  }
});
