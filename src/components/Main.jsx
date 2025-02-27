import React from 'react'
import IngredentList from './IngredentList'
import Recipe from './Recipe'
import { getRecipeFromMistral } from '../ai'

function Main() {
  // State to store the list of ingredients added by the user
  const [ingredients, setIngredients] = React.useState([""])

  // State to store the generated recipe from AI
  const [recipe, setRecipe] = React.useState("")

  // State to manage loading status while fetching the recipe
  const [loading, setLoading] = React.useState(false)

// Function to fetch the recipe based on the ingredients list
  async function getRecipe() {
    setLoading(true) // Set loading to true while fetching data
    try {
      const fetchRecipe = await getRecipeFromMistral(ingredients) // Call AI API for recipe
      console.log(fetchRecipe) // Log response for debugging
      setRecipe(fetchRecipe) // Store received recipe in state
    } catch (error) {
      console.error(error) // Log errors in case of failure
    } finally {
      setLoading(false) // Set loading to false after completion
    }
  }

  // Map ingredients array into list items for rendering
  const ingredientsListItems = ingredients.map(ingredient => (
    <li key={ingredient}>{ingredient}</li>
  ))

    // Function to add a new ingredient from form input
  function addIngredient(formData) {
    const newIngredient = formData.get("ingredient") // Extract ingredient value from form
    setIngredients(prevIngredients => [...prevIngredients, newIngredient]) // Append new ingredient to list
  }

  return (
    <main>
      {/* Form to add new ingredients */}
      <form action={addIngredient} className="add-ingredient-form">
        <input
          type="text"
          placeholder="e.g. oregano"
          aria-label="Add ingredient"
          name="ingredient"
        />
        <button>Add ingredient</button>
      </form>


      <IngredentList ingredientsListItems={ingredientsListItems} getRecipe={getRecipe}/>

      {/* Display loader when fetching recipe */}
      {loading && <div className="loader">.</div>}

      {/* Display generated recipe once available */}
      {recipe && <Recipe recipe={recipe}/>}
    </main>
  )
}

export default Main