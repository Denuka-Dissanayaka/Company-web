function initMap() {
    const loc = {
        lat: 6.927079,
        lng: 79.861244
    }

    const map = new google.maps.Map(document.querySelector('.map'), {
        zoom: 14,
        center: loc
    });

    const marker = new google.maps.Marker({ position: loc, map: map })
}

// ---------------------------

const menuBar = document.querySelector('.menu-bar');
const menuClose = document.querySelector('.mobile-nav-close');
const menuList = document.querySelectorAll('.mobile-nav-menu ul li');
console.log(menuList)

menuBar.addEventListener('click', () => {
    document.querySelector('.mobile-nav-menu').classList.add('menu-bar-click');
})

menuClose.addEventListener('click', () => {
    document.querySelector('.mobile-nav-menu').classList.remove('menu-bar-click');
})



menuList.forEach((item) => {
    item.addEventListener('click', () => {
        document.querySelector('.mobile-nav-menu').classList.remove('menu-bar-click');
    })
})