import React, { Component } from 'react';
import { AddTodoForm } from '../components';

export default class AddTodoContainer extends Component {
  constructor (props) {
    super(props);

    this.state = { newItem: {}, showAlert: false, successSaved: false, saveInProgress: false };
    this.submit = this.submit.bind(this);
    this.setItem = this.setItem.bind(this);
  }
  submit (e) {
    e.preventDefault();
    this.setState({ saveInProgress: true });
    const newItem = this.state.newItem;
    fetch('http://localhost:8080/api/todo', {
      headers: new Headers({
        'Content-Type': 'application/json'
      }),
      method: 'POST',
      body: JSON.stringify(newItem)
    })
    .then(response => response.json())
    .then(data => {
      this.setState({ saveInProgress: false });
      if ( data.elastic.created === undefined ) {
        this.setState({ successSaved: false });
      } else if (data.elastic.created === true) {
        this.setState({ successSaved: true });
      } else {
        this.setState({ successSaved: false });
      }
      this.setState({ showAlert: true });
    });
  }

  setItem (event) {
    let shareTodo;
    if ( document.getElementById('optionsRadios1').checked === true ) {
      shareTodo = 'shareOff';
    } else {
      shareTodo = 'shareOn';
    }
    const newItem = {
      topic: document.getElementById('topic').value,
      tags: document.getElementById('tags').value,
      category: document.getElementById('category').value,
      shareTodo: shareTodo,
      notification: document.getElementById('notification').checked,
      description: document.getElementById('description').value
    };
    this.setState({ newItem });
  }
  render () {
    return <AddTodoForm
            submit={this.submit}
            setItem={this.setItem}
            showAlert={this.state.showAlert}
            saveInProgress={this.state.saveInProgress}
            successSaved={this.state.successSaved}
          />
  }
}
