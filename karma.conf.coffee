module.exports = (config) ->
  config.set
    browsers: ['ChromeCanary']
    frameworks: ['browserify', 'jasmine']
    files: [
      'src/**/*.coffee',
      'specs/**/*spec.coffee'
    ]
    preprocessors:
      '**/*.coffee': ['browserify']
      # 'src/**/*.coffee': ['coverage']
<<<<<<< HEAD
    # reporters: ['dots', 'coverage']
=======
    reporters: ['dots', 'coverage']

>>>>>>> Initial commit of a new project

    # browserify:
      # debug: true
      # transform: ['coffeeify']
      # extensions: ['.coffee']
