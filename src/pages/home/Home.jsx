import React from 'react'
import "./style.scss"
import Banner from './Banner/Banner'
import Trending from '../../hooks/Trending/Trending'
import Popular from './popular/Popular'
import TopRated from './topRated/TopRated'

const Home = () => {
  return (
    <div className='homepage'>
      <Banner />
      <Trending />
      <Popular />
      <TopRated />
    </div>
  )
}

export default Home
