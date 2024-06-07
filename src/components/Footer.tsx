import React from 'react'
import Link from './Link'

import { Context } from './Store'


class Footer extends React.Component {

  static contextType = Context

  render = () => {
    return (
      <footer className="Footer mt-m py-xs">
        <div className="container">
          <div className="row">
            <div className="col">
              <div className='p p--m text-center'>
                Поздравляю, вы домотали сайт до конца! Кстати, его сделал <Link to='https://t.me/the_sociophobic'>the_sociophobic</Link>
              </div>
            </div>
          </div>
        </div>
      </footer>
    )
  }
}


export default Footer