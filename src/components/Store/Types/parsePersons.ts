import persons from '../persons'
import { Person } from './index'


const parsePersons = (string: string): Person[] =>
  string
    .split(', ')
    .sort((a, b) => Math.random() - .5)
    .map((personString: string) => {
      const person = persons.find((person: Person) =>
        person.name.replace(' ', '').replace('ё', 'е').toLowerCase()
        ===
        personString.replace(' ', '').replace('ё', 'е').toLowerCase()
      )

      return person || {
        name: personString
      }
    })


export default parsePersons