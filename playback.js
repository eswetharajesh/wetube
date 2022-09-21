var video_id = location.search.split('id=')[1];
        $(document).ready(function () {

          $.getJSON("files/data.json",
            function (data) {
              var video_contents = '';

              $.each(data, function (key, value) {

                // Get video_id from reqeust param, validate with json and get the video_url
                if (video_id == value.id) {
                  video_contents = '<article class="video-container">' +
                    '<div class="video-container">' +
                    ' <iframe width="853" height="480" src="' + (value.videoId.replace("watch?v=", "embed/")) + '?autoplay=1" frameborder="0" allowfullscreen></iframe>' +
                    '</div>' +
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
              $('.video-section-playback').append(video_contents);
            });
        });
