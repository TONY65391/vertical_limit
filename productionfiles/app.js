const menu = document.querySelectorAll('header nav')[0];
const subMenu = document.querySelectorAll('header nav')[1];
menu.onclick = function(){
    menu.classList.add('open');
    subMenu.classList.remove('closeSubMenu');
    subMenu.classList.add('openSubMenu');
}
subMenu.onclick = function(){
    menu.classList.remove('open');
    subMenu.classList.remove('openSubMenu');
    subMenu.classList.add('closeSubMenu');
}

// SEARCH BAR
const search = document.querySelector('header .search');
const ul = search.querySelector('ul');
const li = ul.querySelectorAll('li');
const searchInput = search.querySelector('input');
li.forEach(item => {
    item.style.display = "none";
})

ul.style.display = "none"
searchInput.addEventListener('input', () => {
    var filter, i, a, txtValue, input;
    input = searchInput;
    filter = input.value.toUpperCase();

    ul.style.display = ""
    for (i = 0; i < li.length; i++){
        a = li[i].getElementsByTagName("a")[0];
        txtValue = a.textContent || a.innerHTML || a.innerText;
        if (txtValue.toUpperCase().indexOf(filter) > -1){
            li[i].style.display = "";
        }
        else{
            li[i].style.display = "none";
        }
    }
    if (input.value === ""){
        ul.style.display = "none"
    }
})

// REMOVE OPEN SUBMENU ONRESIZE
window.onresize = function(){
    if (window.innerWidth >= 750){
        subMenu.classList.add('closeSubMenu');
        menu.classList.remove('open');
    }
}

// ADD SECTION ONSCROLL
var right = 0;
const sections = document.querySelectorAll('main section');
window.addEventListener('scroll', () => {
    const bubble = sections[1].querySelector('.bubble');
    const image3 = sections[2].querySelector('img');
    
    bubble.style.right = window.scrollY / 8 + "px";
    image3.style.left = window.scrollY / 8 + "px";
})


