var JXSlider = juxtapose.JXSlider
slider = new JXSlider('#images',
    [
    {
      src: 'http://i.kinja-img.com/gawker-media/image/upload/re0bhxxfbd7npnguebaa.jpg',
       label: '2009',
    },
    {
      src: 'http://i.kinja-img.com/gawker-media/image/upload/ne7h40kjb0eruwyvqxzv.jpg',
       label: '2014',
    }
    ],
    {
      animate: true,
       showLabels: false,
       showCredits: false,
       startingPosition: "50%"
    });


console.log('page.js loaded!');
