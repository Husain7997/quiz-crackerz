import React, { createContext } from 'react';
import { Col, Row } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';
import Start from '../Start/Start';
import './Item.css'
export const ChartContext = createContext('undefinde');

const Item = ({ quiz }) => {
    const { id, name, total, logo } = quiz;
    return (
        <div >
            <ChartContext.Provider value={quiz}>

            </ChartContext.Provider>
            <Row >
                <Col md={3}>
                    <Card className='item'>
                        <Card.Img variant="top" src={logo} />
                        <Card.Body>
                            <Card.Title>{name}</Card.Title>
                            <Card.Text>
                                Total Q: {total}
                            </Card.Text>
                            <Link to={`/quiz/${id}`}><Button variant="primary">Start Quiz</Button></Link>

                        </Card.Body>
                    </Card>
                </Col>
            </Row>
            <Start></Start>
        </div >
    );
};

export default Item;