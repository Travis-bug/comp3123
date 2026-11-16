const provinces = [
  'Alberta',
  'British Columbia',
  'Manitoba',
  'New Brunswick',
  'Newfoundland and Labrador',
  'Nova Scotia',
  'Ontario',
  'Prince Edward Island',
  'Quebec',
  'Saskatchewan',
]

// The data entry form. It gets the values and the two handlers from App through props.
function DataEntryForm({ formData, onChange, onSubmit }) {
  return (
    <form className="form-box" onSubmit={onSubmit}>
      <h1>Data Entry Form</h1>

      <div className="row">
        <div className="field">
          <label htmlFor="email">Email</label>
          <input id="email" name="email" type="email" placeholder="Enter email"
            value={formData.email} onChange={onChange} />
        </div>
        <div className="field">
          <label htmlFor="fullName">Name</label>
          <input id="fullName" name="fullName" type="text" placeholder="Full Name"
            value={formData.fullName} onChange={onChange} />
        </div>
      </div>

      <div className="field">
        <label htmlFor="address">Address</label>
        <input id="address" name="address" type="text" placeholder="1234 Main St"
          value={formData.address} onChange={onChange} />
      </div>

      <div className="field">
        <label htmlFor="address2">Address 2</label>
        <input id="address2" name="address2" type="text" placeholder="Apartment, studio, or floor"
          value={formData.address2} onChange={onChange} />
      </div>

      <div className="row">
        <div className="field">
          <label htmlFor="city">City</label>
          <input id="city" name="city" type="text"
            value={formData.city} onChange={onChange} />
        </div>
        <div className="field">
          <label htmlFor="province">Province</label>
          <select id="province" name="province" value={formData.province} onChange={onChange}>
            <option value="">Choose...</option>
            {provinces.map((p) => (
              <option key={p} value={p}>{p}</option>
            ))}
          </select>
        </div>
        <div className="field">
          <label htmlFor="postalCode">Postal Code</label>
          <input id="postalCode" name="postalCode" type="text"
            value={formData.postalCode} onChange={onChange} />
        </div>
      </div>

      <label className="check">
        <input name="agree" type="checkbox" checked={formData.agree} onChange={onChange} />
        Agree Terms &amp; Condition?
      </label>

      <button type="submit">Submit</button>
    </form>
  )
}

export default DataEntryForm
