import React from 'react'

import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom'

import { Provider } from './components/Store'
import Helmet from './components/Helmet'
import Header from './components/Header'
import Footer from './components/Footer'
import routes from './utils/routes'
import ScrollToTop from './components/ScrollToTop'

import './style/index.sass'
import Background from './components/Background'


const App = () =>
  <Router>
    <Provider>
    {/* <Loader /> */}
      <div className='App'>
        <Background />
        <ScrollToTop>
          <Helmet />
          <Header />
          <div className='flex-grow-1'>
            <Switch>
              {routes.map(route =>
                <Route
                  key={route.to}
                  path={route.to}
                  exact={route.exact}
                >
                  {route.Comp}
                </Route>
              )}
            </Switch>
          </div>
          <Footer />
        </ScrollToTop>
      </div>
    </Provider>
  </Router>


export default App
