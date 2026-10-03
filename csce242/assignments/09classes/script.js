class Vacation {
    constructor(title, type, description, thingsToDo, imageFile, mapQuery) {
        this.title = title;
        this.type = type;
        this.description = description;
        this.thingsToDo = thingsToDo;
        this.imageFile = imageFile;
        this.mapQuery = mapQuery;
    }

    // gets the card that goes into the gallery
    get card() {
        const section = document.createElement("section");
        section.classList.add("vacation");

        const header = document.createElement("div");
        header.classList.add("vacation-header");

        const h3 = document.createElement("h3");
        h3.textContent = this.title;
        header.append(h3);

        const typeP = document.createElement("div");
        typeP.classList.add("type");
        typeP.textContent = `${this.type} Vacation`;
        header.append(typeP);

        section.append(header);
        section.append(this.vacationImage());

        //modal is opened when clicked by teh user 
        section.onclick = () => {
            this.showModal();
        };

        return section;
    }

    vacationImage() {
        const img = document.createElement("img");
        img.src = `images/${this.imageFile}`;
        return img;
    }

    // populatesa nd shows modal
    showModal() {
        document.getElementById("modalTitle").textContent = this.title;
        document.getElementById("modalType").textContent = this.type;
        document.getElementById("modalDescription").textContent = this.description;
        document.getElementById("modalThings").textContent = this.thingsToDo;

        // google maps embed
        const mapFrame = document.getElementById("modalMap");
        mapFrame.src = `https://www.google.com/maps?q=${encodeURIComponent(this.mapQuery)}&output=embed`;

        document.getElementById("vacationModal").style.display = "block";
    }
}

// closes the modal 
function closeModal() {
    document.getElementById("vacationModal").style.display = "none";
}

// creates the array of teh vacations
const vacations = [];

vacations.push(new Vacation(
    "Maui",
    "Beach",
    "Tropical paradise with stunning beaches, lush rainforests, and volcanic landscapes.",
    "Snorkel at Molokini Crater, drive the Road to Hana, watch sunrise at Haleakalā, surf in Lahaina.",
    "maui-img.png",
    "Maui, Hawaii"
));

vacations.push(new Vacation(
    "Aspen",
    "Mountain",
    "World-famous ski resort town surrounded by the Rocky Mountains and charming alpine villages.",
    "Ski or snowboard, hike Maroon Bells, explore downtown Aspen, take a hot air balloon ride.",
    "Aspen-Colorado.jpg",
    "Aspen, Colorado"
));

vacations.push(new Vacation(
    "Santorini",
    "Beach",
    "Iconic white-washed buildings, dramatic caldera views, and crystal-clear Aegean waters.",
    "Watch sunset in Oia, visit black sand beaches, go wine tasting, explore ancient Akrotiri.",
    "greece.jpg",
    "Santorini, Greece"
));

vacations.push(new Vacation(
    "Banff",
    "Mountain",
    "Stunning Canadian Rockies with turquoise lakes, glaciers, and abundant wildlife.",
    "Visit Lake Louise, drive the Icefields Parkway, hike Johnston Canyon, soak in Banff Hot Springs.",
    "banff.jpg",
    "Banff, Canada"
));

vacations.push(new Vacation(
    "Maldives",
    "Beach",
    "Overwater bungalows, pristine coral reefs, and some of the clearest water on Earth.",
    "Snorkel or dive, relax on a private island, go dolphin watching, enjoy a sunset cruise.",
    "maldives.jpg",
    "Maldives"
));

vacations.push(new Vacation(
    "Zermatt",
    "Mountain",
    "Car-free mountain village at the foot of the legendary Matterhorn.",
    "Ski the Matterhorn Glacier, ride the Gornergrat Railway, hike alpine trails, enjoy fondue.",
    "swiss-alps.jpg",
    "Zermatt, Switzerland"
));

vacations.push(new Vacation(
    "Oak Island",
    "Beach",
    "A family-friendly island with a long pier, lighthouse, and calm Atlantic beaches.",
    "Visit the Oak Island Lighthouse, fish from the pier, swim, ride bikes along the coast.",
    "oak.jpg",
    "Oak Island, NC"
));

vacations.push(new Vacation(
    "Pawleys Island",
    "Beach",
    "One of the oldest seaside resorts on the East Coast, known for its hammocks and quiet beaches.",
    "Relax in a Pawleys Island hammock, beach walk, visit nearby Brookgreen Gardens.",
    "pawley.jpg",
    "Pawleys Island, SC"
));

// adds the vacation cards to the webpage
const gallery = document.getElementById("gallery");

vacations.forEach((vacation) => {
    gallery.append(vacation.card);
});