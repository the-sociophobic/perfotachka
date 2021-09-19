import React from 'react'

import { Context } from '../components/Store'
import About from './About'
import QandA from './QandA'
import Days from './Days'
import Titles from './Titles'


class Home extends React.Component {

  static contextType = Context

  render = () => {

    return (
      <div
        ref={this.context.homeRef}
        className='Home'
      >
        <div className='container'>
          <div
            ref={this.context?.homeRef}
            className='Home__logo'
          />
        </div>
        <About />
        <QandA />
        <Days />
        <Titles />
      </div>
    )
  }
}


export default Home