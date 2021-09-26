import React from 'react'
import { Link } from 'react-router-dom'
import Persons from '../components/Persons'

import { Context } from '../components/Store'


class Titles extends React.Component {

  static contextType = Context

  render = () =>
    <div
      ref={this.context.titlesRef}
      className='container'
    >
      <h1 className='h1 h1--xl font-orange'>
        МЫ
      </h1>

      <div className='box p-4 mb-s mb-md-m'>
        <Persons
          string='Алиса Балабекян, Анжелика Балабекян, Аня Данилова, Артем Томилов, Валерия Кузьминых, Ваня Демидкин, Даниил Михалев, Даня Иванов, Даша Гельфман, Даша Щемелинина, Дима Белыш, Екатерина Осколкова, Екатерина Ширяева, Екатерина Ширяева, Екатерина Шитова, Злата Павловская, Ира Булыгина, Ирина Саррар, Катя Мильгевская, Лена Погорелова, Лера Белова, Леша Киселев, Лиза Смышляева, Лизавета Коливерда, Мария Слоева, Маруся Черкашина, Маша Искра, Настя Липатова, Оля Леонова, Павел Дорохов, Роман Хузин, Сережа Чехов, Софа Кругликова, Стас Сальников, Таисия Кулькова, Фёдор Лудинов, Эдуард Карякин, Юля Ивашко, Александра Магелатова, Александра Панкрашова, Алиса Чистякова, Анастасия Быцань, Анастасия Малеева, Аня Добранская, Арина Прохорова, Артем Томилов, Валери Борисова, Ваня Демидкин, Вацлав Дембовский, Дарья Савельева, Дарья Чердынцева, Даша Мовельян, Дима Белыш, Дмитрий Дагин, Екатерина Кутявина, Екатерина Ширяева, Женя Марков, Интизор Отаниёзова, Команда DramaTechie, Кружок "#, Ксюша Коган (Ширякина), Лена Погорелова, Лена Юферова, Лёня Браверман, Леонид Прокофьев, Леф Васильев, Лизавета Коливерда, Марина Бурдинская, Марк Кожарский, Марта Райцес, Маша Плаксина, Молканова Анна Андреевна, Настя Керенская, Ольга Омельяненко, Павел Дорохов, Роман Хузин, Федор Курехин, Фёдор Лудинов, Юлия Ивашко, Юля Обновленская, KREATORZ (Таля и Камилла)'
          className='p--l'
        />
        <hr className='hr'/>
        <div className='d-flex flex-row justify-content-between'>
          <div className='p p--l'>
            <Link to='https://instagram.com/perfotachka'>инст</Link>
          </div>
          <div className='p p--l'>
          <Link to='https://t.me/perfotachkachat'>чат</Link>
          </div>
          <div className='p p--l'>
            сайт — <Link to='https://instagram.com/the_sociophobic'>Леф</Link>
          </div>
        </div>
      </div>

      <div className='plate-number'>
        Р629МВ 55
      </div>
    </div>
}


export default Titles