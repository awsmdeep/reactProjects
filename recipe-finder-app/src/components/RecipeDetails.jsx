import React, { useEffect, useState } from 'react' // Importing necessary hooks from React
import { useParams } from 'react-router-dom' // Importing useParams hook from react-router-dom to access route parameters

const RecipeDetails = ({ recipes }) => { // Functional component to display details of a specific recipe
  const { id } = useParams() // Extracting the id parameter from the route
  const [recipeDetails, setRecipeDetails] = useState({}) // Initializing state to hold recipe details

  useEffect(() => { // useEffect hook to update recipe details when id or recipes change
    const filterRecipe = recipes.find((item) => item.id === id) // Finding the recipe with the matching id
    setRecipeDetails(filterRecipe) // Setting the state with the found recipe
  }, [id, recipes]) // Dependency array to run the effect when id or recipes change

  return (
    recipeDetails && ( // Rendering recipe details if recipeDetails is not null or undefined
      <div className='recipe-details'> {/* Main container for recipe details */}
        <img src={recipeDetails.image} alt={recipeDetails.title} /> {/* Displaying recipe image */}
        <h1>{recipeDetails.title}</h1> {/* Displaying recipe title */}
        <p>{recipeDetails.description}</p> {/* Displaying recipe description */}
        <div>
          <h3>Steps:</h3> {/* Heading for steps */}
          <ul>
            {
              recipeDetails.steps && recipeDetails.steps.map((element) => { // Rendering steps if they exist
                return (
                  <li key={element}>{element}</li> // Displaying each step
                )
              })
            }
          </ul>
        </div>
        <div>
          <h3>Ingredients:</h3> {/* Heading for ingredients */}
          <ul>
            {
              recipeDetails.ingredients && recipeDetails.ingredients.map((element) => { // Rendering ingredients if they exist
                return (
                  <li key={element}>{element}</li> // Displaying each ingredient
                )
              })
            }
          </ul>
        </div>
        <h5>Cooking time: {recipeDetails.cookingTime}</h5> {/* Displaying cooking time */}
      </div>
    )
  )
}

export default RecipeDetails // Exporting RecipeDetails component as the default export
