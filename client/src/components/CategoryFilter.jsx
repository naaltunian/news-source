import React, { Component } from 'react';
import { Form, Radio } from 'semantic-ui-react'


class CategoryFilter extends Component {
    state = {}
    handleChange = (e, { value }) => this.setState({ value })

    render() {
      return (
        <div >
            <h2>Select Category:</h2>
            <Form>
                <Form.Field>
                Current Category: <b>{this.state.value}</b>
                </Form.Field>
                <Form.Field>
                <Radio
                    label='All'
                    name='radioGroup'
                    value='All'
                    checked={this.state.value === 'All'}
                    onChange={this.handleChange}
                />
                </Form.Field>
                <Form.Field>
                <Radio
                    label='Business'
                    name='radioGroup'
                    value='Business'
                    checked={this.state.value === 'Business'}
                    onChange={this.handleChange}
                />
                </Form.Field>
                <Form.Field>
                <Radio
                    label='Entertainment'
                    name='radioGroup'
                    value='Entertainment'
                    checked={this.state.value === 'Entertainment'}
                    onChange={this.handleChange}
                />
                </Form.Field>
                <Form.Field>
                <Radio
                    label='General'
                    name='radioGroup'
                    value='General'
                    checked={this.state.value === 'General'}
                    onChange={this.handleChange}
                />
                </Form.Field>
                <Form.Field>
                <Radio
                    label='Health'
                    name='radioGroup'
                    value='Health'
                    checked={this.state.value === 'Health'}
                    onChange={this.handleChange}
                />
                </Form.Field>
                <Form.Field>
                <Radio
                    label='Science'
                    name='radioGroup'
                    value='Science'
                    checked={this.state.value === 'Science'}
                    onChange={this.handleChange}
                />
                </Form.Field>
                <Form.Field>
                <Radio
                    label='Technology'
                    name='radioGroup'
                    value='Technology'
                    checked={this.state.value === 'Technology'}
                    onChange={this.handleChange}
                />
                </Form.Field>
            </Form>
        </div>
      );
    }
  }

  export default CategoryFilter;
