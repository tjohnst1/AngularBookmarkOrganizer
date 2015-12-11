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

  // Categories //
  this.currentCategory = "";
  this.setCategory = function(category){
    this.currentCategory = category;
  };
  this.isCurrentCategory = function(category){
    return (this.currentCategory === category) && (this.currentCategory !== "")
  }
  this.clearCategories = function(){
    this.currentCategory = "";
  }

  // Editing & Creating Bookmarks //
  this.creatingBookmark = false;
  this.editingBookmark = false;
  this.createNew = true;

  this.startCreatingBookmark = function(){
    this.creatingBookmark = true;
    this.editingBookmark = false;
    this.createNew = false;
  };

  this.startEditingBookmark = function(){
    this.creatingBookmark = false;
    this.editingBookmark = true;
    this.createNew = false;
  };

  this.shouldShowCreating = function(){
    return this.currentCategory && (this.creatingBookmark === true)
  };

  this.shouldShowEditing = function(){
    return this.currentCategory && (this.editingBookmark === true)
  };

  this.cancelForm = function(){
    this.creatingBookmark = false;
    this.editingBookmark = false;
    this.createNew = true;
  };

});
