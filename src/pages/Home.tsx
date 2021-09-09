import React from 'react'

import Link from '../components/Link'
import Dropdown from '../components/Dropdown'
import { Context } from '../components/Store'
import { Spekt, Show } from '../components/Store/Types'
import Logo from '../style/img/logo.png'


class Home extends React.Component {

  static contextType = Context

  render = () => {
    return (
      <div className='Home'>
        <div className='container'>
          <div className='row'>
            <div className='mx-auto my-s col-12 col-md-8 col-lg-6'>
              <img
                src={Logo}
                className='w-100'
              />
            </div>
          </div>
          {this.context.spekts
            .filter((spekt: Spekt) => spekt.name.length > 0)
            .map((spekt: Spekt) => 
              <div className='Spekt'>
                <h2 className='w-100 h2 font-orange'>
                  {spekt.name}
                </h2>
                {spekt.creators &&
                  <div className='p p--s'>
                    Создатели: {spekt.creators}
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
                  {spekt.shows
                    // .filter((show: Show) => show.link)
                    .map((show: Show) =>
                      <div className='row'>
                        <div className='col-6 col-md-3'>
                          {show.date}
                        </div>
                        <div className='col-6 col-md-3'>
                          {show.time}
                        </div>
                        {show.link &&
                          <div className='col-12 col-md-6'>
                            <Link to={show.link}>
                              Регистрация
                            </Link>
                          </div>
                        }
                      </div>
                    )
                  }
                  {spekt.desc &&
                    <div className='w-100 mt-xs'>
                      {spekt.desc}
                    </div>
                  }
                </Dropdown>
              </div>
            )
          }

          <h1 className='h1 my-m text-center'>
            Скоро мы добавим больше ивентов. Не переключайтесь 
          </h1>
        </div>
      </div>
    )
  }
}


export default Home