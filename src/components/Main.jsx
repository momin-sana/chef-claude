import React from 'react'
import IngredentList from './IngredentList'
import Recipe from './Recipe'
import { getRecipeFromMistral } from '../ai'

function Main() {
  // State to store the list of ingredients added by the user
  const [ingredients, setIngredients] = React.useState([])

  // State to store the generated recipe from AI
  const [recipe, setRecipe] = React.useState("")

  // State to manage loading status while fetching the recipe
  const [loading, setLoading] = React.useState(false)

  // Reference to the recipe section for scrolling
  const recipeSection = React.useRef(null)

  // Scroll to the recipe section when recipe is updated
  React.useEffect(() => {
    if (recipe !== "" && recipeSection.current !== null) {
      recipeSection.current.scrollIntoView({ behavior: "smooth" })
    }
  }, [recipe])

// Function to fetch the recipe based on the ingredients list
  async function getRecipe() {
    setLoading(true) // Set loading to true while fetching data
    try {
      const fetchRecipe = await getRecipeFromMistral(ingredients) // Call AI API for recipe
      // console.log(fetchRecipe) 
      setRecipe(fetchRecipe) // Store received recipe in state
    } catch (error) {
      console.error(error) // Log errors in case of failure
    } finally {
      setLoading(false) // Set loading to false after completion
    }
  }

  // Map ingredients array into list items for rendering
  const ingredientsListItems = ingredients
  .filter(ingredient => ingredient.trim() !== "") // Remove empty items
  .map((ingredient, index) => <li key={`${ingredient}-${index}`}>{ingredient}</li>)


    // Function to add a new ingredient from form input
  function addIngredient(formData) {
    const newIngredient = formData.get("ingredient")?.trim() // Extract ingredient value from form
    if (!newIngredient) return // Prevent empty values
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


      <IngredentList ingredientsListItems={ingredientsListItems} getRecipe={getRecipe} recipeSection={recipeSection}/>

      {/* Display loader when fetching recipe */}
      {loading && <div className="loader">.</div>}

      {/* Display generated recipe once available */}
      {recipe && <Recipe recipe={recipe}/>}
    </main>
  )
}

export default Main