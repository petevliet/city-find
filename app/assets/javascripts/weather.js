function weather(){
  'use strict';
  if($('#weatherRow').find('.panel').length > 0){
    $('#weatherRow').remove();
  }
    var city = $('input').val();
    var state = $('select').val();
    var weatherPanel = "<div class='row' id='weatherRow'><div class='col-md-4'><div class='panel panel-info'><div class='panel-heading'>Weather</div><div class='panel-body'><p class='weather icon'></p></div></div></div></div>";
    $.ajax({
      url: "http://api.wunderground.com/api/8fb6aeab97ba391c/forecast/q/"+state+"/"+city+".json"
    }).done(function(data) {
      $('#weatherShit').append(weatherPanel);
      var weather = data.forecast.simpleforecast.forecastday;
        for (var index in weather) {
          $(".weather").append('<p>' + weather[index]['date']['weekday'] + ' ('+weather[index]['date']['monthname']+ ' '+ weather[index]['date']['day']+ ') is ' +weather[index]['conditions'] + '. ' + 'High of ' + weather[index]['high']['fahrenheit'] + '. Low of ' + weather[index]['low']['fahrenheit'] + '. ' );
          $(".icon").append('<img src=http://icons.wxug.com/i/c/k/' + (weather[index]['icon']) + '.gif>' + '</p>');
        }

    });
}
