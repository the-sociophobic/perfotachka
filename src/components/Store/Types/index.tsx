import schedule from '../schedule'


export type StateType = {
  ready: boolean
  spekts: Spekt[]
}

export type Spekt = {
  name: string
  age: number,
  short?: string
  desc?: string | JSX.Element
  creators?: string
  disc?: string
  shows: Show[],
}

export type Show = {
  date?: string
  time?: string
  link?: string
}

const initialState = {
  ready: true,
  spekts: schedule
}


export {
  initialState,
}
