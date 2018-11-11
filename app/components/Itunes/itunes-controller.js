import ItunesService from "./itunes-service.js";

//PRIVATE

const itunesService = new ItunesService()

function drawSongs(results) {
  console.log(results)
  //YOUR CODING STARTS HERE
  let template = ""
  results.forEach(song => {
    template += `
    <div class="card" style="width: 20rem;">
    <img src="${song.albumArt}">
    <h5>${song.title} ${song.artist}${song.collection}</h5>
   <p>${song.price}</p>
    <audio controls src="${song.preview}"></audio>
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