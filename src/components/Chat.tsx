import React from 'react'

import Link from './Link'
import { perfotachkaChatLink } from '../utils/consts'


const Chat: React.FC = () =>
  <div className='Chat'>
    <Link to={perfotachkaChatLink}>
      Чатик
    </Link>
  </div>


export default Chat