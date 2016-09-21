# Frontend Test Task ![AgileEngine logo](http://agileengine.com/wordpress/wp-content/uploads/2014/01/agileengine1.png)
This is a task for Frontend interview.
The goal is to build a live-search of music tracks using Spotify Search API. See useful links section for more info.
There're no limitations, so use your imagination for creating usable interface and any technology you're familiar with.
You can use one of the pre-installed frameworks for development or install the one you prefer and work with it.

## System requirements:
* [NPM v3.10](https://www.npmjs.com) or higher

## Setup and development instructions:
* Clone this repo
* Run `npm install` to setup all dependencies
* Run `npm start` to start the application. This command will open the app in your default browser
* Write your HTML code in `index.html`
* If you wish to use Bootstrap or Foundation, uncomment the needed tag in `index.html` (not recommended to uncomment both)
* You can write your styles using pure CSS, SASS or LESS. Just put the code in the related file in `css` folder
* The JS part goes in `js` folder, the root file is `app.js`. This is the place where your application starts from. Feel free to add new files/folders or write all the code in this file (HARDCORE!)
* Use `npm install` to install missing package you need
* Remember to `require()` the needed package or file

## Pre-installed libraries and frameworks:
* HTML
    * [Foundation](http://foundation.zurb.com/sites.html)
    * [Bootstrap](http://getbootstrap.com)
* CSS
    * [SASS](http://sass-lang.com)
    * [LESS](http://lesscss.org)
* JS
    * [ES6](https://babeljs.io/docs/learn-es2015/)
    * [Angular 1](https://angularjs.org)
    * [React](https://facebook.github.io/react/)
    * [Backbone](http://backbonejs.org)
    * [Knockout](http://knockoutjs.com)
    * [jQuery](https://jquery.com)
    
## Useful links:
* [Spotify Search API](https://developer.spotify.com/web-api/search-item)
* [Sample API response](https://api.spotify.com/v1/search?q=taylor+swift&type=track)
