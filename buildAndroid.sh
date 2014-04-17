#!/bin/sh
grunt build;
cp -r dist/ ../app/www;
#cp -r app/ ../app/www;
cd ../app;
phonegap build android;
cd -;
cp ../app/platforms/android/bin/NingGuoSheQu-debug.apk ./app.apk
open .
