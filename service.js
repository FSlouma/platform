var Service = require('node-windows').Service;
var svc = new Service({
    name: 'Platform_2',
    description: 'platform',
    script: 'C:\Work\platform\server.js'
});

svc.on('install', function () {
    svc.start();
});

svc.install();