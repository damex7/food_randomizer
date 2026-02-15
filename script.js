// Get existing foods from HTML
let foodList = Array.from(document.querySelectorAll(".name")).map(el => el.innerText);

// Display a random meal
document.querySelector(".picker").addEventListener("click", () => {
  const randomIndex = Math.floor(Math.random() * foodList.length);
  alert(`🍛 Today's pick: ${foodList[randomIndex]}`);
});

// Add a new meal
document.querySelector(".add").addEventListener("click", () => {
  const input = document.querySelector(".food-name");
  const mealName = input.value.trim();

  if (mealName !== "") {
    foodList.push(mealName);

    // Add it to the DOM visually
    const foodDiv = document.createElement("div");
    foodDiv.className = "food";

    const span = document.createElement("span");
    span.className = "name";
    span.innerText = mealName;

    // No image, just a placeholder box
    const img = document.createElement("img");
    img.src = "./images/placeholder.jpg";
    img.alt = mealName; 

    foodDiv.appendChild(img);
    foodDiv.appendChild(span);

    // Add to the last .contents-1 container
    document.querySelectorAll(".contents-1")[1].appendChild(foodDiv);

    // Send to server (optional)
    fetch("addMeal.php", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: `meal=${encodeURIComponent(mealName)}`
    });

    input.value = "";
  }
});

let food1 = document.getElementById("food1");
let food2 = document.getElementById("food2");
let food3 = document.getElementById("food3");
let food4 = document.getElementById("food4");
let food5 = document.getElementById("food5");
let food6 = document.getElementById("food6");
let food7 = document.getElementById("food7");
let food8 = document.getElementById("food8");
let food9 = document.getElementById("food9");
let food10 = document.getElementById("food10");
let food11 = document.getElementById("food11");
let food12 = document.getElementById("food12");

let name1 = document.getElementById("name1");
let name2 = document.getElementById("name2");
let name3 = document.getElementById("name3");
let name4 = document.getElementById("name4");
let name5 = document.getElementById("name5");
let name6 = document.getElementById("name6");
let name7 = document.getElementById("name7");
let name8 = document.getElementById("name8");
let name9 = document.getElementById("name9");
let name10 = document.getElementById("name10");
let name11 = document.getElementById("name11");
let name12 = document.getElementById("name12");

food1.addEventListener("click", () => {
  alert("You clicked on " + name1.innerText);
});
food2.addEventListener("click", () => {
  alert("You clicked on " + name2.innerText);
});
food3.addEventListener("click", () => {
  alert("You clicked on " + name3.innerText);
});
food4.addEventListener("click", () => {
  alert("You clicked on " + name4.innerText);
});
food5.addEventListener("click", () => {
  alert("You clicked on " + name5.innerText);
});
food6.addEventListener("click", () => {
  alert("You clicked on " + name6.innerText);
});
food7.addEventListener("click", () => {
  alert("You clicked on " + name7.innerText);
});
food8.addEventListener("click", () => {
  alert("You clicked on " + name8.innerText);
});
food9.addEventListener("click", () => {
  alert("You clicked on " + name9.innerText);
});
food10.addEventListener("click", () => {
  alert("You clicked on " + name10.innerText);
});
food11.addEventListener("click", () => {
  alert("You clicked on " + name11.innerText);
});
food12.addEventListener("click", () => {
  alert("You clicked on " + name12.innerText);
});