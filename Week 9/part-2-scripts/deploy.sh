#!/bin/bash
export PATH=$PATH:/home/ubuntu/.nvm/versions/node/v20.5.0/bin

cd Week-9
 cd server
 pm2 kill
 pm2 start index.js
