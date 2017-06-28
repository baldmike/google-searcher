  
$(document).ready(function () {

  var $q = $('input[name="q"]');
  var $form = $('form');

  $form.submit(function (event) {
    var shouldSubmit = confirm('Leave Page?');
    if (!shouldSubmit) {
      event.preventDefault();
    }
  });
  
  $('#clear').click(function () {
    $q.val('');
  });

  $('#lucky').click(function () {
    $q.val(randomWord());
    $form.submit();
  });

$('#news').click(function() {
  $tbm.val('nws');
})


function randomWord() {
  var words=['kittens', 'puppies', 'peace', 'love', 'joy', 'happiness', 'dance', 'clap', 'sing', 'fart']
  var randNum = Math.floor((Math.random()*10)+1);

  var randWord = words[randNum]; 
  console.log(randWord);
  return randWord;

}










});
