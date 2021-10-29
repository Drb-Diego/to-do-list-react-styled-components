import React, { Component } from 'react'
import { InputStyle } from './inputStyle'

export default class Input extends Component {

  render() {
    const {inputValue, handleChangeInput} = this.props;

    return <InputStyle onChange={ handleChangeInput } value={ inputValue } />
  }
}
