import React from 'react'
import Pagination from '../pagination/Pagination'
import Card from '../card/Card'

const CardList = () => {
  return (
    <div className=' mt-[20px]'>
      <h1 className='text-3xl font-semibold'>Recent Posts</h1>
      <div className="">
        <Card/>
        <Card/>
        <Card/>
        <Card/>
      </div>
      <Pagination/>
    </div>
  )
}

export default CardList
