import React from 'react'

import { Context } from '../components/Store'
import Dropdown from '../components/Dropdown'


class About extends React.Component {

  static contextType = Context

  render = () =>
      <div
        ref={this.context.aboutRef}
        className='container'
      >
        <h1 className='h1 h1--xl font-orange'>
          ЧТО ЭТО ?
        </h1>
        <div className='box p-4 mb-s mb-md-m'>
          <div className='p p--l'>
            Самоорганизованной фестиваль, программа которого полностью собрана вокруг Перфотачки — серой Toyota Corolla 1987 года. 
          </div>
          <Dropdown title='А можно подробнее?'>
            Программа междисциплинарных проектов, завязанная в общую драматургию: 29 сделанных арт-работ в период с 6 сентября по 5 октября.
          </Dropdown>
          <Dropdown title='Как возник фестиваль?'>
            Паша Дорохов решил, что ему пора покупать новую машину, но, испытывая ответственность перед историей искусства и опытом перформативной карьеры своей Тойоты, он спросил совета у друзей. Артём Томилов и Ваня Демидкин решили выкупить у Паши машину, чтобы продолжать её движение в искусстве. После этого родилась идея «Фестиваля Перфотачки», который открывает новую эпоху в карьере Перфотачки, а также являет собой акт перехода от одного владельца к другим.
          </Dropdown>
        </div>
      </div>
}


export default About