search = location.search.substring(1)
params = JSON.parse('{"' + decodeURI(search).replace(/"/g, '\\"').replace(/&/g, '","').replace(/\=/g,'":"') + '"}')

imgs = [{src: params.img1}, {src: params.img2}]

JXSlider = juxtapose.JXSlider

slider = new JXSlider('#images', imgs,
     animate: true
     showLabels: false
     showCredits: false
     startingPosition: "50%"
)

console.log('page.js loaded!')
