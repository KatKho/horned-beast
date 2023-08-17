import React from 'react';
import Form from 'react-bootstrap/Form';

class Filter extends React.Component {
  render() {
    const { handleChange } = this.props;

    return (
      <Form>
        <Form.Group controlId="filterForm">
          <Form.Label>Filter by Horns:</Form.Label>
          <Form.Control as="select" onChange={handleChange}>
            <option value="all">All</option>
            <option value="1">1 horn</option>
            <option value="2">2 horns</option>
            <option value="3">3 horns</option>
            <option value="100">100 horns</option>
          </Form.Control>
        </Form.Group>
      </Form>
    );
  }
}

export default Filter;
