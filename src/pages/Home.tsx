import React from 'react'

import { Context } from '../components/Store'
import { Day as DayType } from '../components/Store/Types'
import Day from '../components/Day'


class Home extends React.Component {

  static contextType = Context

  render = () => {
    return (
      <div className='Home'>
        <div className='container'>
          <div className='Home__logo' />
          {this.context.days
            .map((day: DayType) => 
              <Day day={day} />
            )
          }

          {/* <h1 className='h1 my-m text-center'>
            Скоро мы добавим больше ивентов. Не переключайтесь 
          </h1> */}
        </div>
      </div>
    )
  }
}


export default Home