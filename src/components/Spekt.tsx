import React from 'react'

import Link from './Link'
import Dropdown from './Dropdown'
import {
  MappedShow,
} from './Store/Types'
import Persons from './Persons'


type Props = {
  spekt: MappedShow
}


const Spekt: React.FC<Props> = ({ spekt }) =>
    <div className='Spekt'>
      <div className='row d-flex flex-column-reverse flex-md-row'>
        <div className='col-12 col-md-5 col-xl-3 px-3 px-sm-xs'>
          <div className='h1'>
            {spekt.time}
          </div>
          {spekt.registerLink &&
            <Link to={spekt.registerLink}>
              Регистрация
            </Link>
          }
          <div className='p p--s'>
            {spekt.otherText}
          </div>
        </div>
        <div className='col-12 col-md-7 col-xl-9 px-4 px-sm-xs'>
          {/* <Link to={`#${spekt.link}`}> */}
            <h2 className='w-100 h2 font-orange'>
              {spekt.name}
            </h2>
          {/* </Link> */}
          {spekt.creators &&            
            <Persons persons={spekt.creators} />
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