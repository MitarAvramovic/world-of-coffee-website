let coffees = ["Espresso", "Latte", "Cappuccino"];

function checkName(name) {
    return name.trim() !== "";
}

function longestCoffee(arr) {
    let longest = "";
    for (let i = 0; i < arr.length; i++) {
        if (arr[i].length > longest.length) {
            longest = arr[i];
        }
    }
    return longest;
}

const formSection = document.createElement("section");
formSection.classList.add("contact-form");
formSection.innerHTML = `
    <h2>Tell us your favorite coffee!</h2>
    <label for="name">Your Name:</label>
    <input type="text" id="name" placeholder="Enter your name">
    
    <label for="coffee">Favorite Coffee:</label>
    <input type="text" id="coffee" placeholder="Enter coffee type">
    
    <button id="submitBtn">Submit</button>
    <p id="message"></p>
    <div id="coffeeList"></div>
`;
document.body.appendChild(formSection);

document.getElementById("submitBtn").addEventListener("click", function () {
    const name = document.getElementById("name").value;
    const coffee = document.getElementById("coffee").value;

    if (!checkName(name)) {
        document.getElementById("message").textContent = "Please enter your name!";
        document.getElementById("message").style.color = "red";
        return;
    }

    coffees.push(coffee);

    let listHTML = "<ul>";
    for (let i = 0; i < coffees.length; i++) {
        listHTML += `<li>${coffees[i]}</li>`;
    }
    listHTML += "</ul>";

    document.getElementById("coffeeList").innerHTML = listHTML;

    document.getElementById("message").textContent = `Hello ${name.toUpperCase()}, coffee added!`;
    document.getElementById("message").style.color = "green";
});

formSection.addEventListener("mouseover", function () {
    formSection.style.backgroundColor = "#f1c27d";
});
formSection.addEventListener("mouseout", function () {
    formSection.style.backgroundColor = "#fff";
});

setTimeout(() => {
    document.getElementById("coffeeList").innerHTML += 
        `<p><strong>Longest coffee name:</strong> ${longestCoffee(coffees)}</p>`;
}, 3000);
