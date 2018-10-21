# Way2SmsApi
## Send SMS from http://www.way2sms.com


### Enter your account credentials, receivers mobile no. and message.

## Create an account:
http://www.way2sms.com/user-registration

## How to use:
```
REQUEST @POST 

https://mysterious-depths-46844.herokuapp.com/api/send
```

## Parameters:
```
1. mobile (receivers)
2. msg    (message)
3. user   (registered mobile no.)
4. pass   (password)
```

## JSON Response:
```
@SUCCESS

{
    "status": "Success",
    "To": "94XXXXXXXX",
    "Message": "Hello World!",
    "log": "Send"
}

@FAIL

{
    "status": "Fail",
    "To": "None",
    "Message": "None",
    "log": "Error"
}
```
