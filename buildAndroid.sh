#!/bin/sh
grunt build;
cp -r dist/ ../app/www;
cd ../app;
phonegap build android;
cd -;
cp ../app/platforms/android/bin/exp-debug.apk .
mv exp-debug.apk app.apk
open .
