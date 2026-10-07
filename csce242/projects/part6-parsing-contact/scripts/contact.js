document.getElementById('contact-form').onsubmit = async(e) => {
    e.preventDefault();
    const form = e.target;
    
    const formData = new FormData(form);
    formData.append("access_key", "948b6008-56d1-4db3-9cff-f6908255eff5");
    const result = document.getElementById("result");
    result.className = "";
    result.innerHTML = "Sending...";
    
    try {
        const response = await fetch("https://api.web3forms.com/submit", {
            method: "POST",
            body: formData
        });
        
        const data = await response.json();
        
        if (response.ok) {
            result.innerHTML = "Message sent successfully!";
            result.classList.add("success");
            form.reset();
        } 
        else {
            result.innerHTML = "Error: " + (data.message || "Something went wrong");
            result.classList.add("error");
        }
    } 
    catch (error) {
        result.innerHTML = "Sorry, we couldn't send your message. Please try again.";
        result.classList.add("error");
    }
};