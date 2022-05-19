let btn = document.querySelector(".btn");

btn.addEventListener("click", () => {
  let search = document.querySelector(".search").value;
  fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?a=${search}`)
    .then((res) => {
      return res.json();
    })
    .then((data) => {
      document.querySelector(".meals-section").innerHTML = "";
      let meals = data.meals;
      meals.map((meal) => {
        let newDiv = document.createElement("div");
        let newDiv2 = document.createElement("div");
        let newImg = document.createElement("img");
        newImg.classList.add("meal-img");
        newImg.src = meal.strMealThumb;
        newDiv2.appendChild(newImg);
        let newH2 = document.createElement("h2");
        newDiv.appendChild(newDiv2);
        newH2.innerText = meal.strMeal;
        newH2.classList.add("meal-name");
        newDiv.appendChild(newH2);
        newDiv.classList.add("meal-card");
        document.querySelector(".meals-section").appendChild(newDiv);
      });
    });
});
