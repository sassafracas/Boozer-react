import React, { Component } from 'react';
import { v4 } from "uuid";
import IngredientInputList from "./IngredientInputList"
import { Form, Input, TextArea, Button, Segment } from 'semantic-ui-react'

class CocktailForm extends Component {

  state = {
    name: "",
    description: "",
    instructions: "",
    proportions: [],
  }

  addIngredientInput = () => {
    console.log("submit");
  }

  removeIngredientInput = () => {
    console.log("removeIngredient");
  }

  handleSubmit = () => {
    console.log('%c SUBMITTED', 'color: blue', this.state);
  }

  handleInputChange = (event) => {
    let proportions = [...this.state.proportions]
    let formName = event.target.name
    let formValue = event.target.value

    proportions[formName] = formValue
    console.log('handleInputChange', this.state.proportions);

    this.setState({
      // proportionsInputs,
      proportions,
    }, ()=> console.log("handle input change ", this.state))
  }

  handleChange = (event) => {
    this.setState({
      [event.target.name] : event.target.value
    }, ()=> console.log("form state ", this.state))
  }



  render () {
    return (
      <Segment basic floated="right" clearing>
        <h2>Create A New Cocktail</h2>
        <Form onSubmit={this.handleSubmit}>
          <Form.Field
            label="Name"
            control={Input}
            value={this.state.name}
            name="name"
            onChange={this.handleChange}
          />
          <Form.Field
            label="Description"
            control={TextArea}
            value={this.state.description}
            name="description"
            onChange={this.handleChange}
          />
          <Form.Field
            label="Instructions"
            control={TextArea}
            value={this.state.instructions}
            name="instructions"
            onChange={this.handleChange}
          />
          <label>
            Ingredients
            <br></br>
            <IngredientInputList
              proportions={this.state.proportions}
              handleInputChange={this.handleInputChange}
              addIngredientInput={this.addIngredientInput}
              removeIngredientInput={this.removeIngredientInput}/>
          </label>
          <br></br>
          <Button>Create Cocktail</Button>
        </Form>
      </Segment>
    )
  }
}

export default CocktailForm;
