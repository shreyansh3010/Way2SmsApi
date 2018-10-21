const way2sms = require('way2sms');

var express = require('express')

const port = process.env.PORT || 3000;

var app = express()

var bodyParser = require('body-parser');
app.use(bodyParser.json()); 
app.use(bodyParser.urlencoded({ extended: true })); 

app.post('/api/send', function(req, res) {
    var mobile = req.body.mobile;
    var mess = req.body.mess;
    var user = req.body.user;
    var pass = req.body.pass;

    const start = async function() {
    cookie = await way2sms.login(user.toString(), pass.toString);
    await way2sms.send(cookie, mobile.toString(), mess.toString());
    }
    start()
    
        console.log(mobile+' '+mess);
        res.send('Sent');
});
 
app.listen(port)