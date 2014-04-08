#!/bin/sh
grunt build;
cp -r dist/ ../app/www;
cd ../app;
phonegap build android;
cd -;
cp ../app/platforms/android/bin/NingGuoSheQu-debug.apk ./app.apk
open .
