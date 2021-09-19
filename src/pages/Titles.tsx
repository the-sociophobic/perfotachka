import React from 'react'

import { Context } from '../components/Store'


class Titles extends React.Component {

  static contextType = Context

  render = () =>
    <div
      ref={this.context.titlesRef}
      className='container'
    >
      <h1 className='h1'>
          МЫ
        </h1>
      </div>
}


export default Titles