const Koa = require('koa')
const serve = require('koa-static')

const app = new Koa()

app.use((ctx) => {
  ctx.body = `
  <!DOCTYPE html>
  <html lang="en">
    <head>
      <meta charset="utf-8" />
      <link rel="icon" href="/favicon.ico" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta name="theme-color" content="#533153" />
      <meta
        name="description"
        content="Web site created using create-react-app"
      />
      <link rel="apple-touch-icon" href="/logo192.png" />
      <!--
        manifest.json provides metadata used when your web app is installed on a
        user's mobile device or desktop. See https://developers.google.com/web/fundamentals/web-app-manifest/
      -->
      <link rel="manifest" href="/manifest.json" />
      <!--
        Notice the use of %PUBLIC_URL% in the tags above.
        It will be replaced with the URL of the \`public\` folder during the build.
        Only files inside the \`public\` folder can be referenced from the HTML.
  
        Unlike "/favicon.ico" or "favicon.ico", "%PUBLIC_URL%/favicon.ico" will
        work correctly both with client-side routing and a non-root public URL.
        Learn how to configure a non-root public URL by running \`npm run build\`.
      -->
      <title>Lilac</title>
      <script defer="defer" src="http://127.0.0.1:3000/static/js/bundle.js"></script>
    </head>
    <body>
      <noscript>You need to enable JavaScript to run this app.</noscript>
      <div id="root"></div>
      <!--
        This HTML file is a template.
        If you open it directly in the browser, you will see an empty page.
  
        You can add webfonts, meta tags, or analytics to this file.
        The build step will place the bundled scripts into the <body> tag.
  
        To begin the development, run \`npm start\` or \`yarn start\`.
        To create a production bundle, use \`npm run build\` or \`yarn build\`.
      -->
    </body>
  </html>
  `
});

app.use(serve(`${__dirname}/../../public`))

app.listen(3001)