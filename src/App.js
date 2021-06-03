import React from 'react'
import { FaAngleDoubleRight } from 'react-icons/fa'
import Tabs from './Tabs'
import Tab from './Tabs'
import Title from './Title'

//const url = 'https://course-api.com/react-tabs-project'

const App = () => {
  //console.log(process.env.REACT_APP_URL)
  const [isError, setIsError] = React.useState(false)
  const [isLoading, setIsLoading] = React.useState(true)
  const [tabs, setTabs] = React.useState([])

  const fetchTabs = async () => {
    setIsLoading(true)
    try {
      const response = await fetch(process.env.REACT_APP_URL)

      if (response.status === 200) {
        const data = await response.json()
        setTabs(data)
      } else {
        setIsError(true)
      }
      setIsLoading(false)
    } catch (error) {
      setIsLoading(false)
      setIsError(true)
    }
  }

  React.useEffect(() => {
    fetchTabs()
  }, [])
  

  return (
    <div className='section'>
      {isError ? (
       <Title content='Is an error'/>
      ): isLoading ? (
       <Title content='Loading'/>
      ):(
       <Tabs tabs={tabs} fetchTabs={fetchTabs}/>
      )}
    </div>
  )
}

export default App
