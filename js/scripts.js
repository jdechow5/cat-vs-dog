$(document).ready(function () {
  $("#dog-image").click(function () {
    $("#dog-talk").prepend("<h6>WOOF</h6>");
  });
  $("#cat-image").click(function () {
    $("#cat-talk").prepend("<h6>MEOW</h6>");
  });

  $("#formOne").submit(function (event) {
    event.preventDefault();
    // const person1Input = $("input#person1").val();
    // const person2Input = $("input#person2").val();
    const animalInput = $("input#animal").val();
    const exclamationInput = $("input#exclamation").val();
    const verbInput = $("input#verb").val();
    const nounInput = $("input#noun").val();

    $(".person1").text($("input#person1").val());
    $(".person2").text($("input#person2").val());
    $(".animal").text(animalInput);
    $(".exclamation").text(exclamationInput);
    $(".verb").text(verbInput);
    $(".noun").text(nounInput);

    $("#story").show();
  });

});