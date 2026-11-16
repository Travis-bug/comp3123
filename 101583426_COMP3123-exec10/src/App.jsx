import { useState } from 'react'
import DataEntryForm from './DataEntryForm.jsx'
import SubmittedInfo from './SubmittedInfo.jsx'
import './App.css'

// The empty form. Each key matches the "name" of an input in DataEntryForm.
const emptyForm = {
  email: '',
  fullName: '',
  address: '',
  address2: '',
  city: '',
  province: '',
  postalCode: '',
  agree: false,
}

function App() {
  // What the user is typing right now
  const [formData, setFormData] = useState(emptyForm)
  // A copy of the form, saved when Submit is pressed (null = nothing submitted yet)
  const [submitted, setSubmitted] = useState(null)

  // Runs on every key press or selection and updates only the field that changed
  function handleChange(event) {
    const { name, value, type, checked } = event.target
    setFormData({ ...formData, [name]: type === 'checkbox' ? checked : value })
  }

  // Runs when Submit is pressed
  function handleSubmit(event) {
    event.preventDefault() // stop the page from reloading
    setSubmitted(formData)
  }

  return (
    <div className="App">
      <DataEntryForm
        formData={formData}
        onChange={handleChange}
        onSubmit={handleSubmit}
      />
      {submitted && <SubmittedInfo data={submitted} />}
    </div>
  )
}

export default App
