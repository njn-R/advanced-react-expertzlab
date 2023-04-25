import React, { useState, useEffect } from "react"
const url = "https://jsonplaceholder.typicode.com/users"
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';

const UseEffectFetch = () => {

    const [users, setUsers] = useState([])

    useEffect(() => {
      getUsers()
    }, [])

    const getUsers = async () => {
        const response = await fetch(url)
        const data = await response.json()
        setUsers(data)
    }

  return (
    <>
          <h1>Fetch</h1>
          <div style={{display:"flex", flexWrap:"wrap", justifyContent:"space-around", width:"100%"}}>
              {users.map((user) => {
                  const {city, street, suite, zipcode} = user.address
                  return (
                    <Card key={user.id} style={{ width: "18rem" }}>
                      <Card.Body>
                        <Card.Title>{user.name}</Card.Title>
                        <Card.Text>
                            {street} {suite} {city} {zipcode}
                        </Card.Text>
                      </Card.Body>
                      <ListGroup className="list-group-flush">
                        <ListGroup.Item>{user.email}</ListGroup.Item>
                        <ListGroup.Item>{user.phone}</ListGroup.Item>
                        <ListGroup.Item>{user.website}</ListGroup.Item>
                      </ListGroup>
                      <Card.Body>
                        <Card.Link href="#">Link 1</Card.Link>
                        <Card.Link href="#">Link 2</Card.Link>
                      </Card.Body>
                    </Card>
                  );
              })}
          </div>

    </>
  )
}

export default UseEffectFetch
