import PersonList from './PersonList.jsx'
import FetchExample from './FetchExample.jsx'
import './App.css'

function App() {
  return (
    <div className="App">
      {/* The list itself - loaded with axios */}
      <PersonList />
      {/* The same API loaded once more with the browser fetch() API */}
      <FetchExample />
    </div>
  )
}

export default App
