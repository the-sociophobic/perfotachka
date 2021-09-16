import React from 'react'

import Logo from '../style/img/logo.png'


const Background: React.FC<{}> = ({}) =>
  <div className='Background'>
    <div className='container h-100'>
      <div className='row h-100'>
        <div className='col-12 col-md-8 col-lg-6 h-100 mx-auto'>
          <img src={Logo} />
        </div>
      </div>
    </div>
  </div>


export default Background