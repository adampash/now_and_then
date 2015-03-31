# Browserify entry point for the global.js bundle (yay CoffeeScript!)

require './juxtapose.min.js'

search = location.search.substring(1)
params = JSON.parse('{"' + decodeURI(search).replace(/"/g, '\\"').replace(/&/g, '","').replace(/\=/g,'":"') + '"}')

imgs = [{src: params.img1}, {src: params.img2}]
startingPosition = params.start or 50

JXSlider = juxtapose.JXSlider

slider = new JXSlider('#images', imgs,
     animate: true
     showLabels: false
     showCredits: false
     startingPosition: startingPosition
)

console.log('page.js loaded!')
