import React, { useEffect, useState } from 'react' // Importing necessary hooks from React
import {BrowserRouter,Routes,Route} from 'react-router-dom' // Importing routing components from react-router-dom
import Home from './components/Home' // Importing Home component
import About from './components/About' // Importing About component
import RecipesDetails from './components/RecipeDetails' // Importing RecipeDetails component
import data from './recipes.json' // Importing data from a local JSON file
import Navbar from './components/Navbar' // Importing Navbar component
import './App.css' // Importing CSS for styling
import Footer from './components/Footer' // Importing Footer component

const App = () => {
  const [recipes, setRecipes] = useState([]) // Initializing state to hold recipe data

  useEffect(() => {
    setRecipes(data) // Setting the recipes state with data from the JSON file when the component mounts
  }, [])

  return (
    <BrowserRouter> {/* Setting up the router */}
      <Navbar/> {/* Rendering the Navbar component */}
      <Routes> {/* Defining the routes */}
        <Route path='/' element={<Home recipes={recipes} />} /> {/* Route for Home component with recipes data */}
        <Route path='/about' element={<About/>} /> {/* Route for About component */}
        <Route path='/recipes/:id' element={<RecipesDetails recipes={recipes} />} /> {/* Route for RecipeDetails component with dynamic id */}
      </Routes>
      <Footer/> {/* Rendering the Footer component */}
    </BrowserRouter>
  )
}

export default App // Exporting the App component as the default export
