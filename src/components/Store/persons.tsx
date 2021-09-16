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
    name: 'Леф Васильев',
    link: 'the_sociophobic'
  },
  {
    name: 'Фёдор Лудинов',
    link: 'fedlud'
  },
]
.map(person => ({
  ...person,
  link: 'https://instagram.com/' + person.link
}))


export default persons