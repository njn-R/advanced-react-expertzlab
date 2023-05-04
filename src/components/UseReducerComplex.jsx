import React from 'react'
import { Container, Row, Col, Button, Card } from 'react-bootstrap'
import usageReducer from '../reducers/UsageReducers'

const UseReducerComplex = () => {
  const [state, dispatch] = React.useReducer(usageReducer, {
    value: 0,
    color: 'white',
  })
  const [color, setColor] = React.useState('white')

  return (
    <Container>
      <Row style={{ justifyContent: 'center' }}>
        <Col md={3}>
          <h1 style={{ marginLeft: '20px' }}>UseReducer</h1>
          <Card
            style={{
              border: '1px solid black',
              padding: '10px',
              background: state.color,
              width: '300px',
              alignItems: 'center',
            }}
          >
            {/* Button to increment */}
            <Button
              style={{ margin: '5px 5px' }}
              onClick={() => dispatch({ type: 'change-value', payload: 1 })}
            >
              Increment ▲
            </Button>

            <h3>Value = {state.value}</h3>

            {/* Button to decrement */}
            <Button
              style={{ margin: '5px 5px' }}
              onClick={() => dispatch({ type: 'change-value', payload: -1 })}
            >
              Decrement ▼
            </Button>

            {/* Button to change background color */}
            <h3 style={{ marginTop: '20px' }}>Set Background Color</h3>
            <input
              className='form-input'
              onChange={(e) => setColor(e.target.value)}
            ></input>
            <Button
              className='btn-secondary'
              style={{ margin: '5px' }}
              onClick={() => dispatch({ type: 'change-color', payload: color })}
            >
              Change
            </Button>
          </Card>
        </Col>
      </Row>
    </Container>
  )
}

export default UseReducerComplex
