#!/bin/sh
cd dist;
nohup edp ws start --port 7999;
cd -
open http://localhost:7999;
