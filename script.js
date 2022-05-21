let button = document.querySelector(".icon");

// Button functionality
button.addEventListener("click", function(){
    let input = document.querySelector(".search-input").value;
    fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${input}`).then((res)=>{
        return res.json();
    }).then((data)=>{
        document.querySelector(".hide").innerHTML = ""
        // console.log(data.meals[0].strIngredient7);
        // document.querySelector()
        let mealName = data.meals[0].strMeal;   // h3
        let mealCategory = data.meals[0].strCategory; //h3
        let mealArea = data.meals[0].strArea;  //h3
        let mealImage = data.meals[0].strMealThumb; //img
        let mealDescription = data.meals[0].strInstructions;
        let watchButton = data.meals[0].strYoutube; // button



        // Create Elements in Html
        let imageDiv = document.createElement("div");  // div
        let Image = document.createElement("img"); // img
        let heading = document.createElement("div"); // div
        let foodName = document.createElement("h1") // h1
        let foodCategory = document.createElement("h4") // h4
        let foodDesccripton = document.createElement("p") // p


        // Textcontent
        Image.src = mealImage;
        foodName.innerText = mealName;
        foodCategory.innerText = mealCategory;
        foodDesccripton.innerText = mealDescription;

        // Adding Css Class
        heading.classList.add("heading")
        Image.classList.add("meal-image")
        foodName.classList.add("heading-h1")
        foodCategory.classList.add("heading-h4")
        foodDesccripton.classList.add("paragraph-p")


        // Appending Child to Element 
        imageDiv.appendChild(Image)
        heading.appendChild(foodName)
        heading.appendChild(foodCategory)
        heading.appendChild(foodDesccripton)


        // let's selected container Div in Html
        let Hide = document.querySelector('.hide')

        // Appending child to parent container 
        Hide.appendChild(imageDiv);
        Hide.appendChild(heading);

        let createUl = document.createElement("ul")

        // Looping Ingredients
        for(let i=1; i<=20;i++){
            let mealIngredient = data.meals[0][`strIngredient${i}`];
            // console.log(mealIngredient);
            
            if(mealIngredient == null || mealIngredient == ""){
                // console.log("")
            }  else {
                let list = document.createElement("li")
                
                list.innerHTML = mealIngredient;

                createUl.classList.add("unorder-list");
                list.classList.add("lists");

                // Appending Elements to parent Divs
                heading.appendChild(createUl)
                createUl.appendChild(list);

            }
        }


    })
})