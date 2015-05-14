function getPlace(){
  $.ajax({
        url: 'http://api.npr.org/query?id=1001&output=JSON&apiKey=MDE5MDgwOTM1MDE0MzEwMTUyMzUzOWNmYw001',
        type: 'GET',
        dataType: 'json',
        success: function(data){
          var stories = data.list.story;
          $.each(stories, function(i, newsItem){
            $('#npr').append('<li><a href=' + newsItem.link[0].$text + '>' + newsItem.title.$text + '</a></li>');
          });
        }
      });
}
