const $sideBarMenuChilds = [...document.querySelector('.sidebar__menu').children]
const $amburgerMenu = document.querySelector('.sidebar_hamburger')
const $sidebar = document.querySelector('.sidebar')
const $sidebarlinks = document.querySelectorAll('.sidebar__link')
const $categoryTitle = document.querySelector('.category-title')

$amburgerMenu.addEventListener('click',() => {
  $sideBarMenuChilds.forEach(node => {
    const nodeHaveClass = node.classList.contains('sidebar_hamburger')
    if(!nodeHaveClass) node.classList.toggle('visible')
  })

  $categoryTitle.classList.toggle('hidden')
  $categoryTitle.nextElementSibling.classList.toggle('translate-up')

  $sidebarlinks.forEach(link => {
    link.classList.toggle('visible')
  })
  

  $sidebar.classList.toggle('min_sidebar')


})