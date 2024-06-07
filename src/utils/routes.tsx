import React from 'react'

import Home from '../pages/Home'
import Error404 from '../pages/Error404'


type Route = {
  to: string
  Comp: any
  exact?: boolean
}


const routes: Route[] = [
  {
    exact: true,
    to: "/*",
    Comp: <Home />
  },

  {
    to: "/",
    Comp: <Error404 />
  },
]


export default routes