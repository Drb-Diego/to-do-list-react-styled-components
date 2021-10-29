import{ Component } from 'react'

import { CardStyled, OrderedList } from './cardTaskStyle'

export default class CardTask extends Component {
  render() {
    const { tasks } = this.props;
    return (
      <CardStyled>
        <OrderedList>
          {tasks.map(task => <li>{task}</li>)}
        </OrderedList>
      </CardStyled>
    )
  }
}
