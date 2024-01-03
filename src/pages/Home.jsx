import React from 'react'
import Landing from '../components/Landing';
import Highlight from '../components/ui/Highlights'
import Features from '../components/Features';
import Discount from '../components/Discount';
import Explore from '../components/Explore';


const Home = () => {
  return (
    <>
    <Landing/>
    <main>
      <Highlight/>
      <Features/>
      <Discount/>
      <Explore/>
    </main>
    </>
  )
}


export default Home; 