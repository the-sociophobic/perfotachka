import { omit } from 'lodash'
import {
  eachDayOfInterval,
  isSameDay
} from 'date-fns'

import {
  Day,
  Show,
  MappedShow,
  SpektRaw,
} from './index'
import parsePersons from './parsePersons'
import transliterate from '../../../utils/transliterate'
import React from 'react'


const numberWithThero = (number: string) =>
  number.length === 1 ? `0${number}` : number

const parseDate = (date: string) =>
  new Date(`2021-${date.includes('сент') ? '09' : '10'}-${numberWithThero(date.split(' ')[0])}`)

const parseSchedule = (schedule: SpektRaw[]): Day[] => {
  let days: Day[] = []
  let mappedShows: MappedShow[] = []

  schedule
    .filter((spekt: SpektRaw) => spekt.name.length > 0)
    .forEach((spekt: SpektRaw) =>
      spekt.shows
        .filter((show: Show) => show.date || (show.startDate && show.endDate))
        .forEach((show: Show) => {
          let mappedShow: MappedShow = {
            ...omit(spekt, ['shows']),
            creators: parsePersons(spekt.creators || ''),
            link: transliterate(spekt.name),
            ...show
          }
          let dates: any[] = []

          if (show.date)
            dates = [parseDate(show.date)]
          if (show.startDate && show.endDate) {
            // dates = eachDayOfInterval({
            //   start: parseDate(show.startDate),
            //   end: parseDate(show.endDate)
            // })
            dates = [new Date('2021-09-05')]
          }

          dates.forEach((date: Date) =>
            mappedShows.push({
              ...mappedShow,
              dateObj: date
            })
          )
        })
    )

  mappedShows.forEach((show: MappedShow) => {
    const index = days.findIndex((day: Day) =>
      isSameDay(day.date, show.dateObj))

    if (index === -1)
      days.push({
        ref: React.createRef(),
        date: show.dateObj,
        shows: [show]
      })
    else
      days[index].shows.push(show)
  })

  return days
    .sort((a: Day, b: Day) => a.date.getTime() - b.date.getTime())
}


export default parseSchedule