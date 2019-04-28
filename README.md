# sample-MEAN-app

This is a sample MEAN stack app which returns list of course items grouped by date

Foloow the steps given below to run the app in local machine

- Install mongoDB(optional), nodejs
  
  run the app without mongoDB by commenting lines mentioned in this file - https://github.com/jeffjohny/sample-MEAN-app/blob/master/kaplan-nodejs/server.js
- clone this repo
- then run 'cd kaplan-nodejs', 'npm install' and 'npm run dev'
- run 'cd ../kaplan-ui' 'npm install' and 'ng serve'
- open broswer with the following link - http://localhost:4200/list

if you are using mongoDB then run following command
- mongoimport --jsonArray --db test --collection docs --file channel.json (Here channel.json - https://github.com/jeffjohny/sample-MEAN-app/blob/master/channel.json)
- start mongoDB by running command 'mongod'
