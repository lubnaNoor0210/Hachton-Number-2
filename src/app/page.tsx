

import React from 'react'
import HomePage from '@/Components/HomePages/HomeHero'
import FoodCategory from '@/Components/HomePages/FoodCategory' 
import OurChefs from '@/Components/HomePages/OurChefs'
// import ChefsHero from '@/components/HomePages/ChefsHero'


const Home = () => {
  return (
    <div>
      <HomePage />
      <FoodCategory />
      <OurChefs />
      {/* <WhyChouseUs /> */}
      {/* <ChefGrid /> */}
    </div>
  )
}

export default Home