const menuIcon = document.getElementById('menuIcon');
const sidebar = document.querySelector('.sidebar');

menuIcon.addEventListener('click', () => {
    sidebar.style.left = '0';
});

document.addEventListener('click', (event) => {
    const isClickInsideSidebar = sidebar.contains(event.target); 
    const isClickInsideMenuIcon = menuIcon.contains(event.target); 

    if (!isClickInsideSidebar && !isClickInsideMenuIcon) {
        sidebar.style.left = '-250px'; 
    }
});
