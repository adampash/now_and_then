$ = require 'jquery'

$('#embed, input').on 'click', ->
  @select()

$('input').on 'keyup', ->
  img1 = $('#img1').val()
  img2 = $('#img2').val()
  start = $('#start-position').val()

  url = "http://gawker-labs.com/slider/?img1=#{img1}&img2=#{img2}&start=#{start}"
  img = $("<img style=\"display:none;\" width=\"636\">").attr('src', img1)
  img.on 'load', ->
    height = $(@).height()
    iframe = """
      <iframe class="custom aspect editorial_labs_image_slider" src="#{url}" height="#{height}" width="636">
      </iframe>
    """
    $('#embed').val(iframe)
    $('.preview').html(iframe)
  $('body').append(img)
