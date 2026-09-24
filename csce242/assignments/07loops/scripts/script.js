//creates the cars
const createCar = (color, leftPercent, topPx) => {
  const car = document.createElement("div");
  car.classList.add("car");
  car.style.backgroundColor = color;
  car.style.left = `${leftPercent}%`;
  car.style.top = `${topPx}px`;
  return car;
};

// car colors
const carColors = [
  "#00bcd4", // teal
  "#8bc34a", // lime green
  "#7b1fa2", // purple
  "#ff9800", // orange
  "#ce93d8", // light purple
  "#81d4fa", // light blue
  "#5c6bc0", // indigo
  "#ef5350"  // red
];

//creates the cars and randomly places them
window.addEventListener("load", () => {
  const road = document.getElementById("road");
  const numCars = 8;

  for (let i = 0; i < numCars; i++) {
    const color = carColors[Math.floor(Math.random() * carColors.length)];

    const left = 5 + Math.random() * 80;

    const top = Math.random() < 0.5
      ? 18 + Math.random() * 10
      : 68 + Math.random() * 10;

    const car = createCar(color, left, top);
    road.appendChild(car);
  }
});