#!/bin/sh
grunt build;
cp -r dist/ ../app/www;
cd ../app;
phonegap run $1;
cd -;
