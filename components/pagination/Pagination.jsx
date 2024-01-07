import React from 'react'

const Pagination = () => {
  return (
    <div className="flex justify-between">
      <button
        className="w-[100px] border-none px-[20px]  bg-red-500 text-white cursor-pointer"
        // disabled={!hasPrev}
        // onClick={() => router.push(`?page=${page - 1}`)}
      >
        Previous
      </button>
      <button
      className='w-[100px] border-none p-[16px] bg-red-500 text-white cursor-pointer'
        // disabled={!hasNext}
        // onClick={() => router.push(`?page=${page + 1}`)}
      >
        Next
      </button>
    </div>
  )
}

export default Pagination
