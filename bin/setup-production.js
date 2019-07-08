#! /usr/bin/env node

var copyfiles = require("copyfiles");

var dest = "./";

copyfiles(["./node_modules/whiteprint/templates/gulpfile.js", dest], true, function (err) {
    if (err) console.error(err);
});

copyfiles(["./node_modules/whiteprint/templates/variables.css", dest + "/src/css"], true, function (err) {
    if (err) console.error(err);
});

copyfiles(["./node_modules/whiteprint/templates/styles.css", dest + "/src/css"], true, function (err) {
    if (err) console.error(err);
});

copyfiles(["./node_modules/@whiteprint/components/lib/*/[^_]*.css", dest + "/src/css/components"], true, function (err) {
    if (err) console.error(err);
});
