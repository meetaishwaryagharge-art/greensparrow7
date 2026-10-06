/* Firebase web-app config (Firebase Console > Project settings > Your apps).
   IMPORTANT: keep the "window.GS_FIREBASE = {...}" line, do NOT paste the console's "const firebaseConfig" snippet. */
window.GS_FIREBASE = {
  apiKey: "AIzaSyAlOQyczg_7AoI25lq9srR8e4emlaRnqvA",
  authDomain: "green-sparrow-bec1e.firebaseapp.com",
  projectId: "green-sparrow-bec1e",
  storageBucket: "green-sparrow-bec1e.firebasestorage.app",
  messagingSenderId: "242157075959",
  appId: "1:242157075959:web:79a3e6b97bf186f55c82f2",
  measurementId: "G-YKNCPD8136"
};
window.GS_CONFIGURED = function () {
  return !!(window.GS_FIREBASE && window.GS_FIREBASE.apiKey && String(window.GS_FIREBASE.apiKey).indexOf('YOUR_') !== 0);
};
