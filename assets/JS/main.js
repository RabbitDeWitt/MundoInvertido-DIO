import { subscribeToHellfireClube } from "./firebase/hellfire-clube.js"

const btnSubscribe = document.getElementById('btnSubscribe')

btnSubscribe.addEventListener('click', async() =>{
  const subscrition = {
    name: document.getElementById('txtName').value,
    email: document.getElementById('txtEmail').value,
    level: document.getElementById('txtLevel').value,
    character: document.getElementById('txtCharacter').value
  }

  await subscribeToHellfireClube(subscrition)
})