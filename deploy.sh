#!/bin/sh
grunt build;
cp -r dist ../app/www;
cd ../app;
phonegap build ios;
cd -;
