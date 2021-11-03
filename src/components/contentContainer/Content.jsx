import React, { Component } from "react";
import { ContentStyle } from "./contentStyle";

import AddTaskButton from "../addTaskButton/AddTaskButton";
import Input from "../input/Input";
import CardTask from "../cardTask/CardTask";

export default class Content extends Component {
  constructor() {
    super();

    this.state = {
      inputValue: "",
      tasks: [],
      isConclude: 'none',
      handleChangeInput: this.handleChangeInput,
      addNewTask: this.addNewTask,
      concludeTask: this.concludeTask
    };
  }

  handleChangeInput = ({ target: { value } }) => this.setState({ inputValue: value });

  addNewTask = () => {
    const { inputValue, tasks } = this.state;

    if(inputValue !== '') this.setState({ tasks: [...tasks, inputValue], inputValue: '' });
  };

  concludeTask = () => this.setState({ isConclude: 'line-through' })

  render() {
    const { inputValue } = this.state;

    return (
      <ContentStyle>
        <h1>Digite para adicionar uma nova tarefa</h1>
        <h2>Nova tarefa: {inputValue}</h2>
        <Input {...this.state} />
        <AddTaskButton {...this.state} />
        <CardTask { ... this.state } />
      </ContentStyle>
    );
  }
}
