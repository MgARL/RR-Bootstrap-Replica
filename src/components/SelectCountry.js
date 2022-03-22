import React from 'react'
import Dropdown from 'react-bootstrap/Dropdown'
import USFlag from '../united-states.png'

function SelectCountry() {
    return (
        <>
            <Dropdown>
                <Dropdown.Toggle variant="success" id="dropdown-basic">
                    <img src={USFlag} alt="US Flag" />
                </Dropdown.Toggle>

                <Dropdown.Menu>
                    <Dropdown.Item href="#/action-1">US</Dropdown.Item>
                    <Dropdown.Item href="#/action-2">CA</Dropdown.Item>
                </Dropdown.Menu>
            </Dropdown>
        </>
    )
}

export default SelectCountry