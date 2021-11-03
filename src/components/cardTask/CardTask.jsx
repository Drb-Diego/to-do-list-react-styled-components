import { Component } from "react";

import { CardStyled, OrderedList, List } from "./cardTaskStyle";

import {FaCheck, FaEdit} from 'react-icons/fa'

export default class CardTask extends Component {
  render() {
    const { tasks, concludeTask } = this.props;

    return (
      <CardStyled>
        <OrderedList>
          {tasks.map((task, index) => (
            <List key={index}>
              {task}
              <div>
                <FaCheck onClick={ concludeTask } />
                <FaEdit />
              </div>
            </List>
          ))}
        </OrderedList>
      </CardStyled>
    );
  }
}
