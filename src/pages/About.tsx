import React from 'react'

import { Context } from '../components/Store'


class About extends React.Component {

  static contextType = Context

  render = () =>
      <div
        ref={this.context.aboutRef}
        className='container'
      >
        <h1 className='h1'>
          ЧТО ЭТО ?
        </h1>
      </div>
}


export default About