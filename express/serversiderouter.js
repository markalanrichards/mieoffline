import { renderToString } from 'react-dom/server'
import { match, RoutingContext } from 'react-router'
import React from 'react'
import routes from '../src/js/routes'
import ReactDOM from 'react-dom/server';




export default function (req, res) {

  // the original request, including the query string.
  match({ routes, location: req.url }, (error, redirectLocation, renderProps) => {
    if (error) {
      res.status(500).send(error.message)
    } else if (redirectLocation) {
      res.redirect(302, redirectLocation.pathname + redirectLocation.search)
    } else if (renderProps) {
      res.status(200).send('<!DOCTYPE html><html><body><div id="main">' + renderToString(<RoutingContext {...renderProps} /> )+ '</div></body></html>')
    } else {
      res.status(404).send('Not found')
    }
  })
};