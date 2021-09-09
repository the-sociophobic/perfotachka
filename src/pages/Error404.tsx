import React from 'react'

import { Context } from '../components/Store'


class Home extends React.Component {

  static contextType = Context

  render = () =>
      <div className='w-100 h-100 d-flex flex-row align-items-center justify-content-between'>
        <h1 className='h1'>
          Еррор 404
        </h1>
      </div>
}


export default Home