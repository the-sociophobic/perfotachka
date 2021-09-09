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
      </ReactHelmet>
    )
  }
}


export default withRouter(Helmet)