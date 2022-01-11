$(document).ready(function () {
  $("#dog-image").click(function () {
    $("#dog-talk").prepend("<h6>WOOF</h6>");
  });
  $("#cat-image").click(function () {
    $("#cat-talk").prepend("<h6>MEOW</h6>");
  });

});