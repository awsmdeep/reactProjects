import React from 'react' // Importing React
import { Link } from 'react-router-dom' // Importing Link component from react-router-dom for navigation

const Recipes = ({ recipes }) => { // Functional component to display recipes
  const options = [
    "Recipes & Menus",
    "Custom Meal Plan",
    "Cooking Tips & Tricks",
    "Share Your Recipe",
    "Create Grocery Store"
  ] // Array of options for buttons

  return (
    <article className='recipes'> {/* Main article container */}
      <section> {/* Section for option buttons */}
        {
          options.map(element => {
            return (
              <button key={element}>{element}</button> // Rendering buttons for each option
            )
          })
        }
      </section>
      <section className='container'> {/* Section for the first set of recipe cards */}
        {
          recipes.slice(0, 8).map(element => {
            return (
              <Card key={element.id} element={element}/> // Rendering the first 8 recipe cards
            )
          })
        }
      </section>
      <h3>Recommended Recipes</h3> {/* Heading for recommended recipes */}
      <section className='container'> {/* Section for the remaining recipe cards */}
        {
          recipes.slice(8).map(element => {
            return (
              <Card key={element.id} element={element}/> // Rendering the remaining recipe cards
            )
          })
        }
      </section>
    </article>
  )
}

export default Recipes // Exporting Recipes component as the default export

const Card = ({ element }) => { // Functional component to display individual recipe card
  return (
    <Link to={`/recipes/${element.id}`} className='card'> {/* Link to the recipe details page */}
      <img src={element.image} alt={element.title} /> {/* Displaying recipe image */}
      <h4>{element.title}</h4> {/* Displaying recipe title */}
      <h4>{element.cookingTime}</h4> {/* Displaying cooking time */}
    </Link>
  )
}
