let $answers = $(".faq-container div");
let $questions = $("li.question");

$answers.hide();

$(".question").click(function() {
  $answers.slideUp(200);
  $questions.removeClass("minus");
  if ( $(this).next().is(":visible") ) {
    $(this).next().slideUp(200);
    $(this).removeClass("minus");
  } else {
    $(this).next().slideDown(200);
    $(this).addClass("minus");
  }
});
