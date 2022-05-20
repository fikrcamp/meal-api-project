

document.querySelector(".btn").addEventListener('click' , function(){
    let input = document.querySelector(".box").value;
    fetch(`https://themealdb.com/api/json/v1/1/search.php?s=${input}`).then((food)=>{
        return food.json();
    }).then((meal)=>{
        // console.log(meal.meals);
        document.querySelector(".search").innerText=""
        meal.meals.map (function (value)
        {
            
            
            console.log(value)

            let foodPage=document.createElement("div");
            let foodImage=document.createElement("img");
            let foodDesc=document.createElement("h3");
            foodPage.appendChild(foodImage);
            foodPage.appendChild(foodDesc);
            document.querySelector(".food-section").appendChild(foodPage);
            foodPage.classList.add("food-card");
            foodDesc.classList.add("food-name");
            foodImage.classList.add("image")
            foodImage.src= value.strMealThumb;
            foodDesc.innerText=value.strMeal;




        })
        



})
        







    })

