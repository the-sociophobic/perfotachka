import React from 'react'

import Link from './Link'
import parsePersons from './Store/Types/parsePersons'
import { Person } from './Store/Types'


type PersonsProps = {
  persons?: Person[]
  string?: string
}


const Persons: React.FC<PersonsProps> = ({
  persons,
  string
}) => {
  const parsed = persons || parsePersons(string || '')

  return <div className='p p--s d-flex flex-row flex-wrap mb-xxs'>
      {parsed
        .map((creator: Person, index: number) =>
          <div
            key={creator.name}
            className='me-1'
          >
            <Link to={creator.link}>
              {creator.name}
            </Link>{index + 1 < parsed.length && ','}
          </div>
      )}
    </div>
}


export default Persons
