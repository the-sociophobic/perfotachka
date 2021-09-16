import React from 'react'

import { format } from 'date-fns'
import { ru } from 'date-fns/locale'

import Spekt from './Spekt'
import {
  Day as DayType,
  MappedShow
} from './Store/Types'


type Props = {
  day: DayType
}


const Day: React.FC<Props> = ({ day }) =>
    <div className='Day mb-xs'>
      <h1 className='w-100 h1 h1--xl font-orange'>
        {format(day.date, 'dd MMMM, iiii', { locale: ru })}
      </h1>
      <div className='Day__shows'>
        {day.shows
          .sort((a: MappedShow, b: MappedShow) =>
            (a.time?.replace('∞', '9') || '9').localeCompare(b.time?.replace('∞', '9') || '9'))
          .map((show: MappedShow) =>
            <Spekt spekt={show} />
        )}
      </div>
    </div>


export default Day