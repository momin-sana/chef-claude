import React from 'react'

function IngredentList({ recipeSection, ingredientsListItems, getRecipe }) {
    let ingredientsList = ingredientsListItems // List of ingredient elements
    console.log("Rendering IngredentList with ingredients:", ingredientsListItems); // Debugging

    return (
        <div>
            {/* Only display the ingredient list if there are ingredients to display */}
            {ingredientsList.length > 0 && <section>
                <h2 className="ingredient-heading">Ingredients on hand:</h2>

                {/* Display list of ingredients dynamically */}
                <ul className="ingredients-list" aria-live="polite">{ingredientsList}</ul>

                {/* Show recipe generation option if at least 5 ingredients are added */}
                {ingredientsList.length >= 5 && <div className="get-recipe-container">
                    <div>
                        <h3>Ready for a recipe?</h3>
                        <p>Generate a recipe from your list of ingredients.</p>
                    </div>

                    {/* Button to fetch recipe based on ingredients */}
                    <button ref={recipeSection} onClick={getRecipe}>Get a recipe</button>
                </div>}
            </section>}
        </div>
    )
}

export default IngredentList