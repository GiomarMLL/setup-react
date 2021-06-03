import React from 'react'

const Title = ({content}) => {
  return (
    <div className='title'>
      <h2>{content}</h2>
      <div className='underline'></div>
    </div>
  )
}

export default Title
