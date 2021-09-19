import React from 'react'

import { Context } from '../components/Store'


class QandA extends React.Component {

  static contextType = Context

  render = () =>
      <div
        ref={this.context.QandARef}
        className='container'
      >
        <h1 className='h1'>
          Вопрос Ответ
        </h1>
      </div>
}


export default QandA