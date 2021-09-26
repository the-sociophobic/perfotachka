import React from 'react'
import { isBefore } from 'date-fns'

import Dropdown from './Dropdown'
import { MappedShow } from './Store/Types'
import Persons from './Persons'


type Props = {
  spekt: MappedShow
}


const Spekt: React.FC<Props> = ({ spekt }) =>
    <div className='Spekt'>
      <div className='row d-flex flex-column-reverse flex-md-row'>
        <div className='col-12 col-md-5 col-xl-4 px-3 px-sm-xs'>
          <div className='h1'>
            {spekt.time}
          </div>
          {(spekt.registerLink && !isBefore(spekt.dateObj || 0, new Date())) &&
            <div
              className='Spekt__register'
              data-twf-target-state={`{"event_id": ${spekt.registerLink}}`}
            >
              Регистрация
            </div>
          }
          {spekt.otherText &&
            <div className='p p--m'>
              {spekt.otherText}
            </div>
          }
        </div>

        <div className='col-12 col-md-7 col-xl-8 px-4 px-sm-xs'>
          {/* <Link to={`#${spekt.link}`}> */}
            <h2 className='w-100 h2 font-orange'>
              {spekt.name}
            </h2>
          {/* </Link> */}
          {spekt.creators &&
            <div className='d-flex flex-row'>
              <div className='me-2 font-gray'>
                made by
              </div>
              <Persons
                persons={spekt.creators}
                className='p--m font-gray'
              />
            </div>
          }
          {/* {(spekt.short && spekt.short?.length > 0) &&
            <div className='p p--m'>
              <i>
                {spekt.short}
              </i>
            </div>
          } */}
          <Dropdown title={spekt.short && spekt.short?.length > 0 ? spekt.short : 'Подробнее...'}>
            {spekt.disc &&
              <div className='w-100 p p--s font-gray'>
                {spekt.disc}
                <hr className='hr'/>
              </div>
            }
            {spekt.desc &&
              <div className='w-100'>
                {spekt.desc}
              </div>
            }
          </Dropdown>
        </div>
      </div>
    </div>


export default Spekt