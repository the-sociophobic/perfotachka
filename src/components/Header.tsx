import React from 'react'

// import _, { capitalize } from 'lodash'

import { withRouter } from 'react-router-dom'
import { RouteComponentProps } from 'react-router'

import { Context } from './Store'
import Link from './Link'


type Props = RouteComponentProps<{
  param1: string,
}>
type State = {
  opened: boolean
  scrollingUp: boolean
  // secondaryLinks: LinkObj[]
}


class Header extends React.Component<Props, State> {
  state: State = {
    opened: false,
    scrollingUp: false,
    // secondaryLinks: [],
  }

  static contextType = Context
  prev: any

  componentDidMount() {
  }

  componentDidUpdate = (prevProps: { location: Object }) => {
    if (this.props.location !== prevProps.location) {
      this.setState({ opened: false })
      this.context.closePopup()
    }
  }

  handleScroll = (e: any) => {
    const window = e.currentTarget

    if (this.prev > window.scrollY && window.scrollY > window.innerHeight) {
      this.setState({ scrollingUp: true })
    } else {
      this.setState({ scrollingUp: false })
    }
    this.prev = window.scrollY
  }

  renderHeader = (className?: string, children?: JSX.Element ) =>
    <header className={`Header`}>
    </header>

  render = () =>
    <>
      {this.renderHeader()}
      {this.renderHeader(`Header--fixed ${(this.state.scrollingUp) && "Header--fixed--show"}`)}
      {/* {this.renderOpenedMobileHeader()} */}
    </>
}


export default withRouter(Header)