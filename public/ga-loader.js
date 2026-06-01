/* GTM deferred loader — loads GTM after page is interactive to avoid blocking */
(function () {
    window.dataLayer = window.dataLayer || [];

   function loadGTM() {
         var id = 'GTM-NZSQKMW7';
         var s = document.createElement('script');
         s.src = 'https://www.googletagmanager.com/gtm.js?id=' + id;
         s.async = true;
         document.head.appendChild(s);
         window.dataLayer.push({ 'gtm.start': new Date().getTime(), event: 'gtm.js' });
   }

   // Delay GTM loading to avoid blocking main thread during critical render
   function deferGTM() {
         if ('requestIdleCallback' in window) {
                 requestIdleCallback(function () { setTimeout(loadGTM, 100); });
         } else {
                 setTimeout(loadGTM, 3500);
         }
   }

   if (document.readyState === 'complete') {
         deferGTM();
   } else {
         window.addEventListener('load', deferGTM);
   }
})();
