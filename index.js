const toggleBtn = document.getElementById('menu-icon');
const menu = document.getElementById('menu-dropdown-list');
const close = document.getElementById('cancel-icon');
const toolscontainer = document.getElementById('tools-container-one');


toggleBtn.addEventListener('click', () => {
  menu.classList.toggle('active');
});

close.addEventListener('click', () => {
    menu.classList.remove('active');
})






 



