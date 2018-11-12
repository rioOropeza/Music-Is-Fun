import ItunesService from "./itunes-service.js";

//PRIVATE

const itunesService = new ItunesService()

function drawSongs(results) {
  console.log(results)
  //YOUR CODING STARTS HERE
  let template = ""
  results.forEach(song => {
    template += `
    <div class="card mt-1 mb-1 border border-dark" style="width: 18rem;">
  <img class="card-img-top" src="${song.albumArt}" alt="album art">
    <div class="card-body">
      <p class="card-text">${song.title} by ${song.artist} ${song.collection}
        ${song.price}</p>
      <div class="d-flex justify-content-center"><audio controls src="${song.preview}"></audio></div>
    </div>
    </div>
    `
  });
  document.getElementById('songs').innerHTML = template

}






//PUBLIC
class ItunesController {
  //DO NOT MODIFY THIS METHOD
  getMusic(e) {
    e.preventDefault();
    var artist = e.target.artist.value;
    //changes the button to loading while songs load
    $('#get-music-button').text('LOADING....');
    itunesService.getMusicByArtist(artist).then(results => {
      drawSongs(results)
      //changes button back to GET MUSIC once songs are loaded
      $('#get-music-button').text('GET MUSIC');
    })
  }


}


export default ItunesController