const menuBtnElement = document.querySelector('[data-menu-btn]')
const navMenuElement = document.querySelector('[data-nav-menu]')

const openMenu = () => {
    navMenuElement.classList.toggle('menu--open')
}

menuBtnElement.addEventListener('click', openMenu)