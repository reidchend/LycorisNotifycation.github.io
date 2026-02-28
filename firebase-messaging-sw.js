importScripts('https://www.gstatic.com/firebasejs/10.7.1/firebase-app-compat.js');
importScripts('https://www.gstatic.com/firebasejs/10.7.1/firebase-messaging-compat.js');

const firebaseConfig = {
  apiKey: "AIzaSyCwQW8VD-bfOIbWhEUNh-fjOe6vkytrQPU",
  authDomain: "lycoris-alertas.firebaseapp.com",
  projectId: "lycoris-alertas",
  storageBucket: "lycoris-alertas.firebasestorage.app",
  messagingSenderId: "828115636853",
  appId: "1:828115636853:web:b988d986b46a8ece02de3c"
};

firebase.initializeApp(firebaseConfig);
const messaging = firebase.messaging();

// Manejo de mensajes cuando la pestaña o app está cerrada
messaging.onBackgroundMessage((payload) => {
    console.log('[SW] Mensaje recibido en segundo plano:', payload);
    const notificationTitle = payload.notification.title;
    const notificationOptions = {
        body: payload.notification.body,
        icon: '/favicon.png' 
    };
    self.registration.showNotification(notificationTitle, notificationOptions);
});
