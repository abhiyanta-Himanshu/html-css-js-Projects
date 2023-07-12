//Spoonacular api 
//  email ----boynishant123@gmail.com
//  password-----12345678

const API_KEY = "3c7683deed74492db9f33c10821fe545";

const recipesListEl = document.getElementById("recipe-list");
//console.log(recipesListEl.innerHTML);
function displayRecipes(recipes){
    recipesListEl.innerHTML=" ";
    console.log(recipesListEl.innerHTML);
    recipes.forEach(recipes => {

        const recipeItemEl =document.createElement("li");

        recipeItemEl.classList.add("recipe-item");


        const recipeImageEl=document.createElement("img");
        recipeImageEl.src=recipes.image;
        recipeImageEl.alt="recipe-image";


        recipeTitle=document.createElement("h3");
        recipeTitle.innerHTML=recipes.title;

        recipeIngredientsEl = document.createElement("p");
        recipeIngredientsEl.innerHTML=`<strong>
        Ingredients:</strong> ${recipes.extendedIngredients.map((ingredient)=> ingredient.original).join(",")}`;

        recipeAnchor=document.createElement("a");
        recipeAnchor.href=recipes.sourceUrl;
        recipeAnchor.innerText="View Recipe";
        recipeAnchor.target="_blank"

        recipeInstruction = document.createElement("p");
        recipeInstruction.innerHTML=`<strong> Instruction:</strong>${recipes.instructions}`

        recipeItemEl.appendChild(recipeImageEl);
        recipeItemEl.appendChild(recipeTitle);
        recipeItemEl.appendChild(recipeIngredientsEl);
        recipeItemEl.appendChild(recipeInstruction);
        recipeItemEl.appendChild(recipeAnchor);

        recipesListEl.appendChild(recipeItemEl);
    });
}

async function getRecipes(){
    // const resonse = await fetch(`https://api.spoonacular.com/recipes/complexSearch?diet=vegetarian&number=10&apiKey=${API_KEY}`);

    const resonse = await fetch(`https://api.spoonacular.com/recipes/random?number=10&apiKey=${API_KEY}`);

    const data = await resonse.json();
    
    console.log(data);
    
    return data.recipes;
    // return data.results;
}

async function init(){
    const recipes= await getRecipes();
    console.log(recipes);
    displayRecipes(recipes);
}

init();