$(function() {
  $("form#new_task").live("submit", function(event) {
    event.preventDefault();
    event.stopPropagation();

    $.post($(this).prop('action'), $(this).serialize(), function(data) {
      $(".tasks").append(data);
      $("#title_input").val("");
    });

    return false;
  });

  $(".tasks ul a")
});
