import React from 'react'
import SelectCountry from './SelectCountry'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

function TopSection() {
    return (
        <>
        <div className='top-section'>
            <Row>
                <Col sm={2} className="p-4">
                <SelectCountry />
                </Col>
                <Col sm={7}>
                    <h2 className='text-left pt-3'>Order Groceries for delivery or pickup today</h2>
                </Col>
                <Col sm={3}></Col>
            </Row>
        </div>
        
        </>
    )
}

export default TopSection