//exercise 1 link
document.getElementById("exercise1-link").onclick = (e) => {
    e.preventDefault();
    document.getElementById("exercise1").classList.remove("hidden");
    document.getElementById("exercise2").classList.add("hidden");
};

//exercise 2 link
document.getElementById("exercise2-link").onclick = (e) => {
    e.preventDefault();
    document.getElementById("exercise1").classList.add("hidden");
    document.getElementById("exercise2").classList.remove("hidden");
};

//when teh user changes the number of days they'll miss
//a message shows based on how many days are input/missed
document.getElementById("txt-num-days").onkeyup = (e) => {
    const numDays = parseInt(e.target.value);
    const pMessage = document.getElementById("p-missing-message");
    const percentage = (numDays / 25) * 7;

    if(numDays <= 5){
        pMessage.innerHTML = `You will lose ${percentage.toFixed(1)}% of your final grade for skipping ${numDays} days.`;
    } else if(numDays <= 10){
        pMessage.innerHTML = `You will lose ${percentage.toFixed(1)}% of your final grade for skipping ${numDays} days. This is starting to affect your grade.`;
    } else if(numDays <= 15) {
        pMessage.innerHTML = `You will lose ${percentage.toFixed(1)}% of your final grade for skipping ${numDays} days. Your attendance is becoming a concern.`;
    } else {
        pMessage.innerHTML = `You will lose ${percentage.toFixed(1)}% of your final grade for skipping ${numDays} days. This is a significant amount of missed class.`;
    }
};
