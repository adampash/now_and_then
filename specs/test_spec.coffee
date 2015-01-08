Test = require '../src/javascript/test.coffee'

describe "A thing", ->
  it "is true or false", ->
    expect(true).toBe true
    expect(Test.init()).toEqual 'okay'
