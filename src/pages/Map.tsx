import React from 'react'

import { Context } from '../components/Store'


class Map extends React.Component {

  static contextType = Context

  render = () =>
    <div
      ref={this.context.MapRef}
      className='container'
    >
      <h1 className='h1 h1--xl font-orange'>
        Локации Перфотачки
      </h1>
      <div className='box p-4 mb-s mb-md-m'>
      <iframe
        src="https://www.google.com/maps/d/u/1/embed?mid=1Z0iivN38Gc3fuzw5Ww0KcgwVLXShIX4A"
        width="100%"
        height="480"
      />
      </div>
    </div>
}


export default Map