function stopVideos() {
    let player1 = videojs('video1');
    player1.pause();
    player1.currentTime(0);
    hide('videoContainer1');
    
    let player2 = videojs('video2');
    player2.pause();
    player2.currentTime(0);
    hide('videoContainer2');

    let player3 = videojs('video3');
    player3.pause();
    player3.currentTime(0);
    hide('videoContainer3');

    let player4 = videojs('video4');
    player4.pause();
    player4.currentTime(0);
    hide('videoContainer4');
}

function changeVideo(videoNr) {
    show('videoContainer'+videoNr);
    let player = videojs('video'+videoNr);

    // AUTOPLAY
    setTimeout(function() {
        player.play();
      }, 333);

    /* let filename = 'video'+videoNr;
    let player = videojs(filename);
    player.play();
    player.pause(); */
}

function setParentTitle() {
    window.parent.setNewTitle();
}
