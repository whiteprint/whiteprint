#! /usr/bin/env node

var copyfiles = require("copyfiles");

var dest = "whiteprint";

copyfiles(["node_modules/@whiteprint/components/dist/components.css", dest + "/css"], true, function (err) {
    if (err) console.error(err);
});

copyfiles(["node_modules/@whiteprint/components/dist/components.js", dest + "/js"], true, function (err) {
    if (err) console.error(err);
});

copyfiles(["node_modules/@whiteprint/placeholders/placeholders.css", dest + "/css"], true, function (err) {
    if (err) console.error(err);
});

copyfiles(["node_modules/@whiteprint/placeholders/placeholders.js", dest + "/js"], true, function (err) {
    if (err) console.error(err);
});
