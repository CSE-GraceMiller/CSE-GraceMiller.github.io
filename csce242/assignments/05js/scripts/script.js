//changes the speech bubble visibility if the user clciks on teh speech card
document.getElementById("speech-card").onclick = () => {
  document.querySelector(".speech").classList.add("visible");
};

//repeats the beverage the user chooses and a little message when a bevergae choice is chosen
document.getElementById("beverage").onchange = (e) => {
  document.getElementById("beverage-message").innerHTML = (e.target.value && e.target.value + ": Nice Choice!") || "";
};

//adds the smiley face sticker when the sun on the sticker card is clicked
document.getElementById("sun").onclick = () => {
  document.querySelector(".sticker-area").innerHTML += `<span class="sticker" style="left:20%;top:25%">😊</span>`;
};