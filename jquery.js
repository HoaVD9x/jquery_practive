$(function() {
console.log("ready")

$(".button_test1").on("click", function() {
  $(".test").toggle();
});

$(".button_test2").on("click", function() {
  $(".test2").text("VUONG DINH HOA").toggle();
});

$(".button_test3").on("click", function() {

  var a = +$(".value1").val();

  var b = +$(".value2").val();

  var c = a + b ;
  $(".value3").val(c);
});
});

