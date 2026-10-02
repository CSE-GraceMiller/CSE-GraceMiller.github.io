//mobile header toggle
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

//heart button toggle
document.querySelectorAll(".heart").forEach(button => {
  button.onclick = () => {
    button.classList.toggle("liked");
    if (button.classList.contains("liked")) {
      button.innerHTML = "♥";
    } 
    else {
      button.innerHTML = "♡";
    }
  };
});