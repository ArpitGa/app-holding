const nodemailer = require('nodemailer');

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

var mailOptions = {
  from: 'mainak_1992@yahoo.com',
  to: 'mainak92@gmail.com',
  subject: 'test',
  text: 'Hello World'
}

transport.sendMail(mailOptions, function (err, res) {
  if(err){
    console.log(err);
  }
  else {
    console.log("Email sent");
    console.log(res);
  }
})