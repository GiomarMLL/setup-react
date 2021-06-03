import React from 'react'
import { FaAngleDoubleRight } from 'react-icons/fa'

const Tab = ({ id, title, dates, company, duties }) => {
  return (
    <article>
      <div className='job-info'>
        <h3>{title}</h3>
        <h4>{company}</h4>
      </div>
      <p className='job-date'>{dates}</p>
      {duties.map(dutie => (
        <p className='job-desc'>
          <FaAngleDoubleRight className='job-icon' />
          {dutie}
        </p>
      ))}
    </article>
  )
}

export default Tab
