$(function() {
  'use strict';

  // var fKey = 'FLICKR_KEY;
  // var fSecret = '[FLICKR_SECRET]';

  var getPhotos = (function(){
   function cityPhotos(){
    $.ajax({
      url: 'https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=3e4c6cc06971191d5115828a46d2283d&text=Pittsburgh&sort=relevance&privacy_filter=1&accuracy=11&place_id=DlhNrQ5TVr2oUYKU&format=json&nojsoncallback=1&auth_token=72157652689825796-074c103e7e4ed979&api_sig=c86dd0b3ab2c2c5cff05d75482fddb76',
      method: 'GET',
      dataType: 'JSON',
      success: function(data){
        console.log(data);
        // $('.photos').append('<img src="' + 'https://www.flickr.com/photos/' + photo.owner + '/' +  photo.id + '"/>');
      }
    });
  }
  return {
    cityPhotos: cityPhotos
  };
})();
  getPhotos.cityPhotos();
});