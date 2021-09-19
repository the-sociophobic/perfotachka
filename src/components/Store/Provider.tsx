import React from 'react'

import _ from 'lodash'
// import Cookies from 'universal-cookie'
import { withRouter } from 'react-router-dom'
import { RouteComponentProps } from 'react-router'

import {
  StateType,
  initialState,
} from './Types'
import Context from './Context'


type Props = RouteComponentProps<{
  param1: string,
}>


class Provider extends React.Component<Props, StateType> {

  state = {
    ...initialState,
  }

  // cookies = new Cookies()
  initializeCallBacks: Function[] = []

  componentDidMount = () => {
  }

  registerInitializeCallback = (fn: Function) => {
    this.initializeCallBacks.push(fn)
    // this.state.contentfulData.length > 0 && fn()
    fn()
  }
  
  callInitializeCallbacks = () =>
    setTimeout(() =>
      this.initializeCallBacks
        .forEach((callback: Function) =>
          callback())
      , 100
    )

  stateAndSetters = () => {
    const nonState = {
      setState: (obj: any) => this.setState(obj),
  
      openPopup: () =>
        document.body.classList.add('overflow-hidden'),
      closePopup: () =>
        document.body.classList.remove('overflow-hidden'),
    
      registerInitializeCallback: this.registerInitializeCallback,
    }

    return ({
        ...(this.state.ready ? this.state : initialState),
        ...nonState
      })
  }

  render = () =>
    <Context.Provider value={this.stateAndSetters()}>
      {this.props.children}
    </Context.Provider>
}


export default withRouter(Provider)