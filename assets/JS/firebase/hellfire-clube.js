import app from "./app.js"
import { getFirestore, collection, addDoc } from 'https://www.gstatic.com/firebasejs/9.9.3/firebase-firestore.js'

export async function subscribeToHellfireClube(subscrition){
  const db = getFirestore(app)
  const subsCollection = collection(db, 'hellfire-club')
  const docRef = await addDoc(subsCollection, subscrition)
  return docRef.id
}