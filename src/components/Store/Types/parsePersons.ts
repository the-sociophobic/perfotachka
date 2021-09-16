import persons from '../persons'
import { Person } from './index'


const parsePersons = (string: string) =>
  string
    .split(', ')
    .map((personString: string) => {
      const person = persons.find((person: Person) =>
        person.name.replace(' ', '').toLowerCase()
        ===
        personString.replace(' ', '').toLowerCase()
      )

      return person || {
        name: personString
      }
    })


export default parsePersons