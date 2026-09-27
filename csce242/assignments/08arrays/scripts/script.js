//google maps query
const mountains = {
  "Asheville": "Asheville,+NC",
  "Boone": "Boone,+NC",
  "Hot Springs": "Hot+Springs,+NC",
  "Table Rock": "Table+Rock,+SC"
};
const beaches = {
  "Myrtle Beach": "Myrtle+Beach,+SC",
  "Miami Beach": "Miami+Beach,+FL",
  "Virginia Beach": "Virginia+Beach,+VA",
  "Outer Banks": "Outer+Banks,+NC"
};

const destTypeSelect = document.getElementById("dest-type");
const destLinksDiv = document.getElementById("dest-links");
const mapContainer = document.getElementById("map-container");
const mapFrame = document.getElementById("map-frame");

//when the user changes the input/selection clears previos links and hides maps
destTypeSelect.onchange = () => {
  destLinksDiv.innerHTML = "";
  mapContainer.style.display = "none";
  mapFrame.src = "";
  const selected = destTypeSelect.value;
  if (!selected) return;
  const data = selected === "mountains" ? mountains : beaches;
  Object.keys(data).forEach((name) => {
    const link = document.createElement("a");
    link.href = "#";
    link.textContent = name;
    link.onclick = (e) => {
      showMap(data[name], name);
    };
    destLinksDiv.append(link);
  });
};

//shows the gm box map
const showMap = (query, title) => {
  mapFrame.src = `https://www.google.com/maps?q=${query}&output=embed`;
  mapContainer.style.display = "block";
};