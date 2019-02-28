#!/usr/bin/env bash

echo Generating static files
yarn generate

# https://github.com/indexzero/http-server#readme
echo Starting http server
http-server ./dist