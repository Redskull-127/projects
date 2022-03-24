import { initializeApp } from "https://www.gstatic.com/firebasejs/9.6.9/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/9.6.9/firebase-analytics.js";
  // TODO: Add SDKs for Firebase products that you want to use
  // https://firebase.google.com/docs/web/setup#available-libraries

  // Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  const firebaseConfig = {
    apiKey: "AIzaSyDZkXOUmJjAXfg9ly_heaFBmJXYw64y6Mk",
    authDomain: "redskull-dev.firebaseapp.com",
    projectId: "redskull-dev",
    storageBucket: "redskull-dev.appspot.com",
    messagingSenderId: "319515693172",
    appId: "1:319515693172:web:be52cf2888a6db21c84121",
    measurementId: "G-DZSFPVMSCF"
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  const analytics = getAnalytics(app);
