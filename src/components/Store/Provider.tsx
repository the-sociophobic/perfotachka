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


const _setState = (_this: any, obj: any) => {
  _this.setState(obj)
  //TODO send async post
}


class Provider extends React.Component<Props, StateType> {

  state = {
    ...initialState,
    locale: (new URLSearchParams(this.props.location.search)).get('en') === '' ? 'eng' : 'rus'
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
      setState: (obj: any) => _setState(this, obj),
  
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