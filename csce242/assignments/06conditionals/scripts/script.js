//menu toggle
document.getElementById("toggle-nav").onclick = () => {
    const menu = document.getElementById("menu-items");
    const arrow = document.getElementById("toggle-nav");

    menu.classList.toggle("show");

    if (menu.classList.contains("show")) {
        arrow.innerHTML = "▲";
    } 
    else {
        arrow.innerHTML = "▼";
    }
};

//exercise 1 link
document.getElementById("exercise1-link").onclick = (e) => {
    document.getElementById("exercise1").classList.remove("hidden");
    document.getElementById("exercise2").classList.add("hidden");
};

//exercise 2 link
document.getElementById("exercise2-link").onclick = (e) => {
    document.getElementById("exercise1").classList.add("hidden");
    document.getElementById("exercise2").classList.remove("hidden");
};

//when teh user changes the number of days they'll miss
//a message shows based on how many days are input/missed
document.getElementById("txt-num-days").onkeyup = (e) => {
    const numDays = parseInt(e.target.value);
    const pMessage = document.getElementById("p-missing-message");
    const percentage = (numDays / 25) * 7;

    if(numDays <= 5) {
        pMessage.innerHTML = `You will lose ${percentage.toFixed(1)}% of your final grade for skipping ${numDays} days.`;
    } 
    else if(numDays <= 10) {
        pMessage.innerHTML = `You will lose ${percentage.toFixed(1)}% of your final grade for skipping ${numDays} days. This is starting to affect your grade.`;
    } 
    else if(numDays <= 15) {
        pMessage.innerHTML = `You will lose ${percentage.toFixed(1)}% of your final grade for skipping ${numDays} days. Your attendance is becoming a concern.`;
    } 
    else {
        pMessage.innerHTML = `You will lose ${percentage.toFixed(1)}% of your final grade for skipping ${numDays} days. This is a significant amount of missed class.`;
    }
};

//calculates how many days are left in the semester
const today = new Date();
const endOfSemester = new Date(today.getFullYear(), 11, 4);
const daysLeft = Math.round((endOfSemester - today) / (1000 * 60 * 60 * 24));

document.getElementById("p-days-left").innerHTML =
    `You have ${daysLeft} days left in the semester`;

    if (daysLeft <= 100) {
        document.getElementById("p-count-message").innerHTML =
        "Not time to start counting down yet.";
    }

    if (daysLeft <= 50) {
        document.getElementById("p-count-message").innerHTML =
        "Almost there!";
    }
