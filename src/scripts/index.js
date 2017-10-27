'use strict';

if (module.hot) {
  module.hot.accept();
}

// Import modules
import 'babel-polyfill';
import '../styles/index.scss';
import angular from 'angular';
import angularroute from 'angular-route';
import instagramSearchDataService from './services/instagramSearchDataService';
import instagramService from './services/instagramFactory';
import sliderInstaFeed from './directives/sliderInstaFeed';

// Define the templates 
var homeView = require('raw-loader!./views/home.html');
var contactView = require('raw-loader!./views/contact.html');
var portfolioView = require('raw-loader!./views/portfolio.html');

// Bootstrap the app
var app = angular.module('buroka', [
  "ngRoute"
]);

app.service('instagramSearchDataService', instagramSearchDataService);
app.factory('instagramService', instagramService);
app.directive('sliderInstaFeed', sliderInstaFeed);

