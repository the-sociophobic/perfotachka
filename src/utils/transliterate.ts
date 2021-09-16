const chars: {
  [key: string]: string
} = {
  'а': 'a',
  'б': 'b',
  'в': 'v',
  'г': 'g',
  'д': 'd',
  'е': 'e',
  'ё': 'e',
  'ж': 'zh',
  'з': 'z',
  'и': 'i',
  'й': 'i',
  'к': 'k',
  'л': 'l',
  'м': 'm',
  'н': 'n',
  'о': 'o',
  'п': 'p',
  'р': 'r',
  'с': 's',
  'т': 't',
  'у': 'u',
  'ф': 'f',
  'х': 'kh',
  'ц': 'ts',
  'ч': 'ch',
  'ш': 'sh',
  'щ': 'sch',
  // 'ъ': '',
  'ы': 'y',
  // 'ь': '',
  'э': 'e',
  'ю': 'yu',
  'я': 'ya',
}

const replaceCyrillic = (string: string) =>
  string.split('')
    .filter(char =>
      Object.keys(chars).includes(char))
    // .slice(0).reverse()
    .map((char: string): string =>
      chars[char] ?
        chars[char]
        :
        char)
    .join('')

const transliterate = (string: string) =>
  replaceCyrillic(
    string
      .toLowerCase()
      .replace('ье', 'ye')
      .replace('ия', 'ia')
      .replace('ья', 'ia')
      .replace('ий', 'y')
      .replace('ё', 'е')
      .replace(' ', '-')
  )


export default transliterate
