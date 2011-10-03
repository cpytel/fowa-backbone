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

  $(".tasks li a").live("click", function(event) {
    event.preventDefault();
    event.stopPropagation();

    $.get($(this).prop('href'), null, function(data) {
      $(".index").hide().after(data);
    });

    return false;
  });

  $("a.back").live("click", function(event) {
    event.preventDefault();
    event.stopPropagation();

    $(".task").remove();
    $(".index").show();

    return false;
  });

  $("a.delete").live("click", function(event) {
    event.preventDefault();
    event.stopPropagation();

    $.ajax($(this).prop('href'), {
      data: { "_method": "DELETE" },
      success: function(data) {
        $(".task").remove();
        $(".index").show();
      },
      type: "POST"
    });

    return false;
  });
});
