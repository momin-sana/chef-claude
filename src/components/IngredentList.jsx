import React from 'react'

function IngredentList(props) {
    let ingredientsList = props.ingredientsListItems // List of ingredient elements

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
                    <button onClick={props.getRecipe}>Get a recipe</button>
                </div>}
            </section>}
        </div>
    )
}

export default IngredentList