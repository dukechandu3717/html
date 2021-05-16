'use strict';

///cookie message
const section1 = document.querySelector('.firstsection');

const message = document.createElement('div');
message.classList.add('message');
// message.textContent =
//   'we use cookied for improved functionality and analaytics.';
message.innerHTML =
  'we use cookies for improved functionality.<hr> <button class="btn btn--close--skip"> Skip</button>';
// header.prepend(message);
section1.prepend(message);

document
  .querySelector('.btn--close--skip')
  .addEventListener('click', function () {
    message.remove();
  });

///toogle nav bar
function classToggle() {
  const navs = document.querySelectorAll('.Navbar__Items');

  navs.forEach(nav => nav.classList.toggle('Navbar__ToggleShow'));
}

document
  .querySelector('.Navbar__Link-toggle')
  .addEventListener('click', classToggle);
