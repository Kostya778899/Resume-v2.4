const sidebar = document.getElementById('sidebar');
const sidebarShowBtn = document.getElementById('sidebar-show-btn');


function updateSidebar() {
  //sidebar.style.position = window.innerWidth < 600 ? 'absolute' : 'relative';
  if (window.innerWidth < 600) {
    sidebar.classList.add('floating');
    sidebarShowBtn.classList.add('show');
  }
  else {
    sidebar.classList.remove('floating');
    sidebarShowBtn.classList.remove('show');
  }
}
window.onresize = () => {
  updateSidebar();
};
sidebarShowBtn.onclick = () => {
  if (sidebar.classList.contains('show')) {
    sidebar.classList.remove('show');
    sidebarShowBtn.classList.remove('sidebar-showed');
  }
  else {
    sidebar.classList.add('show');
    sidebarShowBtn.classList.add('sidebar-showed');
  }
};

updateSidebar();