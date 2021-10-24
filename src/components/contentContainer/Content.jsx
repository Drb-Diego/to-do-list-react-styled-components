import React, { Component } from "react";
import { ContentStyle } from "./contentStyle";

import AddTaskButton from "../addTaskButton/AddTaskButton";
import Input from "../input/Input";


export default class Content extends Component {

  constructor() {
    super();

    this.state = {
      inputValue: '',
      handleChangeInput: this.handleChangeInput,
    }
  }

  handleChangeInput = ({ target: { value } }) => this.setState({ inputValue: value });


  render() {
    const { inputValue } = this.state;
    return (
      <ContentStyle>
        <h1>Nova Tarefa: {inputValue}</h1>
        <Input {...this.state} />
        <AddTaskButton />
      </ContentStyle>
    );
  }
}
