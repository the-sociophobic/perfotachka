import React from 'react'

import { withRouter } from 'react-router-dom'
import { RouteComponentProps } from 'react-router'
import ResizeObserver from 'resize-observer-polyfill'
import { format } from 'date-fns'
import { ru } from 'date-fns/locale'
import { debounce } from 'debounce'

import { Day } from './Store/Types'
import { Context } from './Store'


type Props = RouteComponentProps<{
  param1: string,
}>
type State = {
  scrollY: number
  containerWidth: number
}


class Header extends React.Component<Props, State> {
  state: State = {
    scrollY: 0,
    containerWidth: 0
  }

  static contextType = Context
  containerRef: any = React.createRef()
  resizeObs: any

  componentDidMount = () => {
    window.addEventListener('scroll', this.debouncedHandleScroll.bind(this))
    this.resizeObs = new ResizeObserver(this.updateContentHeight.bind(this))
      .observe(this.containerRef.current)
  }

  componentWillUnmount = () =>
    window.removeEventListener('scroll', this.debouncedHandleScroll.bind(this))

  updateContentHeight = () =>
    this.setState({
      containerWidth: this?.containerRef?.current?.clientWidth || 0
    })

  handleScroll = (e: any) =>
    e?.currentTarget?.scrollY &&
      this.setState({ scrollY: e.currentTarget.scrollY })

  debouncedHandleScroll =
    // debounce(this.handleScroll.bind(this), 55)
    this.handleScroll.bind(this)

  isDesktop = () => 
    this.state.containerWidth >= 744

  getWidth = () =>
    this.isDesktop() ?
     this.state.containerWidth / 5
     :
     this.state.containerWidth

  scrollTo = (index: number) =>
    (index >= 0 && index < this.getLinks().length)
      && this.getLinks()[index]?.ref?.current?.scrollIntoView()

  getLinks = () => {
    const links = [
      {
        ref: this.context.homeRef,
        label: 'ПЕРФОТАЧКА'
      },
      {
        ref: this.context.aboutRef,
        label: 'ЧТО ЭТО ?'
      },
      {
        ref: this.context.QandARef,
        label: 'ВОПРОС ОТВЕТ'
      },
      ...this.context.days
        .slice(this.context.filteringIndex)
        .map((day: Day) => ({
          ref: day.ref,
          label: format(day.date, this.isDesktop() ? 'dd MMMM' : 'dd MMMM', { locale: ru })
        })),
      {
        ref: this.context.titlesRef,
        label: 'МЫ'
      },
      {
        label: ''
      },
  ]

    return !this.isDesktop() ?
      links
      :
      [
        {
          label: ''
        },
        {
          label: ''
        },
        ...links,
      ]
  }

  getCurrentIndex = () => {
    const links = this.getLinks()

    for (let i = 0; i < links.length - 1; i++) {
      const link = links[i]
      const nextLink = links[i + 1]

      if (!link?.ref?.current?.offsetTop || !nextLink?.ref?.current?.offsetTop)
        continue
      if (this.state.scrollY >= link?.ref?.current?.offsetTop
        && this.state.scrollY < nextLink?.ref?.current?.offsetTop)
        return i
    }

    return this.isDesktop() ? 2 : 0
  }

  render = () =>
    <header className='Header'>
      <div
        ref={this.containerRef}
        className='container position-relative d-flex flex-row'
      >
        <div
          className='Header__button Header__button--prev'
          onClick={() => this.scrollTo(this.getCurrentIndex() - 1)}
        />
        <div
          className='Header__button Header__button--next'
          onClick={() => this.scrollTo(this.getCurrentIndex() + 1)}
        />
        {this.getLinks().map((link, index) =>
          <div
            className={`Header__link ${this.getCurrentIndex() === index && 'Header__link--active'}`}
            style={{ width: this.isDesktop() ?
              index >= this.getCurrentIndex() - 2 && index <= this.getCurrentIndex() + 2 ?
                this.getWidth()
                :
                0
              :
              index === this.getCurrentIndex() ?
                this.getWidth()
                :
                0
            }}
            onClick={() => this.scrollTo(index)}
          >
            {link.label}
          </div>
        )}
      </div>
    </header>
}


export default withRouter(Header)