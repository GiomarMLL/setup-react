import React from 'react'
import Tab from './Tab'
import Title from './Title'

const Tabs = ({ tabs }) => {
  const [menuCompany, setMenuCompany] = React.useState(
    tabs.filter(tab => tab.company === 'TOMMY')
  )
  const filter = company => {
    setMenuCompany(tabs.filter(tab => tab.company === company))
  }

  return (
    <>
      <Title content='Experiencie' />
      <div className='jobs-center'>
        <div className='btn-container'>
          {tabs.map(tab => (
            <button className='job-btn' onClick={() => filter(tab.company)}>
              {tab.company}
            </button>
          ))}
        </div>

        <div>
          {menuCompany.map(tab => (
            <Tab key={tab.id} {...tab} />
          ))}
        </div>
      </div>
    </>
  )
}

export default Tabs
