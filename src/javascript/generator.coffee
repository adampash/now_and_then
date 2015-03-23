$ = require 'jquery'

$('#embed, input').on 'click', ->
  @select()

$('input').on 'keyup', ->
  img1 = $('#img1').val()
  img2 = $('#img2').val()

  url = "http://adampash.com/now_and_then/?img1=#{img1}&img2=#{img2}"
  $('.url a').attr('href', url).text(url)
  iframe = """
    <iframe class="custom" style="border:none;" src="#{url}" height="265" width="636">
    </iframe>
  """
  $('#embed').val(iframe)

