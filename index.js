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

    const start = async function() {
    cookie = await way2sms.login('7073112280', '31121992');
    await way2sms.send(cookie, mobile.toString(), mess.toString());
    }
    start()
    
        console.log(mobile+' '+mess);
        res.send('Sent');
});
 
app.listen(port)