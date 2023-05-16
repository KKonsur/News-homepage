const navMenu = document.querySelector('.nav-menu')

navMenu.addEventListener('click', () => {
   const baseURL = new URL('./', window.location.href).href;
   const menuIcon = navMenu.querySelector('img');
   document.querySelector('.nav__list').classList.toggle('nav__list--active')
   document.querySelector('.overlay').classList.toggle('overlay--active')

   if (menuIcon.src === baseURL + 'assets/images/icon-menu.svg') {
      menuIcon.src = baseURL + 'assets/images/icon-menu-close.svg';
      document.body.style = 'overflow-y: hidden;'
   } else {
      menuIcon.src = baseURL + 'assets/images/icon-menu.svg';
      document.querySelector('.nav__list').classList.remove('nav__list--active')
      document.body.style = 'overflow-y: scroll;'
   }

})