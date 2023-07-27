let itemParent = document.querySelector('nav.navbar ul.menu-list li.item-parent');
let itemChild = document.querySelector('nav.navbar ul.menu-list li.item-parent .submenu');
itemParent.addEventListener('mouseenter', function() {
    itemChild.style.visibility = "visible"
})
itemChild.addEventListener('mouseover', function() {
    itemChild.style.visibility = "visible"
})
itemChild.addEventListener('mouseout', function() {
    itemChild.style.visibility = "hidden"
})

let playvid = document.querySelector('span.videoPlay');
let stopvid = document.querySelector('span.videoStop');
let popup = document.querySelector('.popup');
playvid.addEventListener('click', function() {
    popup.style.display = "flex";
})
stopvid.addEventListener('click', function() {
    popup.style.display = "none";
})

let navbar = document.querySelector('nav.navbar')
window.addEventListener('scroll', function() {
    console.log(navbar)
    if (this.scrollY > 100) {
        navbar.classList.add('fixed')
    } else {
        navbar.classList.remove('fixed')
    }
})