import React from 'react';
import { Card, ListGroup } from 'react-bootstrap';


export default function PokemonCard({pokemon}) {
  const {name, stats, src, types} = pokemon;

  return (
    <div className='d-flex justify-content-center mt-2'>
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={src} />
      <Card.Body>
        <Card.Title>{name}</Card.Title>
        <ul className='text-left'>
        <Card.Text>
          {stats?.map((stat, i)=>(
            <li style={{listStyleType:"none", textAlign:"left"}} key={i}>
                {stat.name}: {stat.base}
            </li>
          ))}
        </Card.Text>
        </ul>
      </Card.Body>
      <ListGroup className="list-group-flush text-secondary">
        <ListGroup.Item>{types}</ListGroup.Item>
        {/* <ListGroup.Item>Dapibus ac facilisis in</ListGroup.Item>
        <ListGroup.Item>Vestibulum at eros</ListGroup.Item> */}
      </ListGroup>

    </Card>
    </div>
  )
}
