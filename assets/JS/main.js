
import { subscribeToHellfireClube } from "./firebase/hellfire-clube.js"

const audio = document.getElementById('music')
const btnSubscribe = document.getElementById('btnSubscribe')
audio.volume = 0.1

btnSubscribe.addEventListener('click', async() =>{
  const subscrition = {
    name: document.getElementById('txtName').value,
    email: document.getElementById('txtEmail').value,
    level: document.getElementById('txtLevel').value,
    character: document.getElementById('txtCharacter').value
  }

  await subscribeToHellfireClube(subscrition)
})

function switchTheme(){
  document.body.classList.toggle('light-theme')
  document.body.classList.toggle('dark-theme')

  const theme = document.body.className;

  const music = theme === 'light-theme' ? 'normal-world.mpeg' : 'inverted-world.mpeg'
  audio.src = `assets/musics/${music}`
  audio.play()
  audio.volume = 0.1
}