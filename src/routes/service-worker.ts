import { setupServiceWorker } from '@builder.io/qwik-city/service-worker';

declare const self: ServiceWorkerGlobalScope;

setupServiceWorker();

window.addEventListener('install', () => {
  self.skipWaiting().catch(() => {});
});

window.addEventListener('activate', () => {
  self.clients.claim().catch(() => {});
});
