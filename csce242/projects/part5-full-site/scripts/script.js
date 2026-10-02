document.getElementById("toggle-nav").onclick = () => {
  const menu = document.getElementById("menu-items");
  const arrow = document.getElementById("toggle-nav");

  menu.classList.toggle("show");

  if (menu.classList.contains("show")) {
    arrow.innerHTML = "▲";
  } else {
    arrow.innerHTML = "▼";
  }
};