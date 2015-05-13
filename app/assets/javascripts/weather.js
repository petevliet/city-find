$(function(){
  weather();
});


function weather(){

    var city, state;

    city = "Boston";
    state = "MA";

		$.ajax({
			url : "http://api.wunderground.com/api/0801730a2ab7fc1d/forecast/q/"+state+"/"+city+".json",
    }).done(function(data) {
      console.log(data);
				var weather = data['forecast']['simpleforecast']['forecastday'];
        for (index in weather) {
          var icon_img = 'http://icons.wxug.com/i/c/k/'+ weather[index]['conditions'] + '.gif';

          $(".weather").append('<p>' + weather[index]['date']['weekday'] + ' ('+weather[index]['date']['monthname']+ ' '+ weather[index]['date']['day']+ ') is ' +weather[index]['conditions'] + '. ' + 'High of ' + weather[index]['high']['fahrenheit'] + '. Low of ' + weather[index]['low']['fahrenheit'] + '. ' );
          $(".icon").append('<img src=http://icons.wxug.com/i/c/k/' + (weather[index]['icon']) + '.gif>' + '</p>');
    	}
			});
  }
