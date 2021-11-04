import React from 'react'

import { isAfter, isToday } from 'date-fns'

import { Day as DayType } from '../Types'
import schedule from '../schedule'
import parseSchedule from './parseSchedule'


export type _Spekt = {
  name: string
  age: number
  short?: string
  desc?: string | JSX.Element
  disc?: string
}

export type SpektRaw = _Spekt & {
  creators?: string
  shows: Show[]
}

export type Spekt = _Spekt & {
  link: string
  creators: Person[]
}

export type Show = {
  date?: string
  startDate?: string
  endDate?: string
  time?: string
  registerLink?: number
  otherText?: string | JSX.Element
}

export type MappedShow = Show & Spekt & {
  dateObj?: any
}

export type Day = {
  date: Date
  shows: MappedShow[]
  ref: any
}

export type Person = {
  name: string
  link?: string
}

export type StateType = {
  ready: boolean
  spekts: SpektRaw[]
  days: Day[]
  todaysIndex: number
  filteringIndex: number
  homeRef: any
  aboutRef: any
  QandARef: any
  titlesRef: any
}

const parsedSchedule = parseSchedule(schedule)
// const todaysIndex = parseSchedule(schedule).length - parsedSchedule
//   .filter((day: DayType) =>
//     isToday(day.date) || isAfter(day.date, new Date()))
//   .length
const todaysIndex = 0

export const initialState = {
  ready: true,
  spekts: schedule,
  days: parsedSchedule,
  todaysIndex: todaysIndex,
  filteringIndex: todaysIndex,
  homeRef: React.createRef(),
  aboutRef: React.createRef(),
  QandARef: React.createRef(),
  titlesRef: React.createRef(),
}
