const sidebar = document.getElementById('sidebar');
const mainContent = document.querySelector('.main-content');
const openBtn = document.getElementById('openSidebar');
const closeBtn = document.getElementById('closeSidebar');

closeBtn.onclick = () => {
    sidebar.classList.add('collapsed');
    mainContent.classList.add('expanded');
    openBtn.style.display = 'block';
};

openBtn.onclick = () => {
    sidebar.classList.remove('collapsed');
    mainContent.classList.remove('expanded');
    openBtn.style.display = 'none';
};