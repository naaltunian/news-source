import React, { Component } from 'react';
import { Button, Container, Divider } from 'semantic-ui-react';
import axios from 'axios';

const words = {
  margin: '40px'
}

class CategoryFilter extends Component {
  render() {
    return (
      <div>
          <Container textAlign='center'><h2 style={words}>Select Category</h2></Container>
          <Container textAlign="center">
            <Button.Group>
              <Button onClick={this.props.handleChange} value='general'>General</Button>
              <Button onClick={this.props.handleChange} value='business'>Business</Button>
              <Button onClick={this.props.handleChange} value='entertainment'>Entertainment</Button>
              <Button onClick={this.props.handleChange} value='health'>Health</Button>
              <Button onClick={this.props.handleChange} value='science'>Science</Button>
              <Button onClick={this.props.handleChange} value='technology'>Technology</Button>
            </Button.Group>
          </Container>
      </div>
    );
  }
}

  export default CategoryFilter;
