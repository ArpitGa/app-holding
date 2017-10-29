import React from 'react'
import {renderToString} from 'react-dom/server'
import Page from '../browser'

class ServerRenderer {

  route (req, res) {
    const dom = renderToString(<Page />)
    this.renderPage(req, res, dom)
  }
  renderPage (req, res, dom) {
    if (!res.headersSent) {
      try {
        res.setHeader('Content-Type', 'text/html; charset=utf-8')
        const expires = new Date(new Date().getTime() + 3600000)
        res.setHeader('Cache-Control', 'public, max-age=3600, must-revalidate')
        res.setHeader('Expires', expires)
        res.send(`
        <!doctype html>
        <html lang="en-GB" class="no-js">
          <head>
            <title>Holding Company page</title>
            <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet">
            <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/materialize/0.100.2/css/materialize.min.css">
            <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
          </head>
          <body>
           <div id="main">
              ${dom}
            </div>
            <script type="text/javascript" src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.2.1/jquery.min.js"></script>
            <script src="https://cdnjs.cloudflare.com/ajax/libs/materialize/0.100.2/js/materialize.min.js"></script>
          </body>
        </html>
        `)
      } catch (err) {
        console.log('Exception in rendering page');
      }
    }
  };
}

export default ServerRenderer
