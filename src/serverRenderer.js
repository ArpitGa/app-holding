import React from 'react'
import {renderToString} from 'react-dom/server'
import buildManifest from '../public/build-manifest.json'
import Page from '../browser'
let memcache = "";

class ServerRenderer {

  route (req, res) {
    const start = new Date();
    let dom = "";
    if (memcache == "")  {
      dom = renderToString(<Page />)
      memcache = dom;
    } else {
      dom = memcache;
    }
    const end = new Date();
    const diff = end - start;
    console.log("Render time in milliseconds : " + diff);
    this.renderPage(req, res, dom);
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
            <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.2.1/jquery.min.js"></script>
            <script src="https://cdnjs.cloudflare.com/ajax/libs/materialize/0.100.2/js/materialize.min.js"></script>
            <script type="text/javascript">
              $(document).ready(function() {
                console.log("ready");
                $(".button-collapse").sideNav();
              });

              $(document).ready(function(){
                $('.slider').slider();
                $('.slider').slider('pause');
                $('.slider').slider('start');
                $('.slider').slider('next');
                $('.slider').slider('prev');
              });

              $(document).ready(function(){
                console.log("reeree");
                $('.carousel').carousel();
              });

            </script>
            <script type="text/javascript" src="/utils/scroller.js"></script>
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
