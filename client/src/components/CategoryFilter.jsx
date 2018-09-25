import React, { Component } from 'react';
import { Button, Container, Divider } from 'semantic-ui-react';
// import { ButtonToolbar, ToggleButtonGroup, ToggleButton } from 'react-bootstrap';

const words = {
  margin: '40px'
}

class CategoryFilter extends Component {

    state = {
      category: ""
    }

    handleClick = (e) => this.setState({ category: e.target.value });

    render() {
      return (
        <div>
            <Container textAlign='center'><h2 style={words}>Select Category</h2></Container>
            <Container textAlign="center">
              <Button.Group >
                <Button onClick={this.handleClick}>All</Button>
                <Button onClick={this.handleClick}>General</Button>
                <Button onClick={this.handleClick}>Business</Button>
                <Button onClick={this.handleClick}>Entertainment</Button>
                <Button onClick={this.handleClick}>Health</Button>
                <Button onClick={this.handleClick}>Science</Button>
                <Button onClick={this.handleClick}>Technology</Button>
              </Button.Group>
            </Container>



        </div>
      );
    }
  }

  export default CategoryFilter;

  // <ButtonToolbar >
  //   <ToggleButtonGroup justified type="radio" name="options">
  //     <ToggleButton value={1}>All</ToggleButton>
  //     <ToggleButton checked value={2}>Technology</ToggleButton>
  //     <ToggleButton value={3}>Politics</ToggleButton>
  //     <ToggleButton value={4}>All</ToggleButton>
  //     <ToggleButton value={5}>Technology</ToggleButton>
  //     <ToggleButton value={6}>Politics</ToggleButton>
  //     <ToggleButton value={7}>Politics</ToggleButton>
  //   </ToggleButtonGroup>
  // </ButtonToolbar>

  // <Form>
  //     <Form.Field>
  //     Current Category: <b>{this.state.value}</b>
  //     </Form.Field>
  //     <Form.Field>
  //     <Radio
  //         label='All'
  //         name='radioGroup'
  //         value='All'
  //         checked={this.state.value === 'All'}
  //         onChange={this.handleChange}
  //     />
  //     </Form.Field>
  //     <Form.Field>
  //     <Radio
  //         label='Business'
  //         name='radioGroup'
  //         value='Business'
  //         checked={this.state.value === 'Business'}
  //         onChange={this.handleChange}
  //     />
  //     </Form.Field>
  //     <Form.Field>
  //     <Radio
  //         label='Entertainment'
  //         name='radioGroup'
  //         value='Entertainment'
  //         checked={this.state.value === 'Entertainment'}
  //         onChange={this.handleChange}
  //     />
  //     </Form.Field>
  //     <Form.Field>
  //     <Radio
  //         label='General'
  //         name='radioGroup'
  //         value='General'
  //         checked={this.state.value === 'General'}
  //         onChange={this.handleChange}
  //     />
  //     </Form.Field>
  //     <Form.Field>
  //     <Radio
  //         label='Health'
  //         name='radioGroup'
  //         value='Health'
  //         checked={this.state.value === 'Health'}
  //         onChange={this.handleChange}
  //     />
  //     </Form.Field>
  //     <Form.Field>
  //     <Radio
  //         label='Science'
  //         name='radioGroup'
  //         value='Science'
  //         checked={this.state.value === 'Science'}
  //         onChange={this.handleChange}
  //     />
  //     </Form.Field>
  //     <Form.Field>
  //     <Radio
  //         label='Technology'
  //         name='radioGroup'
  //         value='Technology'
  //         checked={this.state.value === 'Technology'}
  //         onChange={this.handleChange}
  //     />
  //     </Form.Field>
  // </Form>
