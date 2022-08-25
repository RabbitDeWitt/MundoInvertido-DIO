
  // Import the functions you need from the SDKs you need
  import { initializeApp } from "https://www.gstatic.com/firebasejs/9.9.3/firebase-app.js";
  // TODO: Add SDKs for Firebase products that you want to use
  // https://firebase.google.com/docs/web/setup#available-libraries

  // Your web app's Firebase configuration
  const firebaseConfig = {
    apiKey: "AIzaSyAMOU6T8Az4JMTtvKS5XYR4_cH5HNCGc6I",
    authDomain: "mundoinvertido-dio.firebaseapp.com",
    projectId: "mundoinvertido-dio",
    storageBucket: "mundoinvertido-dio.appspot.com",
    messagingSenderId: "364569029237",
    appId: "1:364569029237:web:5f3bf771bada93f3d5663c"
  }

  // Initialize Firebase
  const app = initializeApp(firebaseConfig)

  export default app