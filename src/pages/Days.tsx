import React from 'react'

import { Context } from '../components/Store'
import { Day as DayType } from '../components/Store/Types'
import Day from '../components/Day'


class Days extends React.Component {

  static contextType = Context

  render = () =>
    <div className='Days'>
      {/* <div className='Days__trigger'>
        <div
          className={`Days__trigger__item
          ${this.context.filteringIndex !== 0 && 'Days__trigger__item--active'}`}
          onClick={() => {
            this.context.setState({filteringIndex: this.context.todaysIndex})
            setTimeout(() => this.context.days[this.context.todaysIndex]?.ref?.current?.scrollIntoView?.(), 20)
          }}
        >
          ТЕКУЩИЕ
        </div>
          <div
            className={`Days__trigger__item
              ${this.context.filteringIndex === 0 && 'Days__trigger__item--active'}`}
            onClick={() => {
              this.context.setState({filteringIndex: 0})
              setTimeout(() => this.context.days[0]?.ref?.current?.scrollIntoView?.(), 20)
            }}
          >
            ВСЕ
          </div>
      </div> */}

      <div className='container pt-s'>
        {this.context.days
          .slice(this.context.filteringIndex)
          .map((day: DayType) => 
            <Day
              key={day.date.getTime()}
              day={day}
            />
        )}
      </div>
    </div>
}


export default Days