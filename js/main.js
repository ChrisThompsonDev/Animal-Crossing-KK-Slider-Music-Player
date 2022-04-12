//Create app that looks like the music box in Animal Crossing New Horizons. It should play the music when the user clicks on the artwork.
const currentMain = document.querySelector('main');


  function addDiv(num) {
    // Create element
    const newDiv = document.createElement('div');
    // Add id to element
    newDiv.id = `div${num}`
    // Create audio element
    const newAudio = document.createElement('audio')
    // Add id to element
    newAudio.id = `audio${num}`
    // Add loop attr to element
    newAudio.setAttribute("loop", "loop")
    // Create image element
    const newImg = document.createElement('img')
    // Add id to image
    newImg.id = `img${num}`
    // add element to DOM
    currentMain.appendChild(newDiv);
    // Add audio to div parent
    newDiv.appendChild(newAudio)
    // Add img to div parent
    newDiv.appendChild(newImg)
    newImg.src = `https://acnhapi.com/v1/images/songs/${num}`
    newAudio.src = `https://acnhapi.com/v1/music/${num}`
    newImg.addEventListener('click', playAudio)
    }

//Create new Divs with the music from the 2.0 Update (Not in the API)

function addMoreDivs(songNum, songTitle, imgUrl, songUrl) {
  const newDiv = document.createElement('div');
  newDiv.id = `div${songNum}`
  // Create audio element
  const newAudio = document.createElement('audio')
  // Add id to element
  newAudio.id = `audio${songNum}`
  // Add loop attr to element
  newAudio.setAttribute("loop", "loop")
  // Create image element
  const newImg = document.createElement('img')
  // Add id to image
  newImg.id = `img${songNum}`
  // add element to DOM
  currentMain.appendChild(newDiv);
  // Add audio to div parent
  newDiv.appendChild(newAudio)
  // Add img to div parent
  newDiv.appendChild(newImg)
  newImg.src = imgUrl
  newAudio.src = songUrl
  newImg.addEventListener('click', playAudio)
  newImg.addEventListener('click', changeNowPlaying)
}


let songs = {}

  function getMusic() {
    fetch(`https://acnhapi.com/v1/songs`)
    .then(res => res.json()) // parse response as JSON
    .then(data => {
      Object.values(data).forEach(item => {
        songs[item.id] = item
        addDiv(item.id)
      })
      addMoreDivs(96, "K.K. Fugue", "https://dodo.ac/np/images/4/4c/K.K._Fugue_NH_Texture.png", "https://dodo.ac/np/images/8/85/NH_K.K._Fugue_%28Aircheck%2C_Hi-Fi%29.flac")
      addMoreDivs(97, "K.K. Polka", "https://dodo.ac/np/images/a/af/K.K._Polka_NH_Texture.png", "https://dodo.ac/np/images/7/72/NH_K.K._Polka_%28Aircheck%2C_Hi-Fi%29.flac")
      addMoreDivs(98, "K.K. Slack-Key", "https://dodo.ac/np/images/5/5a/K.K._Slack-Key_NH_Texture.png", "https://dodo.ac/np/images/5/5a/NH_K.K._Slack-Key_%28Aircheck%2C_Hi-Fi%29.flac")
      addMoreDivs(99, "K.K. Chorinho", "https://dodo.ac/np/images/thumb/2/28/K.K._Chorinho_NH_Texture.png/256px-K.K._Chorinho_NH_Texture.png", "https://dodo.ac/np/images/d/dd/NH_K.K._Chorinho_%28Aircheck%2C_Hi-Fi%29.flac")
      addMoreDivs(100, "K.K. Chillwave", "https://dodo.ac/np/images/thumb/a/a2/Chillwave_NH_Texture.png/256px-Chillwave_NH_Texture.png", "https://dodo.ac/np/images/b/b9/NH_Chillwave_%28Aircheck%2C_Hi-Fi%29.flac")
      addMoreDivs(101, "K.K. Dub", "https://dodo.ac/np/images/9/9b/K.K._Dub_NH_Texture.png", "https://dodo.ac/np/images/3/35/NH_K.K._Dub_%28Aircheck%2C_Hi-Fi%29.flac")
      addMoreDivs(102, "K.K. Lovers", "https://dodo.ac/np/images/thumb/6/62/K.K._Lovers_NH_Texture.png/256px-K.K._Lovers_NH_Texture.png", "https://dodo.ac/np/images/f/f9/NH_K.K._Lovers_%28Aircheck%2C_Hi-Fi%29.flac")
      addMoreDivs(103, "K.K. Bashment", "https://dodo.ac/np/images/thumb/b/b9/K.K._Bashment_NH_Texture.png/256px-K.K._Bashment_NH_Texture.png", "https://dodo.ac/np/images/a/a9/NH_K.K._Bashment_%28Aircheck%2C_Hi-Fi%29.flac")
      addMoreDivs(104, "K.K. Hop", "https://dodo.ac/np/images/thumb/a/a9/K.K._Hop_NH_Texture.png/256px-K.K._Hop_NH_Texture.png", "https://dodo.ac/np/images/9/9d/NH_K.K._Hop_%28Aircheck%2C_Hi-Fi%29.flac")
      addMoreDivs(105, "K.K. Break", "https://dodo.ac/np/images/thumb/d/db/K.K._Break_NH_Texture.png/256px-K.K._Break_NH_Texture.png", "https://dodo.ac/np/images/d/df/NH_K.K._Break_%28Aircheck%2C_Hi-Fi%29.flac")
      addMoreDivs(106, "K.K. Khoomei", "https://dodo.ac/np/images/thumb/8/8d/K.K._Khoomei_NH_Texture.png/256px-K.K._Khoomei_NH_Texture.png", "https://dodo.ac/np/images/6/6f/NH_K.K._Khoomei_%28Aircheck%2C_Hi-Fi%29.flac")
      addMoreDivs(107, "K.K. Robot Synth", "https://dodo.ac/np/images/thumb/8/8e/K.K._Robot_Synth_NH_Texture.png/256px-K.K._Robot_Synth_NH_Texture.png", "https://dodo.ac/np/images/b/bf/NH_K.K._Robot_Synth_%28Aircheck%2C_Hi-Fi%29.flac")
      
      console.log(songs)
    })
    
    }
  
  getMusic()
  
  
  //PLAY MUSIC WHEN IMAGE IS CLICKED
