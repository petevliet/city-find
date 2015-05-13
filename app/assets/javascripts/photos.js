$(function() {
  'use strict';
  var getPhotos = (function(){
   function cityPhotos(){
    $.ajax({
      url: 'https://api.flickr.com/services/rest/?method=flickr.places.find&api_key=3e4c6cc06971191d5115828a46d2283d&query=Pittsburgh&format=json&nojsoncallback=1&auth_token=72157652689825796-074c103e7e4ed979&api_sig=eaab633baffbd8bf51ca98f089bbaca6',
      method: 'GET',
      dataType: 'JSON',
      success: function(data){
        console.log(data),
        var photo = place_url
      $('.photos').append();
      }
    });
  }
  return {
    cityPhotos: cityPhotos
  };
})();
  getPhotos.cityPhotos();
});