#! /usr/bin/env node

var copyfiles = require("copyfiles");

var dest = "./";

copyfiles(["./node_modules/whiteprint/prototype.css", dest + "/css"], true, function (err) {
    if (err) console.error(err);
});

copyfiles(["./node_modules/whiteprint/prototype.js", dest + "/js"], true, function (err) {
    if (err) console.error(err);
});
