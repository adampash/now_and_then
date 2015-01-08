module.exports = (config) ->
  config.set
    browsers: ['Chrome']
    frameworks: ['browserify', 'jasmine']
    files: [
      'src/**/*.coffee',
      'specs/**/*spec.coffee'
    ]
    preprocessors:
      '**/*.coffee': ['browserify']

    # browserify:
      # debug: true
      # transform: ['coffeeify']
      # extensions: ['.coffee']
