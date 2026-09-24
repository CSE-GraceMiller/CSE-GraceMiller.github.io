//creates the cars
const createCar = (color, left, top) => {
  const car = document.createElement("div");
  car.classList.add("car");
  car.style.backgroundColor = color;
  car.style.left = left + "%";
  car.style.top = top + "px";
  return car;
};

//car colors
const carColors = [
  "#00bcd4",
  "#8bc34a",
  "#7b1fa2",
  "#ff9800",
  "#ce93d8",
  "#81d4fa",
  "#5c6bc0",
  "#ef5350"
];

//creates the cars and randomly places them
window.onload = () => {
  const road = document.getElementById("road");
  for (let i = 0; i < 8; i++) {
    const color = carColors[Math.floor(Math.random() * carColors.length)];
    const left = 5 + Math.random() * 80;
    const top = Math.random() < 0.5
      ? 18 + Math.random() * 10
      : 68 + Math.random() * 10;
    const car = createCar(color, left, top);
    road.appendChild(car);
  }
};