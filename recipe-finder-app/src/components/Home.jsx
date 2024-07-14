import React from 'react'
import HomeSection from './subcomponents/HeroSection'
import Recipes from './subcomponents/Recipes'

const Home = ({recipes}) => {
  return (
    <>
    <HomeSection/>
    <Recipes recipes={recipes}/>
    </>
  )
}

export default Home