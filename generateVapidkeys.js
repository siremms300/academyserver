const webpush = require('web-push');

const vapidKeys = webpush.generateVapidKeys();
console.log(vapidKeys);
