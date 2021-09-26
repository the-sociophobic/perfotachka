import Link from '../Link'


const schedule = [
  {
    name: 'Открытие «Фестиваля Перфотачки» в Музее Стрит-Арта',
    age: 16,
    desc: <>
      Программа междисциплинарных проектов, завязанная в общую драматургию. Мы будем запускать весь фестиваль и образовывать связи между участниками и зрителями. 
      <br />
      Музей Стрит-Арта располагается на территории действующего завода слоистых пластиков. Это городское пространство, в котором создаются и экспонируются произведения уличных художников. Музей уже сотрудничал с Перфотачкой в рамках выставки <Link to='https://streetartmuseum.ru/otkrytie-novoj-vystavki-ubezhishche-welcome-to-the-paradise/'>«Убежище»</Link>.
    </>,
    creators: '',
    disc: 'Для тех, кто готов двигаться, сидеть на улице и в помещение.',
    shows: [
      {
        date: '6 сентября, пн',
        time: '18:30',
        registerLink: 'https://perfotachka.timepad.ru/event/1759691/',
      },
    ],
  },
  {
    name: 'Туда-обратно',
    age: 16,
    desc: 'Для тех, кто готов участвовать в подвижной эстафете.',
    creators: 'Дима Белыш, Лена Юферова',
    disc: '',
    shows: [
      {
        date: '6 сентября, пн',
        time: '20:00 - 20:45',
        registerLink: 'https://perfotachka.timepad.ru/event/1759691/',
      },
    ],
  },
  {
    name: 'Прощальный по Остину',
    age: 16,
    short: 'Спектакль прошлых и будущих владельцев Перфотачки',
    desc: <>
      Паша Дорохов решил, что ему пора покупать новую машину, но, испытывая ответственность перед историей искусства и опытом перформативной карьеры своей Тойоты, он спросил совета у друзей. Артём Томилов и Ваня Демидкин решили выкупить у Паши машину, чтобы продолжать её движение в искусстве. После этого родилась идея Фестиваля Перфотачки, который открывает новую эпоху в карьере Перфотачки, а также являет собой акт перехода от одного владельца к другим. Всё сложилось прекрасно, только какие в этом во всём чувства испытывают ОНИ — Паша и Перфотачка. 
      <br />
      «Прощальный по Остину» — это спектакль, запускающий метанарратив фестиваля. Паша Дорохов и Перфотачка будут осознанно входить в последний проект в отношениях владельца и объекта владения. Они сыграют красивую меланхолию визуальности и действия, опираясь на разные эстетические режимы. 
    </>,
    disc: 'Для тех, кто готов сидеть и смотреть.',
    creators: 'Паша Дорохов, Артём Томилов',
    shows: [
      {
        date: '6 сентября, пн',
        time: '21:00 - 21:50',
        registerLink: 'https://perfotachka.timepad.ru/event/1759691/',
      },
    ],
  },
  {
    name: 'Чудотворец',
    age: 16,
    short: 'Инсталляция со зрительницей',
    desc: 'Кураторы фестиваля превозносят Перфотачку — серую Toyota Corolla 1987г., в каком-то смысле возводят ее до иконы. Авторы перформанса хотят довести эту тенденцию до тотального иконопочитания — поставить распечатанное изображение перфотачки в качестве инсталляции, а перед ней поместить перформерку, которая пять часов будет смотреть на изображение как на икону. Зрителям же предлагается созерцать созерцание в течение всей программы открытия. Авторы умышленно дистанцируются от зрителя, рассматривая практику созерцания произведения искусства не как поворот спиной к миру, а скорее поворот к себе, который позволяет осмыслить своё положение, взглянуть на себя со стороны. Сам акт созерцания становится объектом инсталляции, выводится за скобки и подчеркивается.',
    disc: 'Для тех, кто готов наблюдать.',
    creators: 'Кружок "#',
    shows: [
      {
        date: '6 сентября, пн',
        time: '19:00 - 00:00',
        registerLink: 'https://perfotachka.timepad.ru/event/1759691/',
      },
    ],
  },
  {
    name: '2021 Perfotachka Incident',
    age: 18,
    short: 'Прогулка в двух реальностях',
    desc: 'Риал-сайз реплика перфотачки, вооружённая AR-сторителингом, становится частью стритарт-ландшафта заброшенного завода.',
    disc: 'Для тех, кто готов к прогулке по заброшенному заводу и взаимодействию с объектами инсталляции через телефон.',
    creators: 'Леф Васильев, Марк Кожарский',
    shows: [
      {
        startDate: '7 сентября',
        endDate: '7 октября',
        time: '∞',
        otherText: <><Link to='https://t.me/Perfotachka_Incident_Bot'>Участвовать</Link></>,
      },
    ],
  },
  {
    name: 'Ничего лишнего (только тачка)',
    age: 18,
    desc: 'Машина стала неотъемлемым объектом современного мира. У каждого из нас есть свои воспоминания, истории и ассоциации, связанные с ней. «Ничего лишнего (только тачка)» – это перформанс о том, что мы переживаем внутри, но так редко произносим вслух. По ходу импровизации исполнительницы расскажут о своих ощущениях: поверхность капота, ощущения от прикосновения к рулю и запах салона станут материалом проекта. Только машина, люди и отклик тела. Ничего лишнего.',
    disc: 'Для тех, кто готов наблюдать за перформансом на улице. ',
    creators: 'Екатерина Кутявина, Александра Панкрашова, Ольга Омельяненко, Анастасия Малеева',
    shows: [
      {
        date: '8 сентября, ср',
        time: '14:00 - 14:45',
        registerLink: 'https://perfotachka.timepad.ru/event/1762452/'
      },
      {
        date: '20 сентября',
        time: '14:00 - 14:45',
        otherText: <>Регистрация на 20 сентября откроется 15 сентября. Мы напомним о ней в рассылке:  <Link to='https://forms.gle/ujLTRP8pGWSz8iD1A'>подпишитесь</Link>.</>
      },
    ],
  },
  {
    name: 'Сидит Гоголь на пеньке в лесу и дрочит',
    age: 18,
    short: 'Аттракцион для тех, кто совсем не умеет водить автомобиль',
    desc: <>
      Как-то раз в Петербурге из дворца с бала вышли Пушкин и Гончарова. Чинно прошли до кареты. Сели и уехали.
      <br />
      Первый — второму: вчера видел как с бала вышли Пушкин с Гончаровой. Красивые такие. Трезвые. Сели и уехали. Только Пушкин когда забирался в карету вроде как пошатнулся что ли. 
      <br />
      Седьмой — восьмому: вчера Пушкин с Гончаровой с бала немного под шафе выходили, но в целом нормально сели и уехали. Только чуток ботинки грязью забрызгали.
      <br />
      Пятнадцатый — шестнадцатому: вчера Пушкин с Гончаровой вывалились из дворца пьяные. Пушкин свалился в лужу лицом. Гончарова стала его вытаскивать и туда же увалилась. Потом залезли в карету, уехали.
      <br />
      Двадцать второй — двадцать третьему: дверь распахивается, стукается о стены, цветы в вазах падают, Пушкин падает на ступеньки, а Гончарову несут обблёванную лакеи. Пушкин ползет до кареты, орет, поет, свистит, не дает себя поднять, дерется. Гончарова блюет на лакеев, ее случайно отпустили, она свалилась в грязь. Еле-еле их поместили в карету, уехали. Из окна кареты вылетела подушка.
      <br />
      Сотый — сто первому: иду по лесу, смотрю на пеньке сидит Гоголь и дрочит…
      <br />
      Форма всего для пятерых человек; по совпадению, как пять ступеней из анекдота выше. Исходя из вопросов безопасности, дальше все поймете, и погружаясь в принцип аттракциона, когда заранее знаешь на что идешь, рассказываем устройство предлагаемого опыта. Мы организовали серию встреч в машине. На этих встречах каждая_ый будет сначала «учиться» водить, а потом будет «учить». Так сначала хозяин Перфотачки Паша Дорохов даст урок первому человеку, затем первый даст урок второму и так далее. Посмотрим, как будет себя вести передаваемое знание. Во время всех уроков Паша будет находиться в салоне тачки и следить, чтобы все происходящее оставалось в рамках закона. Форма перформанса не ограничивается только описанной механикой, но мы решили не раскрывать все карты до самого перформанса.
    </>,
    disc: 'Для тех, кто не водит машину, но готов попробовать.',
    creators: 'Роман Хузин, Артем Томилов, инструктор Павел Дорохов',
    shows: [
      {
        date: '10 сентября, пт',
        time: '19:00 - 19:45',
        registerLink: 'https://perfotachka.timepad.ru/event/1762458/',
      },
      {
        date: '10 сентября, пт',
        time: '19:45 - 20:30',
        registerLink: 'https://perfotachka.timepad.ru/event/1762458/',
      },
      {
        date: '10 сентября, пт',
        time: '20:30 - 21:15',
        registerLink: 'https://perfotachka.timepad.ru/event/1762458/',
      },
      {
        date: '10 сентября, пт',
        time: '21:15 - 22:00',
        registerLink: 'https://perfotachka.timepad.ru/event/1762458/',
      },
      {
        date: '10 сентября, пт',
        time: '22:00 - 22:45',
        registerLink: 'https://perfotachka.timepad.ru/event/1762458/',
      },
    ],
  },
  {
    name: 'Свидание в Перфотачке',
    age: 16,
    short: 'Встреча двух людей в тачке',
    desc: <>
      Проект «Свидание в Перфотачке» создает пространство для свидания, чтобы исследовать этот феномен изнутри. Свидание может проходить где угодно, как угодно, быть любым по форме и содержанию, однако мы отличаем его от любой другой формы взаимодействия. Что такое свидание, какова его сущность? Мы предлагаем участникам прийти вдвоём или по одиночке на свидание вслепую. Машина позволит вам прожить опыт свидания и одновременно выступит в роли медиатора между участниками свидания.
      <br />
      Если вы точно знаете, с кем хотите прийти на свидание, то бронируйте сразу два места. Если же хотите отдаться на волю судьбе и встретиться с новым человеком, то бронируйте одно место и будьте готовы ко встрече с человеком другого или одинакового пола.
    </>,
    disc: 'Для тех, кто готов провести в машине 45 минут со знакомым/незнакомым человеком и магнитолой.',
    creators: 'Алиса Чистякова, Лёня Браверман',
    shows: [
      {
        date: '10 сентября, пт',
        time: '16:00 - 16:45',
        registerLink: 'https://perfotachka.timepad.ru/event/1762469/',
      },
      {
        date: '10 сентября, пт',
        time: '16:45 - 17:30',
        registerLink: 'https://perfotachka.timepad.ru/event/1762469/',
      },
      {
        date: '10 сентября, пт',
        time: '17:30 - 18:15',
        registerLink: 'https://perfotachka.timepad.ru/event/1762469/',
      },
      {
        date: '18 сентября, сб',
        time: '18:00 - 18:45',
        registerLink: '',
        otherText: <>Регистрация на 18 сентября откроется 8 сентября, на 26 сентября —  15 сентября. Мы напомним о ней в рассылке: <Link to='https://forms.gle/ujLTRP8pGWSz8iD1A'>подпишитесь</Link>.</>
      },
      {
        date: '18 сентября, сб',
        time: '18:45 - 19:30',
        registerLink: '',
        otherText: <>Регистрация на 18 сентября откроется 8 сентября, на 26 сентября —  15 сентября. Мы напомним о ней в рассылке: <Link to='https://forms.gle/ujLTRP8pGWSz8iD1A'>подпишитесь</Link>.</>
      },
      {
        date: '18 сентября, сб',
        time: '19:30 - 20:15',
        registerLink: '',
        otherText: <>Регистрация на 18 сентября откроется 8 сентября, на 26 сентября —  15 сентября. Мы напомним о ней в рассылке: <Link to='https://forms.gle/ujLTRP8pGWSz8iD1A'>подпишитесь</Link>.</>
      },
      {
        date: '26 сентября, вс',
        time: '18:00 - 18:45',
        registerLink: '',
        otherText: <>Регистрация на 18 сентября откроется 8 сентября, на 26 сентября —  15 сентября. Мы напомним о ней в рассылке: <Link to='https://forms.gle/ujLTRP8pGWSz8iD1A'>подпишитесь</Link>.</>
      },
      {
        date: '26 сентября, вс',
        time: '18:45 - 19:30',
        registerLink: '',
        otherText: <>Регистрация на 18 сентября откроется 8 сентября, на 26 сентября —  15 сентября. Мы напомним о ней в рассылке: <Link to='https://forms.gle/ujLTRP8pGWSz8iD1A'>подпишитесь</Link>.</>
      },
      {
        date: '26 сентября, вс',
        time: '19:30 - 20:15',
        registerLink: '',
        otherText: <>Регистрация на 18 сентября откроется 8 сентября, на 26 сентября —  15 сентября. Мы напомним о ней в рассылке: <Link to='https://forms.gle/ujLTRP8pGWSz8iD1A'>подпишитесь</Link>.</>
      },
    ],
  },
  {
    name: 'Машина времени',
    age: 16,
    short: 'Документальная инсталляция',
    desc: 'Это путешествие по пространству и времени, где Перфотачка становится носительницей опыта художницы. Как накопленные человеком воспоминания и опыт складываются на задворки сознания и сопровождают его до самой смерти, так материальные объекты из жизни художницы помещаются на заднее сидение Перфотачки и вместе с ней совершают путешествие до конечной точки. Документальная инсталляция «Машина времени» позволит заглянуть не только в чужое прошлое, но и понять свое настоящее. Это музей под открытым небом и в закрытой машине.',
    disc: 'Для тех, кто готов изучать инсталляцию на открытом воздухе.',
    creators: 'Александра Магелатова',
    shows: [
      {
        date: '11 сентября, сб',
        time: 'в любое время с 16:00 до 20:00',
        registerLink: 'https://perfotachka.timepad.ru/event/1762552/',
      },
    ],
  },
  {
    name: 'Рыночные отношения',
    age: 16,
    short: 'Перфоманс с обменом и аудиофиксацией',
    desc: <>
      Это как роудмуви, только машина никуда не движется. Это почти что барахолка, но тут нет денег. Дорога полна приключений и она складывается из того, что мы видим вокруг и чем наполняем ее. Зачем в нашей жизни появляются новые места, люди, вещи? Как мы делаем выбор? Как мы определяем красивое и некрасивое, нужное и ненужное, важное и неважное? С чем мы готовы расстаться, чтобы взять новое? За что мы покупаем и за что продаем? 
      <br />
      Приглашаем зрителей обменять свои истории на предметы с капота Перфотачки. Обмен происходит в порядке живой очереди. 
    </>,
    disc: 'Для тех, кто готов разговаривать и быть записанным на диктофон.',
    creators: 'Юля Обновленская',
    shows: [
      {
        date: '12 сентбря, вс',
        time: '',
        registerLink: 'https://perfotachka.timepad.ru/event/1762568/',
      },
    ],
  },
  {
    name: 'Terra Absentia (маленькая смерть)',
    age: 18,
    short: 'Репетиция смерти для одного зрителя',
    desc: <>
      Это маленькая модель смерти: умереть здесь можно на некоторое время, чтобы отключиться от коммуникации, необходимости воспринимать, принимать решения и по-другому взаимодействовать с миром. Перфотачка становится местом небытья. 
      <br />
      Актор — сам зритель. На входе в Перфотачку у него забирают гаджеты и проводят ритуал отключения от внешнего. Он помещается в Перфотачку, которая преобразует ход времени в ход машины. В конце события участника постепенно возвращают к реальности.
      <br />
      Показ проходит индивидуально — для одного зрителя. Всего запланировано пять показов. Просьба не опаздывать.
    </>,
    disc: 'Для тех, кто готов пережить маленькую смерть в Перфотачке. Весь перформанс проходит без слов и активного взаимодействия.',
    creators: 'Дарья Чердынцева',
    shows: [
      {
        date: '12 сентбря, вс',
        time: '19.00-19:30',
        registerLink: 'https://perfotachka.timepad.ru/event/1762562/',
      },
      {
        date: '12 сентбря, вс',
        time: '19.45-20:15',
        registerLink: 'https://perfotachka.timepad.ru/event/1762562/',
      },
      {
        date: '12 сентбря, вс',
        time: '20.30-21:00',
        registerLink: 'https://perfotachka.timepad.ru/event/1762562/',
      },
      {
        date: '12 сентбря, вс',
        time: '21.15-21:45',
        registerLink: 'https://perfotachka.timepad.ru/event/1762562/',
      },
      {
        date: '12 сентбря, вс',
        time: '22.00-22:30',
        registerLink: 'https://perfotachka.timepad.ru/event/1762562/',
      },
    ],
  },
  {
    name: 'Таксов-Таксян-Таксиладзе',
    age: 16,
    short: 'Игра в совместимость',
    desc: 'Давно ты вызывал такси? Тебе понравилась поездка? Чувствовал ли ты себя в безопасности? Создай свою идеальную поездку, и проверь, действительно ли она существует. Индивидуальный опыт идеального (?) такси.',
    disc: 'Для тех, кто готов заполнить анкету.',
    creators: 'Настя Керенская',
    shows: [
      {
        date: '13 сентября, пн',
        time: '',
        registerLink: '',
      },
    ],
  },
  {
    name: 'Fake taxi (театр по согласию)',
    age: 18,
    short: 'Любовные игры',
    desc: '',
    disc: 'Для тех, кто готов к интимным разговорам в машине.',
    creators: 'Марта Райцес',
    shows: [
      {
        date: '16 сентября, чт',
        time: '',
        otherText: <>Регистрация откроется 8 сентября. Мы напомним о ней в рассылке: <Link to='https://forms.gle/ujLTRP8pGWSz8iD1A'>подпишитесь</Link>.</>,
      },
    ],
  },
  {
    name: 'Инопланетный гость',
    age: 18,
    desc: <>
      Быть гостем — непросто. Как вы себя чувствуете, когда приезжаете в новый город? А в новую страну? А что будет, если вы вдруг окажетесь на новой планете? Что вам здесь надо? Кто это вокруг вас? Почему все такие странные? Чем они занимаются? Так много вопросов, и так мало ответов.
      <br />
      Квест-аттракцион, в котором зритель становится инопланетянином и отправляется исследовать другую планету.
    </>,
    short: 'Квест-аттракцион',
    disc: 'Театрализованный аттракцион для трех смелых участников, которые не боятся новых обстоятельств и неоднозначных заданий.',
    creators: 'Ширяева Екатерина',
    shows: [
      {
        date: '17 сентября, пт',
        time: '21:30 - 22:30 (23:00)',
        otherText: <>Регистрация откроется 8 сентября. Мы напомним о ней в рассылке: <Link to='https://forms.gle/ujLTRP8pGWSz8iD1A'>подпишитесь</Link>.</>,
      },
    ],
  },
  {
    name: 'Душная тачка',
    age: 18,
    short: 'Всех научат жить правильно. И немного водить машину',
    desc: 'Душные речи от самых душных инструкторов вождения. В программе наблюдение за жалкими попытками освоить механику Тойоты: инструкторы-перформеры будут учить девушку вождению, а девушка будет рассказывать о своих ощущениях на телесном уровне — как машина становится продолжением ее тела, реагирующего на внешние факторы.',
    disc: 'Для тех, кто готов подглядывать за чужим уроком вождения.',
    creators: 'Лена Погорелова, Паша Дорохов',
    shows: [
      {
        date: '18 сентября',
        time: '12:00 - 12:30',
        otherText: <>Регистрация откроется 8 сентября. Мы напомним о ней в рассылке: <Link to='https://forms.gle/ujLTRP8pGWSz8iD1A'>подпишитесь</Link>.</>,
      },
      {
        date: '18 сентября',
        time: '12:40 - 13:10',
        otherText: <>Регистрация откроется 8 сентября. Мы напомним о ней в рассылке: <Link to='https://forms.gle/ujLTRP8pGWSz8iD1A'>подпишитесь</Link>.</>,
      },
      {
        date: '18 сентября',
        time: '13:20 - 13:50',
        otherText: <>Регистрация откроется 8 сентября. Мы напомним о ней в рассылке: <Link to='https://forms.gle/ujLTRP8pGWSz8iD1A'>подпишитесь</Link>.</>,
      },
    ],
  },
  {
    name: 'Чувство единения с партнером',
    age: 18,
    short: 'Классический перформанс',
    desc: <>Ваня Демидкин, автор перформанса: «У меня есть водительские права уже больше 4 лет, но я никогда не чувствовал себя частью автомобильной культуры с ее бросающими из крайности в крайность, гипертрофированными законами. «Чувство единения с партнером» — это мой способ проникнуть внутрь недоступной культуры. В течение 5 часов я буду толкать Перфотачку по городу, принимая помощь от прохожих и зрителей. Участвовать могут все: наблюдать за мной, помогать или мешать — выбор за вами. Следить за передвижением можно в Инстаграме <Link to='https://instagram.com/perfotachka'>@perfotachka</Link> и <Link to='https://instagram.com/vnchkaa'>@vnchkaa</Link>».</>,
    disc: 'Для тех, кто хочет подключиться к трансляции или наблюдению/участию.',
    creators: 'Ваня Демидкин',
    shows: [
      {
        date: '19 сентября, вс',
        time: '10:00 - 15:00',
        otherText: <>Регистрация откроется 8 сентября. Мы напомним о ней в рассылке: <Link to='https://forms.gle/ujLTRP8pGWSz8iD1A'>подпишитесь</Link>.</>,
      },
    ],
  },
  {
    name: 'Стритрейстенсив',
    age: 16,
    desc: '«Стритрейстенсив» – это экспресс-курс по стритрейсингу для начинающих и продолжающих. Особая учебная программа направлена на развитие воображения, мелкой моторики и навыков участия в нелегальных заездах на автомобилях. Окунитесь в мир горящих покрышек и модных крутышек. Навыки вождения и водительские права необязательны. Перед посещением рекомендуем проконсультироваться с врачом.',
    short: 'Перформативный аттракцион',
    disc: 'Для тех, кто готов к общению и компьютерным играм.',
    creators: 'Фёдор Лудинов',
    shows: [
      {
        date: '19 сентября, вс',
        time: '19:30 - 20:00',
        otherText: <>Регистрация откроется 8 сентября. Мы напомним о ней в рассылке: <Link to='https://forms.gle/ujLTRP8pGWSz8iD1A'>подпишитесь</Link>.</>,
      },
      {
        date: '19 сентября, вс',
        time: '20:00 - 20:30',
        otherText: <>Регистрация откроется 8 сентября. Мы напомним о ней в рассылке: <Link to='https://forms.gle/ujLTRP8pGWSz8iD1A'>подпишитесь</Link>.</>,
      },
      {
        date: '19 сентября, вс',
        time: '20:30 - 21:00',
        otherText: <>Регистрация откроется 8 сентября. Мы напомним о ней в рассылке: <Link to='https://forms.gle/ujLTRP8pGWSz8iD1A'>подпишитесь</Link>.</>,
      },
      {
        date: '19 сентября, вс',
        time: '21:00 - 21:30',
        otherText: <>Регистрация откроется 8 сентября. Мы напомним о ней в рассылке: <Link to='https://forms.gle/ujLTRP8pGWSz8iD1A'>подпишитесь</Link>.</>,
      },
      {
        date: '19 сентября, вс',
        time: '21:30 - 22:00',
        otherText: <>Регистрация откроется 8 сентября. Мы напомним о ней в рассылке: <Link to='https://forms.gle/ujLTRP8pGWSz8iD1A'>подпишитесь</Link>.</>,
      },
    ],
  },
  {
    name: 'Связь',
    age: 16,
    short: 'Объектно-ориентированные движения в пространстве и времени',
    desc: <>
      это соединение. <br />
      это слияние.<br />
      внутреннего и внешнего. <br />
      машинного и человеческого. <br />
      это проводник между живым и неживым. <br />
      это привязка к чему-то. <br />
      это привязка к кому-то. <br />
      это часть тебя. <br />
      ты наблюдатель. <br />
      ты ведомый. <br />
      ты ведущий.<br />
    </>,
    disc: 'Для тех, кто готов наблюдать за перформансом.',
    creators: 'Прохорова Арина, Дагин Дмитрий',
    shows: [
      {
        date: '20 сентября, пн',
        time: '',
        otherText: <>Регистрация откроется 15 сентября. Мы напомним о ней в рассылке: <Link to='https://forms.gle/ujLTRP8pGWSz8iD1A'>подпишитесь</Link>.</>,
      },
    ],
  },
  {
    name: 'Давай всё обсудим',
    age: 16,
    short: 'Пластическая коммуникация. Человек-машина',
    desc: '',
    disc: 'Для тех, кто готов наблюдать за перфоративной инсталляцией. ',
    creators: 'Даша Мовельян, Лена Юферова',
    shows: [
      {
        date: '22 сентября, ср',
        time: '',
        otherText: <>Регистрация откроется 15 сентября. Мы напомним о ней в рассылке: <Link to='https://forms.gle/ujLTRP8pGWSz8iD1A'>подпишитесь</Link>.</>,
      },
    ],
  },
  {
    name: 'Я снова это слышу и прохожу мимо, потому что устал',
    age: 16,
    short: 'Спектакль без ответов',
    desc: '',
    disc: 'Для тех, кто готов наблюдать и участвовать.',
    creators: 'Молканова Анна Андреевна и перформеры',
    shows: [
      {
        date: '23 сентября, чт',
        time: '15:00 - 15:50',
        otherText: <>Регистрация откроется 15 сентября. Мы напомним о ней в рассылке: <Link to='https://forms.gle/ujLTRP8pGWSz8iD1A'>подпишитесь</Link>.</>,
      },
    ],
  },
  {
    name: 'Внутри',
    age: 6,
    short: 'Моноспектакль из Брянска',
    desc: <>
      Тачка 1987-го года запускает череду воспоминаний, лежащих в основе моноспектакля. В уединенном пространстве Перфотачки зрители узнают историю взаимоотношений отца и дочери, тесно-переплетенную с автомобилем и нуждающуюся в самостоятельном осмыслении. 
      <br />
      В ходе спектакля авторка исследует главный объект памятования и смещает фокус внимания с автомобиля на образ отца.
    </>,
    disc: 'Для тех, кто готов сесть в машину и наблюдать.',
    creators: 'Дарья Савельева',
    shows: [
      {
        date: '24 сентября, пт',
        time: '',
        otherText: <>Регистрация откроется 15 сентября. Мы напомним о ней в рассылке: <Link to='https://forms.gle/ujLTRP8pGWSz8iD1A'>подпишитесь</Link>.</>,
      },
    ],
  },
  {
    name: 'Русское поле экспериментов',
    age: 18,
    short: 'Перформанс с любовью к Омску',
    desc: '',
    disc: 'Для тех, кто готов провести вечер в поле.',
    creators: 'Анастасия Быцань, Марина Бурдинская и Вацлав Дембовский',
    shows: [
      {
        date: '25 сентября, сб',
        time: '',
        otherText: <>Регистрация откроется 15 сентября. Мы напомним о ней в рассылке: <Link to='https://forms.gle/ujLTRP8pGWSz8iD1A'>подпишитесь</Link>.</>,
      },
    ],
  },
  {
    name: '',
    age: 16,
    desc: '',
    disc: '',
    creators: '',
    shows: [
      {
        date: '',
        time: '',
        registerLink: '',
      },
    ],
  },
]


export default schedule