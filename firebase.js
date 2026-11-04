import {initializeApp} from "https://www.gstatic.com/firebasejs/11.10.0/firebase-app.js";
import {getAuth} from "https://www.gstatic.com/firebasejs/11.10.0/firebase-auth.js";
import {getFirestore} from "https://www.gstatic.com/firebasejs/11.10.0/firebase-firestore.js";
const config={apiKey:"AIzaSyDgNgXv78uDZPwTgwnIPVCzR8CXTZl1RNI",authDomain:"nexus-studio-77fe5.firebaseapp.com",projectId:"nexus-studio-77fe5",storageBucket:"nexus-studio-77fe5.firebasestorage.app",messagingSenderId:"680776653794",appId:"1:680776653794:web:0168bc66f05f7fd7f677bb",measurementId:"G-1N6D68NB3C"};
const app=initializeApp(config); export const auth=getAuth(app); export const db=getFirestore(app);