let myAudio

  function playAudio() {
    if(myAudio) {
      myAudio.pause()
    }
      document.querySelectorAll('audio')
      let imgNum = this.id
      imgNum = imgNum.split('').splice(3).join('')
      console.log(imgNum)
      myAudio = document.querySelector(`#audio${imgNum}`)
      console.log(songs[imgNum])
      myAudio.play()
      document.querySelector('#nowPlaying').innerText = songs[imgNum].name['name-USen']
    }
    
//Pause Button
document.querySelector('#pauseButton').addEventListener('click', pauseAudio)

function pauseAudio(){
  if(myAudio) {
    myAudio.pause()
  }
}
  
function changeNowPlaying() {
  if (this.id == 'img96') {
    document.querySelector('#nowPlaying').innerText = "K.K. Fugue"
  }else if( this.id == 'img97') {
    document.querySelector('#nowPlaying').innerText = "K.K. Polka"
  } else if( this.id == 'img98') {
    document.querySelector('#nowPlaying').innerText = "K.K. Slack-Key"
  } else if( this.id == 'img99') {
    document.querySelector('#nowPlaying').innerText = "K.K. Chorinho"
  } else if( this.id == 'img100') {
    document.querySelector('#nowPlaying').innerText = "K.K. Chillwave"
  } else if( this.id == 'img101') {
    document.querySelector('#nowPlaying').innerText = "K.K. Dub"
  } else if( this.id == 'img102') {
    document.querySelector('#nowPlaying').innerText = "K.K. Lovers"
  } else if( this.id == 'img103') {
    document.querySelector('#nowPlaying').innerText = "K.K. Bashment"
  } else if( this.id == 'img104') {
    document.querySelector('#nowPlaying').innerText = "K.K. Hop"
  } else if( this.id == 'img105') {
    document.querySelector('#nowPlaying').innerText = "K.K. Break"
  } else if( this.id == 'img106') {
    document.querySelector('#nowPlaying').innerText = "K.K. Khoomei"
  } else if( this.id == 'img107') {
    document.querySelector('#nowPlaying').innerText = "K.K. Robot Synth"
  }
}

//Put a border on now playing song
