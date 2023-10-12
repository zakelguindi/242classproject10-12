

const toggleNav = () => {
  document.getElementById("main-nav").classList.toggle("hide"); 
}

window.onload = () => {
  document.getElementById("group-work").onclick = toggleNav; 
}