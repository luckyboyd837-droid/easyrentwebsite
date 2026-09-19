self.addEventListener('push', function(event) {
  let data = { title: 'Easy Rent', body: 'You have a new notification' };
  try {
    if (event.data) data = event.data.json();
  } catch (e) {}

  event.waitUntil(
    self.registration.showNotification(data.title || 'Easy Rent', {
      body: data.body,
      icon: 'https://cdn-icons-png.flaticon.com/512/3239/3239952.png',
      requireInteraction: true
    })
  );
});

self.addEventListener('notificationclick', function(event) {
  event.notification.close();
  event.waitUntil(clients.openWindow('/'));
});
