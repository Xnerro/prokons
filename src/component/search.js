import React, {Component} from "react";
import { Button, Form } from "react-bootstrap";
import { FiSearch } from 'react-icons/fi'

class SearchField extends Component {
    render() { 
        return (
            <Form>
                <Form.Group className="d-flex">
                    <Form.Control type="search" placeholder="Search" />
                    <Button className="search">
                        <FiSearch />
                    </Button>
                </Form.Group>
            </Form>
        );
    }
}

export default SearchField;