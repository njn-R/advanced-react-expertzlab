import React from 'react'
import { Container, Row, Col, Button, Card } from 'react-bootstrap'

const UseReducer = () => {
  const [value, setValue] = React.useState(0)
  const [color, setColor] = React.useState('white')

  return (
    <Container>
      <Row style={{ justifyContent: 'center' }}>
        <Col md={3}>
          <h1 style={{marginLeft:'20px'}}>UseReducer</h1>
          <Card
            style={{
              border: '1px solid black',
              padding: '10px',
              background: color,
              width: '300px',
              alignItems: 'center',
            }}
          >
            <h3>Value = {value}</h3>
            <Button
              style={{ margin: '5px' }}
              onClick={() => setValue(value + 1)}
            >
              Increment
            </Button>
            <Button
              style={{ margin: '5px' }}
              onClick={() => setValue(value - 1)}
            >
              Decrement
            </Button>
            <Button style={{ margin: '5px' }} onClick={() => setColor('grey')}>
              Set Background Color Grey
            </Button>
          </Card>
        </Col>
      </Row>
    </Container>
  )
}

export default UseReducer
