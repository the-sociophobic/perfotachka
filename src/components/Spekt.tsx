import React from 'react'

import Link from './Link'
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
          {/* {spekt.registerLink &&
            <Link
              className='Spekt__register'
              to={`https://perfotachka.timepad.ru/event/${spekt.registerLink}/`}
            >
              Подробнее
            </Link>
          } */}
          {/* {spekt.otherText &&
            <div className='p p--m'>
              {spekt.otherText}
            </div>
          } */}
        </div>

        <div className='col-12 col-md-7 col-xl-8 px-4 px-sm-xs'>
          {spekt.registerLink ?
            <Link
              className='Spekt__register'
              to={`https://perfotachka.timepad.ru/event/${spekt.registerLink}/`}
            >
              <h2 className='w-100 h2 font-orange'>
                {spekt.name}
              </h2>
            </Link>
            :
            <h2 className='w-100 h2 font-orange'>
              {spekt.name}
            </h2>
          }
          {spekt.creators.length > 0 &&
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
          {/* <Dropdown title={spekt.short && spekt.short?.length > 0 ? spekt.short : 'Подробнее...'}>
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
          </Dropdown> */}
        </div>
      </div>
    </div>


export default Spekt