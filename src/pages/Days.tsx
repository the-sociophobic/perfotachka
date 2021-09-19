import React from 'react'

import { Context } from '../components/Store'
import { Day as DayType } from '../components/Store/Types'
import Day from '../components/Day'


class Days extends React.Component {

  static contextType = Context

  render = () =>
      <div className='container'>
        {this.context.days
          .slice(this.context.filteringIndex)
          .map((day: DayType) => 
            <Day day={day} />
        )}
      </div>
}


export default Days