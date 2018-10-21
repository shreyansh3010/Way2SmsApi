const way2sms = require('way2sms');

var express = require('express')

const port = process.env.PORT || 3000;

var app = express()

var bodyParser = require('body-parser');
app.use(bodyParser.json()); 
app.use(bodyParser.urlencoded({ extended: true })); 

const start = async function(user,pass,mobile,msg) {
    cookie = await way2sms.login(user, pass);
    return await way2sms.send(cookie, mobile, msg);
}

app.post('/api/send', function(req, res) {
    var mobile = req.body.mobile;
    var msg = req.body.msg;
    var user = req.body.user;
    var pass = req.body.pass;
    if(start(user.toString(),pass.toString(),mobile.toString(),msg.toString())){
        res.format({
            'application/json': function(){
               res.send({ status: 'Success', To: mobile.toString(), Message: msg.toString(), log: 'Send'});
            }
         });
    }
    else{
        res.format({
            'application/json': function(){
               res.send({ status: 'Fail', To: 'None', Message: 'None', log: 'Error'});
            }
         });
    }
});
 
app.listen(port, () => {
    console.log('Server is up on port '+port);
});