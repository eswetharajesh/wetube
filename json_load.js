$(document).ready(function () {

    //Get request param from url search string
    var search_string = decodeURI(location.search.split('search=')[1]);
    console.log(search_string);
    console.log(typeof (search_string));
    $.getJSON("files/data.json",
      function (data) {
        var video_contents = '';
        $.each(data, function (key, value) {
          // Converts search string and video Name to lower case and check if video name contains search string
          if (search_string == "undefined" || (value.videoName.toLowerCase()).includes(search_string.toLowerCase())) {
            video_contents = video_contents + '<article class="video-container">' +
              '<a href="playback.html?id=' + value.id + '" class="thumbnail">' +
              '<img class="thumbnail-image" src="files/videos/' + value.videoThumbnail + '"/>' +
              '</a>' +
              '<div class="video-bottom-section">' +
              '<a href="#">' +
              '<img class="channel-icon" src="files/channels/' + value.channelThumbnail + '" />' +
              '</a>' +
              '<div class="video-details">' +
              '<a href="playback.html?id=' + value.id + '" class="video-title">' + value.videoName + '</a>' +
              '<a href="#" class="video-channel-name">' + value.channelName + '</a>' +
              '<div class="video-metadata">' +
              '<span>' + value.views + '</span>' +
              '&nbsp; Views' +
              '</div>' +
              '</div>' +
              '</div>' +
              '</article>';
          }
        });
        //appends the contents to video-section class
        $('.video-section').append(video_contents);
      });
  });
