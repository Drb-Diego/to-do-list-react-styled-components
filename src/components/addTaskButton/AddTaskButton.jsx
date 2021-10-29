import React, { Component } from 'react'
import { AddButton } from './addTaskButtonStyle'

export default class AddTaskButton extends Component {
  
  render() {
    const { addNewTask } = this.props;

    return <AddButton onClick={ addNewTask }>Adicionar nova tarefa</AddButton>
    
  }
}
