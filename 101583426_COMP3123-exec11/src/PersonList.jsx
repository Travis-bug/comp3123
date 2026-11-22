import { useEffect, useState } from 'react'
import axios from 'axios'
import { Button, Card, Col, Container, Row } from 'react-bootstrap'
import './App.css'

const API_URL = 'https://randomuser.me/api/?results=10'

// One label/value line inside a person card, e.g. "User Name:   bigladybug274"
function InfoRow({ label, children }) {
  return (
    <Row className="mb-3">
      <Col sm={4} className="person-label">
        {label}:
      </Col>
      <Col sm={8} className="person-value">
        {children}
      </Col>
    </Row>
  )
}

// Builds the one-line address out of the pieces randomuser.me sends back
function fullAddress(location) {
  const street = `${location.street.number} ${location.street.name}`
  return `${street}, ${location.city}, ${location.state}, ${location.country} - ${location.postcode}`
}

function PersonList() {
  // Same idea as the handout's `state = { persons: [] }`, written with a hook
  const [persons, setPersons] = useState([])

  // Same idea as the handout's componentDidMount() - it runs once, after the
  // component first appears on the page, and asks the API for 10 people.
  //
  // Handout version (class component), kept here for reference:
  //
  //   state = {
  //     persons: []
  //   }
  //
  //   componentDidMount() {
  //     axios.get(`https://randomuser.me/api/?results=10`)
  //       .then(res => {
  //         console.log(res.data)
  //         const persons = res.data.results
  //         this.setState({ persons })
  //       })
  //   }
  useEffect(() => {
    // ---- Way 1: axios (this is the one that fills the list) ----
    axios
      .get(API_URL)
      .then((res) => {
        console.log('axios response:', res.data)
        const results = res.data.results
        setPersons(results)
      })
      .catch((err) => console.log('axios error:', err))
  }, [])

  return (
    <Container fluid className="px-0">
      <h1 className="user-list-header">User List</h1>
      {persons.map((person) => (
        <Card className="person-card" key={person.login.uuid}>
          <Card.Header>
            {person.name.title} {person.name.first} {person.name.last} -{' '}
            {person.login.uuid}
          </Card.Header>
          <Card.Body>
            <Row>
              <Col md={3} className="text-center">
                <img
                  className="person-photo"
                  src={person.picture.large}
                  alt={`${person.name.first} ${person.name.last}`}
                />
                <Button variant="primary" size="sm" className="mt-3">
                  Details
                </Button>
              </Col>
              <Col md={9}>
                <InfoRow label="User Name">
                  <h5 className="mb-0">{person.login.username}</h5>
                </InfoRow>
                <InfoRow label="Gender">
                  {person.gender.toUpperCase()}
                </InfoRow>
                <InfoRow label="Time Zone Description">
                  {person.location.timezone.description}
                </InfoRow>
                <InfoRow label="Address">
                  {fullAddress(person.location)}
                </InfoRow>
                <InfoRow label="Email">{person.email}</InfoRow>
                <InfoRow label="Birth Date and Age">
                  {person.dob.date} ({person.dob.age})
                </InfoRow>
                <InfoRow label="Register Date">
                  {person.registered.date}
                </InfoRow>
                <InfoRow label="Phone#">{person.phone}</InfoRow>
                <InfoRow label="Cell#">{person.cell}</InfoRow>
              </Col>
            </Row>
          </Card.Body>
        </Card>
      ))}
    </Container>
  )
}

export default PersonList
