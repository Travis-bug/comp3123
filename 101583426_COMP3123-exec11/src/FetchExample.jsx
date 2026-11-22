import { useEffect, useState } from 'react'
import './App.css'

const API_URL = 'https://randomuser.me/api/?results=10'

// ===========================================================================
// Step 4 of the lab says: "Try to get data using JS fetch or axios API".
// PersonList.jsx does it with AXIOS. This small component does the SAME
// request with the browser's built-in FETCH API, so both ways are shown.
//
// The two differences to notice:
//   axios  -> res.data           is already a JavaScript object
//   fetch  -> res.json()         has to be called first, and it is a promise
// ===========================================================================
function FetchExample() {
  const [count, setCount] = useState(null)
  const [firstName, setFirstName] = useState('')

  useEffect(() => {
    // ---- Way 2: the browser fetch() API ----
    fetch(API_URL)
      .then((res) => res.json()) // fetch does not parse the JSON for you
      .then((data) => {
        console.log('fetch response:', data)
        const people = data.results
        setCount(people.length)
        setFirstName(`${people[0].name.first} ${people[0].name.last}`)
      })
      .catch((err) => console.log('fetch error:', err))
  }, [])

  if (count === null) {
    return null
  }

  return (
    <p className="fetch-note">
      Same API read a second time with the browser fetch() API: {count} people
      loaded, first one is {firstName}.
    </p>
  )
}

export default FetchExample
