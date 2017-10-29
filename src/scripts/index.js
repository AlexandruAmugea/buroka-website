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


$(document).ready(function () {
  $('#consultationForm').validate({
    messages: {
      name: "Please enter your name",
      phone: "Please enter phone number",
      email: "Please enter a valid email"
    }
  });

  $('#contactForm').validate({
    messages: {
      name: "Please enter your name",
      phone: "Please enter phone number",
      email: "Please enter a valid email",
      company: "Please enter your company name"
    }
  });

  $(".btn-cta-consultation").click(function () {
    $('html, body').animate({
      scrollTop: $("#form-consultation").offset().top
    }, 2000);
  });

  $('[data-toggle="tooltip"]').tooltip(
    { html: true }
  );
});





