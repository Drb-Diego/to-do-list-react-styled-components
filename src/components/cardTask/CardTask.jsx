import { Component } from "react";

import { CardStyled, OrderedList, List } from "./cardTaskStyle";

import { FaCheck, FaEdit, FaTrash } from 'react-icons/fa'

export default class CardTask extends Component {
  render() {
    const { tasks, concludeTask, isConclude, deleteTask } = this.props;

    return (
      <CardStyled>
        <OrderedList>
          {tasks.map((task, index) => (
            <List key={index} textDecoration={ isConclude }>
              {task}
              <div>
                <FaCheck onClick={ concludeTask } />
                <FaEdit />
                <FaTrash onClick={() => deleteTask(task) } />
              </div>
            </List>
          ))}
        </OrderedList>
      </CardStyled>
    );
  }
}