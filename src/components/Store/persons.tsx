const persons = [
  {
    name: 'Артём Томилов',
    link: 'arttomilov'
  },
  {
    name: 'Ваня Демидкин',
    link: 'vnchkaa'
  },
  {
    name: 'Марк Кожарский',
    link: 'mark__nend__sudes'
  },
  {
    name: 'Маша Слоева',
    link: 'marisloeva'
  },
  {
    name: 'Мария Слоева',
    link: 'marisloeva'
  },
  {
    name: 'Леф Васильев',
    link: 'the_sociophobic'
  },
  {
    name: 'Фёдор Лудинов',
    link: 'fedlud'
  },
  {
    name: 'Алиса Балабекян',
    link: 'bala_land_'
  },
  {
    name: 'Анжелика Балабекян',
    link: 'alice_eko'
  },
  {
    name: 'Роман Хузин',
    link: 'romkahuz'
  },
  {
    name: 'Дима Белыш',
    link: 'belysh2022'
  },
  {
    name: 'Софа Кругликова',
    link: 'sofakruglikova1'
  },
  {
    name: 'Павел Дорохов',
    link: 'pashadorohov'
  },
  {
    name: 'Паша Дорохов',
    link: 'pashadorohov'
  },
  {
    name: 'Валерия Кузьминых',
    link: 'kuzminikh'
  },
  {
    name: 'Лёня Браверман',
    link: 'braver__man'
  },
  {
    name: 'Дмитрий Дагин',
    link: 'drahma_dharma'
  },
  {
    name: 'Анастасия Быцань',
    link: 'bytsan.anastasia'
  },
  {
    name: 'Федор Курехин',
    link: 'kutheodor'
  },
  {
    name: 'Стас Сальников',
    link: 'otvratitelniy_chelovek'
  },
  {
    name: 'Эдуард Карякин',
    link: 'eduardkaryakin'
  },
  {
    name: 'Сережа Чехов',
    link: 'chkhvsrzh'
  },
  {
    name: 'Оля Леонова',
    link: 'metamodernisme'
  },
  // {
  //   name: '',
  //   link: ''
  // },
  // {
  //   name: '',
  //   link: ''
  // },
  // {
  //   name: '',
  //   link: ''
  // },
  // {
  //   name: '',
  //   link: ''
  // },
  // {
  //   name: '',
  //   link: ''
  // },
]
.map(person => ({
  ...person,
  link: 'https://instagram.com/' + person.link
}))


export default persons