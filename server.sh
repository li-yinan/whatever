#!/bin/sh
cd app;
edp ws start &
cd -
open http://localhost:8848;
