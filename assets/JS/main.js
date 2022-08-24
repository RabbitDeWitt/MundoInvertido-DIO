const audio = document.getElementById('music')
audio.volume = 0.1

function switchTheme(){
  document.body.classList.toggle('light-theme')
  document.body.classList.toggle('dark-theme')

  const theme = document.body.className;

  const music = theme === 'light-theme' ? 'normal-world.mpeg' : 'inverted-world.mpeg'
  audio.src = `assets/musics/${music}`
  audio.play()
  audio.volume = 0.1
}