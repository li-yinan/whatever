#!/bin/sh
cd app;
nohup edp ws start;
cd -
open http://localhost:8848;
