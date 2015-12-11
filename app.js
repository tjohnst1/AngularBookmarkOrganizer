var app = angular.module('Bookmarks', [])

app.controller('MainCtrl', function(){
  this.categories = [
    {"id": 0, "name": "Development"},
    {"id": 1, "name": "Design"},
    {"id": 2, "name": "Excercise"},
    {"id": 3, "name": "Soccer"}
  ];

  this.bookmarks = [
    {"id": 0, "title": "Soccer Game History Page", "url": "http://angular.js", "category": "Soccer"},
    {"id": 1, "title": "Development History Page", "url": "http://angular.js", "category": "Development"},
    {"id": 2, "title": "Design History Page", "url": "http://angular.js", "category": "Design"},
    {"id": 2, "title": "Design History Page", "url": "http://materialup.com", "category": "Design"},
    {"id": 3, "title": "Gym Listings", "url": "http://angular.js", "category": "Excercise"},
    {"id": 4, "title": "YMCA", "url": "http://angular.js", "category": "Excercise"},
    {"id": 5, "title": "FIFA", "url": "http://angular.js", "category": "Soccer"}
  ];
});
