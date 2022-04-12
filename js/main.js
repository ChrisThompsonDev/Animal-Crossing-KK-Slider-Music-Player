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

let songs = {}

  function getMusic() {
    fetch(`https://acnhapi.com/v1/songs`)
    .then(res => res.json()) // parse response as JSON
    .then(data => {
      Object.values(data).forEach(item => {
        songs[item.id] = item
        addDiv(item.id)
      })
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
    
  
  

