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
  registerLink?: string
  otherText?: string | JSX.Element
}

export type MappedShow = Show & Spekt & {
  dateObj?: any
}

export type Day = {
  date: Date
  shows: MappedShow[]
}

export type Person = {
  name: string
  link?: string
}

export type StateType = {
  ready: boolean
  spekts: SpektRaw[]
  days: Day[]
}

export const initialState = {
  ready: true,
  spekts: schedule,
  days: parseSchedule(schedule)
}
