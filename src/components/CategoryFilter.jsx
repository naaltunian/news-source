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
                    value='null'
                    checked={this.state.value === null}
                    onChange={this.handleChange}
                />
                </Form.Field>
                <Form.Field>
                <Radio
                    label='Business'
                    name='radioGroup'
                    value='business'
                    checked={this.state.value === 'business'}
                    onChange={this.handleChange}
                />
                </Form.Field>
                <Form.Field>
                <Radio
                    label='Entertainment'
                    name='radioGroup'
                    value='entertainment'
                    checked={this.state.value === 'entertainment'}
                    onChange={this.handleChange}
                />
                </Form.Field>
                <Form.Field>
                <Radio
                    label='general'
                    name='radioGroup'
                    value='General'
                    checked={this.state.value === 'general'}
                    onChange={this.handleChange}
                />
                </Form.Field>
                <Form.Field>
                <Radio
                    label='Health'
                    name='radioGroup'
                    value='health'
                    checked={this.state.value === 'health'}
                    onChange={this.handleChange}
                />
                </Form.Field>
                <Form.Field>
                <Radio
                    label='Science'
                    name='radioGroup'
                    value='science'
                    checked={this.state.value === 'science'}
                    onChange={this.handleChange}
                />
                </Form.Field>
                <Form.Field>
                <Radio
                    label='Technology'
                    name='radioGroup'
                    value='technology'
                    checked={this.state.value === 'technology'}
                    onChange={this.handleChange}
                />
                </Form.Field>
            </Form>
        </div>
      );
    }
  }
  
  export default CategoryFilter;