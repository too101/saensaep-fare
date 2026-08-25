/* Service worker ที่เบาที่สุดเท่าที่จะทำได้: ไม่แคชอะไรเลย
   มีไว้เพียงเพื่อให้เบราว์เซอร์เห็นว่าเว็บนี้ "ติดตั้งได้" (installability
   criteria ของ Chrome ต้องมี fetch handler) — ไม่แตะต้องระบบเช็กเวอร์ชันใหม่
   ที่ต้องการให้หน้าเว็บโหลดสดจากเซิร์ฟเวอร์เสมอ */
self.addEventListener("install", () => self.skipWaiting());
self.addEventListener("activate", (e) => e.waitUntil(self.clients.claim()));
self.addEventListener("fetch", (event) => {
  event.respondWith(fetch(event.request));
});
