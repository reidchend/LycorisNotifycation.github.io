importScripts('https://www.gstatic.com/firebasejs/10.7.1/firebase-app-sw.js');
importScripts('https://www.gstatic.com/firebasejs/10.7.1/firebase-messaging-sw.js');

firebase.initializeApp({
  apiKey: "AIzaSyCwQW8VD-bfOIbWhEUNh-fjOe6vkytrQPU",
  authDomain: "lycoris-alertas.firebaseapp.com",
  projectId: "lycoris-alertas",
  storageBucket: "lycoris-alertas.firebasestorage.app",
  messagingSenderId: "828115636853",
  appId: "1:828115636853:web:b988d986b46a8ece02de3c",
  measurementId: "G-XMZPNBQL1S"
};

const messaging = firebase.messaging();

// Este evento maneja las notificaciones cuando la app está cerrada o en segundo plano
messaging.onBackgroundMessage((payload) => {
    console.log('[firebase-messaging-sw.js] Mensaje recibido en segundo plano:', payload);

    const notificationTitle = payload.notification.title;
    const notificationOptions = {
        body: payload.notification.body,
        icon: '/favicon.png' // Asegúrate de tener un icono en tu repo o usa una URL externa
    };

    self.registration.showNotification(notificationTitle, notificationOptions);
});
