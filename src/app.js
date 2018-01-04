import express from 'express';
import serverRenderer from './serverRenderer';
import nodemailer from 'nodemailer';

const app = express();
const port = process.env.port || 3000;

var transport = nodemailer.createTransport({
  service: 'gmail',
  secure: false,
  port: 25,
  auth: {
      user: 'lvhholdings.dev@gmail.com',
      clientId: '1055179878697-4dg2o9ovh2lfj91eljr732fadlcet3b8.apps.googleusercontent.com',
      clientSecret: 'ezTTzzR6JdX4AjDXlpJBlqJc',
      refreshToken: '1/-9Xn9Jyo_YoMfy6Q_2XiO4-_pEqG5iTO8Fv4cr6ZNUQ',
      pass: 'Tesco@2011'
  },
  tls: {
    rejectUnauthorized: false
  }
});

app.use(express.static('public'))

app.get('/', (req, res) => {
  const renderer = new serverRenderer();
  renderer.route(req, res);
})


app.get('/_status', (req, res) => {
  res.send('ok');
});

app.get('/send',function(req,res){
console.log(req.query);
var mailOptions={
   to : req.query.to,
   subject : req.query.subject,
   text : "Customer Name: " + req.query.name + "\n" +
   		  "Customer Phone: " + req.query.phone + "\n" +
   		  "Customer Query: " + req.query.text + "\n" + "\n" + "\n" +
   		  "If you want to respond to the customer please reply to customer's emails at : " + req.query.email
}
console.log(mailOptions);
transport.sendMail(mailOptions, function(error, response){
if(error){
console.log(error);
res.end("error");
}else{
console.log("Message sent: " + response.message);
res.end("sent");
}
});
});

app.listen(port, () => {
  console.log("App holding server started", port);
});
