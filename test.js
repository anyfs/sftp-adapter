'use strict';

var AnyFS = require('anyfs');
var Adapter = require('./');

var ssh2 = require('ssh2');
var Server = ssh2.Server;

// server
new Server({
    privateKey: "hello",
})
var server = new Server();

server.init({
    user: "test",
    pass: "test",
    port: 3334,
});

var adapter = new Adapter({
    host: "localhost",
    user: "test",
    pass: "test",
    port: 3334,
});

var fs = new AnyFS(adapter);

// wait for FTP server
AnyFS.test(fs, {
    delay: 1000,
});
