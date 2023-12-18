import React from 'react'

const Search = () => {
  return (
    <section className="py-4 container">
        <div className='flex justify-center'>
            <div className='w-full md:w-1/2 lg:w-1/4 mx-0 mb-4'>
                <div className='bg-white rounded-lg shadow'>
                    <img src='' className='w-full' alt='searchCards'/>
                    <div className='p-4'>
                        <h5 className='text-xl font-bold'>card title</h5>
                        <p className='text-gray-600'>card desc</p>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Search