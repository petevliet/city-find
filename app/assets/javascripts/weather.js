function weather(){
    var city = $('input').val();
    var state = $('select').val();
    $.ajax({
      url: "http://api.wunderground.com/api/0801730a2ab7fc1d/forecast/q/"+state+"/"+city+".json"
    }).done(function(data) {
      console.log(data);
      var weather = data.forecast.simpleforecast.forecastday;
        for (var index in weather) {
          $(".weather").append('<p>Weather Forecast:</p><p>' + weather[index]['date']['weekday'] + ' ('+weather[index]['date']['monthname']+ ' '+ weather[index]['date']['day']+ ') is ' +weather[index]['conditions'] + '. ' + 'High of ' + weather[index]['high']['fahrenheit'] + '. Low of ' + weather[index]['low']['fahrenheit'] + '. ' );
          $(".icon").append('<img src=http://icons.wxug.com/i/c/k/' + (weather[index]['icon']) + '.gif>' + '</p>');
        }
    });
}


// $(function(){
//   // weather();
// // });
// 'use strict';
// // function weather(){
// var getWeather = (function(){
//   function cityWeather(){
//   $('.btn').click(function(){
//     var city = $('input').val();
//     var state = $()
//     console.log(state);
//     $.ajax({
//       url: 'http://api.wunderground.com/api/8fb6aeab97ba391c/forecast/q/' + state + '/' + city + '.json',
//       method: 'GET',
//       dataType: 'JSON',
//       success: function(data){
//         console.log(data);
//         var weather = data['forecast']['simpleforecast']['forecastday'];
//           for(var index in weather) {
//             $('.weather').append('<p>' + weather[index]['data']['weekday'] + ' (' + weather[index]['date']['monthname'] +' '+ weather[index]['date']['day']+ ') is ' +weather[index]['conditions'] + '. ' + 'High of ' + weather[index]['high']['fahrenheit'] + '. Low of ' + weatjer[index]['low']['fahrenheit'] + '. ');
//             $('.icon').append('<img src= http://icons.wxug.com/i/c/k/' + (weather[index]['icon']) + '.gif>' + '</p>');
//           }
//       }
//     });
//   });
// }
// return {
//   cityWeather: cityWeather
// };
// })();
// getWeather.cityWeather();
// });

//     // var city, state;

//     // city = "Boston";
//     // state = "MA";
// // $.ajax({
// // url : "http://api.wunderground.com/api/0801730a2ab7fc1d/forecast/q/"+state+"/"+city+".json",
// //     }).done(function(data) {
// //       console.log(data);
// //       var weather = data['forecast']['simpleforecast']['forecastday'];
// //         for (index in weather) {
// //           $(".weather").append('<p>' + weather[index]['date']['weekday'] + ' ('+weather[index]['date']['monthname']+ ' '+ weather[index]['date']['day']+ ') is ' +weather[index]['conditions'] + '. ' + 'High of ' + weather[index]['high']['fahrenheit'] + '. Low of ' + weather[index]['low']['fahrenheit'] + '. ' );
// //           $(".icon").append('<img src=http://icons.wxug.com/i/c/k/' + (weather[index]['icon']) + '.gif>' + '</p>');
// //     }
// // });
// //   }
// // });