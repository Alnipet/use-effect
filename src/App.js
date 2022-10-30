import './App.css'
import {List} from './components/List'
import {useState} from 'react'
import {Details} from './components/Details'


function App() {
  const [isId, setIsId] = useState(null)

  const handleGetId = (id) => {
    setIsId(id)
  }

  return (
    <div className="App">
      <List handleGetId={handleGetId} />
      {isId && <Details id={isId} />}
    </div>
  )
}

export default App
