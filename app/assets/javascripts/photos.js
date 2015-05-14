$(function() {
  'use strict';

  // var fKey = 'FLICKR_KEY;
  // var fSecret = '[FLICKR_SECRET]';
  var fUrl = 'https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=3e4c6cc06971191d5115828a46d2283d&text=Pittsburgh&sort=relevance&privacy_filter=1&accuracy=11&place_id=DlhNrQ5TVr2oUYKU&extras=url_b%2C+url_c&format=json&nojsoncallback=1&auth_token=72157652689825796-074c103e7e4ed979&api_sig=6eab14bdf9491bd44bd2b7965d4d8eb8';
  var getPhotos = (function(){
   function cityPhotos(){
    $.ajax({
      url: fUrl,
      method: 'GET',
      dataType: 'JSON',
      success: function(data){
        var pic = data.photos.photo[0];
        console.log(pic);
        var picUrl = 'https://farm' + pic.farm + '.staticflickr.com/' + pic.server + '/' + pic.id + '_' + pic.secret + '.jpg';
        // var photo = data['photos']['photo'][0];
        $('.photos').append('<img src=' + picUrl + '/>');
      }
    });
  }
  return {
    cityPhotos: cityPhotos
  };
})();
  getPhotos.cityPhotos();
});

// img src="https://c2.staticflickr.com/8/7260/8162381555_8c257edcdd_k.jpg" width="2048" height="1841" alt="Pittsburgh"></a>