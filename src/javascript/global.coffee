# Browserify entry point for the global.js bundle (yay CoffeeScript!)

Test = require './test'

console.log Test.init()

console.log 'global.js loaded!'
