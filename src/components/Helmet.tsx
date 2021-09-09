import React from 'react'

import { withRouter } from 'react-router-dom'
import { RouteComponentProps } from 'react-router'
import { Helmet as ReactHelmet } from 'react-helmet'

import { Context } from './Store'


type PathParamsType = {
  param1: string,
}


class Helmet extends React.Component<RouteComponentProps<PathParamsType>> {

  static contextType = Context

  render = () => {
    return (
      <ReactHelmet>
        <title>
          Фестиваль Перфотачки
        </title>
        <meta property="og:url" content={`https://perfobufet.ru`} />
        <meta property="og:title" content='Фестиваль Перфотачки' />
        <meta property="og:description" content='Самоорганизованной фестиваль, программа которого полностью собрана вокруг Перфотачки — серой Toyota Corolla 1987 года.' />
        <meta property="og:image" content={`https://sun9-53.userapi.com/impg/fgvSQrLlQ991adYtc4Z1R6Ho1C9NjzVYOMVmxQ/O6v8LRrnH78.jpg?size=1200x630&quality=96&sign=d542cf953592ff697e1f3569b458f8fd&type=album`} />
      </ReactHelmet>
    )
  }
}


export default withRouter(Helmet)