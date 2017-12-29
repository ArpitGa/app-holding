import express from 'express';
import serverRenderer from './serverRenderer';

const app = express();
const port = process.env.port || 8080;

app.use(express.static('public'))

app.get('/', (req, res) => {
  const renderer = new serverRenderer();
  renderer.route(req, res);
})


app.get('/_status', (req, res) => {
  res.send('ok');
});

app.listen(port, () => {
  console.log("App holding server started", port);
});
