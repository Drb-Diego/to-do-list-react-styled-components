import{ Component } from 'react'

import { CardStyled, OrderedList } from './cardTaskStyle'

export default class CardTask extends Component {
  render() {
    const { task } = this.props;
    return (
      <CardStyled>
        <OrderedList>
          <li>{task}</li>
        </OrderedList>
      </CardStyled>
    )
  }
}
