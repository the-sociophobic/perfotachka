import React from 'react'

import Link from './Link'
import parsePersons from './Store/Types/parsePersons'
import { Person } from './Store/Types'


type PersonsProps = {
  persons?: Person[]
  string?: string
  className?: string
  noLinks?: boolean
}


const Persons: React.FC<PersonsProps> = ({
  persons,
  string,
  className,
  noLinks
}) => {
  const parsed = persons || parsePersons(string || '')

  return (
    <div className={`p d-flex flex-row flex-wrap ${className}`}>
      {parsed
        .map((creator: Person, index: number) =>
          <div
            key={creator.name + index}
            className='me-2 inherit-all'
          >
            {noLinks ?
              creator.name
              :
              <Link to={creator.link}>
                {creator.name}
              </Link>
            }{index + 1 < parsed.length && ','}
          </div>
      )}
    </div>
  )
}


export default Persons
