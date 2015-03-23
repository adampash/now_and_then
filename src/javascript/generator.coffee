$ = require 'jquery'

$('#embed, input').on 'click', ->
  @select()

$('input').on 'keyup', ->
  img1 = $('#img1').val()
  img2 = $('#img2').val()

  url = "http://adampash.com/now_and_then/?img1=#{img1}&img2=#{img2}"
  img = $("<img style=\"display:none;\" width=\"636\">").attr('src', img1)
  img.on 'load', ->
    height = $(@).height()
    iframe = """
      <iframe class="custom" style="border:none;" src="#{url}" height="#{height}" width="636">
      </iframe>
    """
    $('#embed').val(iframe)
    $('.preview').html(iframe)
  $('body').append(img)
  # $('.url a').attr('href', url).text(url)

