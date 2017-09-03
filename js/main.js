function onDataReceived(data) {
  console.log(data);
  
  $('#quote').text(data.quote);
  $('#author').text(data.author);
}

$(document).ready(function() {
    $('#getQuote').click(function() {
      var url = 'https://random-quote-generator.herokuapp.com/api/quotes/random';
      $.get(url, onDataReceived);
    });
});


