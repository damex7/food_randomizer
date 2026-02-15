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
