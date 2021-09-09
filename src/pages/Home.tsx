import React from 'react'

import { Context } from '../components/Store'
import Logo from '../style/img/logo.png'


class Home extends React.Component {

  static contextType = Context

  render = () => {
    return (
      <div className='Home'>
        <div className='container'>
          <div className='row'>
            <div className='mx-auto my-s col-12 col-md-8 col-lg-6'>
              <img
                src={Logo}
                className='w-100'
              />
            </div>
          </div>
        </div>
      </div>
    )
  }
}


export default Home