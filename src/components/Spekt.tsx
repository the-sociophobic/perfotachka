import React from 'react'

import Link from './Link'
import Dropdown from './Dropdown'
import {
  MappedShow,
  Person
} from './Store/Types'


type Props = {
  spekt: MappedShow
}


const Spekt: React.FC<Props> = ({ spekt }) =>
    <div className='Spekt'>
      <div className='row'>
        <div className='col-12 col-sm-6 col-md-3'>
          <div className='h1 px-3 px-sm-xs'>
            {spekt.time}
          </div>
        </div>
        <div className='col-12 col-sm-6 col-md-9 px-4 p-sm-0'>
          {/* <Link to={`#${spekt.link}`}> */}
            <h2 className='w-100 h2 font-orange'>
              {spekt.name}
            </h2>
          {/* </Link> */}
          {spekt.creators &&
            <div className='p p--s d-flex flex-row flex-wrap'>
              {spekt.creators
                .map((creator: Person, index) =>
                  <div className='me-1'>
                    <Link to={creator.link}>
                      {creator.name}
                    </Link>{index + 1 < spekt.creators.length && ','}
                  </div>
                )}
            </div>
          }
          {spekt.short &&
            <div className='p'>
              <i>{spekt.short}</i>
            </div>
          }
          <Dropdown title='Подробнее...'>
            {spekt.disc &&
              <div className='w-100 mb-xs'>
                {spekt.disc}
              </div>
            }
            {spekt.desc &&
              <div className='w-100 mt-xs'>
                {spekt.desc}
              </div>
            }
          </Dropdown>
        </div>
      </div>
    </div>


export default Spekt