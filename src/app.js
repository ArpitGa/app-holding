import express from 'express';

const app = express();
const port = process.env.port || 3000;

app.get('/_status', (req, res) => {
  res.send('ok');
});

app.listen(port, () => {
  console.log("App holding server started", port);
});
