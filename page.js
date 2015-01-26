(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({"./src/javascript/page.coffee":[function(require,module,exports){
var JXSlider, imgs, params, search, slider;

search = location.search.substring(1);

params = JSON.parse('{"' + decodeURI(search).replace(/"/g, '\\"').replace(/&/g, '","').replace(/\=/g, '":"') + '"}');

imgs = [
  {
    src: params.img1
  }, {
    src: params.img2
  }
];

JXSlider = juxtapose.JXSlider;

slider = new JXSlider('#images', imgs, {
  animate: true,
  showLabels: false,
  showCredits: false,
  startingPosition: "50%"
});

console.log('page.js loaded!');



},{}]},{},["./src/javascript/page.coffee"])
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyaWZ5L25vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCIvVXNlcnMvYXAvY29kZS9sYWJzL2ludGVyYWN0aXZlcy9ub3dfYW5kX3RoZW4vc3JjL2phdmFzY3JpcHQvcGFnZS5jb2ZmZWUiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7QUNBQSxJQUFBLHNDQUFBOztBQUFBLE1BQUEsR0FBUyxRQUFRLENBQUMsTUFBTSxDQUFDLFNBQWhCLENBQTBCLENBQTFCLENBQVQsQ0FBQTs7QUFBQSxNQUNBLEdBQVMsSUFBSSxDQUFDLEtBQUwsQ0FBVyxJQUFBLEdBQU8sU0FBQSxDQUFVLE1BQVYsQ0FBaUIsQ0FBQyxPQUFsQixDQUEwQixJQUExQixFQUFnQyxLQUFoQyxDQUFzQyxDQUFDLE9BQXZDLENBQStDLElBQS9DLEVBQXFELEtBQXJELENBQTJELENBQUMsT0FBNUQsQ0FBb0UsS0FBcEUsRUFBMEUsS0FBMUUsQ0FBUCxHQUEwRixJQUFyRyxDQURULENBQUE7O0FBQUEsSUFHQSxHQUFPO0VBQUM7QUFBQSxJQUFDLEdBQUEsRUFBSyxNQUFNLENBQUMsSUFBYjtHQUFELEVBQXFCO0FBQUEsSUFBQyxHQUFBLEVBQUssTUFBTSxDQUFDLElBQWI7R0FBckI7Q0FIUCxDQUFBOztBQUFBLFFBS0EsR0FBVyxTQUFTLENBQUMsUUFMckIsQ0FBQTs7QUFBQSxNQU9BLEdBQWEsSUFBQSxRQUFBLENBQVMsU0FBVCxFQUFvQixJQUFwQixFQUNSO0FBQUEsRUFBQSxPQUFBLEVBQVMsSUFBVDtBQUFBLEVBQ0EsVUFBQSxFQUFZLEtBRFo7QUFBQSxFQUVBLFdBQUEsRUFBYSxLQUZiO0FBQUEsRUFHQSxnQkFBQSxFQUFrQixLQUhsQjtDQURRLENBUGIsQ0FBQTs7QUFBQSxPQWNPLENBQUMsR0FBUixDQUFZLGlCQUFaLENBZEEsQ0FBQSIsImZpbGUiOiJnZW5lcmF0ZWQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uIGUodCxuLHIpe2Z1bmN0aW9uIHMobyx1KXtpZighbltvXSl7aWYoIXRbb10pe3ZhciBhPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7aWYoIXUmJmEpcmV0dXJuIGEobywhMCk7aWYoaSlyZXR1cm4gaShvLCEwKTt2YXIgZj1uZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiK28rXCInXCIpO3Rocm93IGYuY29kZT1cIk1PRFVMRV9OT1RfRk9VTkRcIixmfXZhciBsPW5bb109e2V4cG9ydHM6e319O3Rbb11bMF0uY2FsbChsLmV4cG9ydHMsZnVuY3Rpb24oZSl7dmFyIG49dFtvXVsxXVtlXTtyZXR1cm4gcyhuP246ZSl9LGwsbC5leHBvcnRzLGUsdCxuLHIpfXJldHVybiBuW29dLmV4cG9ydHN9dmFyIGk9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtmb3IodmFyIG89MDtvPHIubGVuZ3RoO28rKylzKHJbb10pO3JldHVybiBzfSkiLCJzZWFyY2ggPSBsb2NhdGlvbi5zZWFyY2guc3Vic3RyaW5nKDEpXG5wYXJhbXMgPSBKU09OLnBhcnNlKCd7XCInICsgZGVjb2RlVVJJKHNlYXJjaCkucmVwbGFjZSgvXCIvZywgJ1xcXFxcIicpLnJlcGxhY2UoLyYvZywgJ1wiLFwiJykucmVwbGFjZSgvXFw9L2csJ1wiOlwiJykgKyAnXCJ9JylcblxuaW1ncyA9IFt7c3JjOiBwYXJhbXMuaW1nMX0sIHtzcmM6IHBhcmFtcy5pbWcyfV1cblxuSlhTbGlkZXIgPSBqdXh0YXBvc2UuSlhTbGlkZXJcblxuc2xpZGVyID0gbmV3IEpYU2xpZGVyKCcjaW1hZ2VzJywgaW1ncyxcbiAgICAgYW5pbWF0ZTogdHJ1ZVxuICAgICBzaG93TGFiZWxzOiBmYWxzZVxuICAgICBzaG93Q3JlZGl0czogZmFsc2VcbiAgICAgc3RhcnRpbmdQb3NpdGlvbjogXCI1MCVcIlxuKVxuXG5jb25zb2xlLmxvZygncGFnZS5qcyBsb2FkZWQhJylcbiJdfQ==
