import React from 'react'
import loading from '../loading.gif'

const Spinner = () => {
  return (
    <div className='text-center' >
      <img src={loading} alt="loading" width={70} />
    </div>
  )
}

export default Spinner
