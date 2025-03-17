import React from 'react'
import style from './Home.module.css'

import CarList from '@components/CarList/CarList'
import FilterBar from '@components/FilterBar/FilterBar'

const Home = () => {
  return (
    <div>
      <h1 className={style.title}>Descubri todos los modelos</h1>
      <FilterBar/> 
      <CarList />
    </div>
  )
}

export default Home