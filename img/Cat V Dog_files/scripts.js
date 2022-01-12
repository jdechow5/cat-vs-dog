$(document).ready(function () {
  $("#dog-image").click(function () {
    $("#dog-talk").prepend("<h6>WOOF</h6>");
  });
  $("#cat-image").click(function () {
    $("#cat-talk").prepend("<h6>MEOW</h6>");
  });

  $("#formOne").submit(function () {
    $(".person1").append("blah blah");
    $(".person2").append("blah blah");
    $(".animal").append("blah blah");
    $(".exclamation").append("blah blah");
    $(".verb").append("blah blah");
    $(".noun").append("blah blah");

    $("#story").show();
  });

});