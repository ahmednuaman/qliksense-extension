# Qlik Sense Extension
A simple boilerplate for writing Qlik Sense extensions in Javascript

## What is this for? 
I find developing directly on the Qlik Sense hub frustrating (sorry, not sorry). So I decided to create a simple 
foundation that achieved a number of things:

1. Allowed a developer to create extensions in cool hipster ES6/2015/Next/+
2. Allowed a developer to write their code in an extensible fashion
3. Made testing _easy_
4. Works out the box
5. Allows for local debugging without using Hub

## How do I use it?
1. Clone this repo
2. Open your terminal, `cd` into the repo, and run `npm install`
3. Open `src/js/app.js`; if you want to use Angular then comment out the jQuery bit, and vice versa
4. Run `npm start` and start developing
5. When you want to deploy run `npm run deploy` and a .zip file will be created at the repo's build folder
