function addListItem(e) {
  e.preventDefault();
  var formData = $('form').serializeArray();
  if(!formData[0].value == '') {
    $('.comment-insert').append("<div class='item'><p class='formData'>" + formData[0].value + "</p>" + "<button class='deleteButton'>Delete</button" + "</div>");
    $('input')[0].value = '';
    $(document).on('click', '.deleteButton', function() {
        $(this).parent().remove();
    });
  $('input').focus();
  }
}

$(document).ready(function() {
  $('form').submit(addListItem);
})
