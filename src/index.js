require('module-alias/register');
var common              = require("@root/_base/common/common");
var PushNotifications   = require("node-pushnotifications");
var express             = require("express");
var app                 = express();

const settings = {
    gcm: {
        id: null,
        phonegap: false, // phonegap compatibility mode, see below (defaults to false)
    },
    apn: {
        token: {
            key: './certs/key.p8', // optionally: fs.readFileSync('./certs/key.p8')
            keyId: 'ABCD',
            teamId: 'EFGH',
        },
        production: false // true for APN production environment, false for APN sandbox environment
    },
    isAlwaysUseFCM: false
};

var push = new PushNotifications(settings);

var registrationIds = [];

console.log(common);

push.setOptions()

app.listen(3000, error => {
    if (error) console.log(error);
    console.log(`server running with: http://localhost:3000`);
})