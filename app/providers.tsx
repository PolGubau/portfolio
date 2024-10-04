"use client";
   import { PoluiProvider, Toaster } from "pol-ui";
import React, { useEffect } from "react";
 

function Providers({ children }) {
  useEffect(() => {
    if ('serviceWorker' in navigator) {
      navigator.serviceWorker
        .register('/service-worker.js')
        .then((registration) => {
          console.log('scope is: ', registration.scope),

            registration.addEventListener('updatefound', () => {
              const installingWorker = registration.installing;
              if (installingWorker == null) {
                return;
              }
              installingWorker.addEventListener('statechange', () => {
                if (installingWorker.state === 'installed') {
                  if (navigator.serviceWorker.controller) {
                    // At this point, the old content will have been purged and
                    // the fresh content will have been added to the cache.
                    // It's the perfect time to display a "New content is
                    // available; please refresh." message in your web app.
                    console.log('New content is available; please refresh.');
                  } else {
                    // At this point, everything has been precached.
                    // It's the perfect time to display a
                    // "Content is cached for offline use." message.
                    console.log('Content is cached for offline use.');
                  }
                }
              });
            });
        })
        .catch((error) => {
          console.error('Error during service worker registration:', error);
        });
    } else {
      console.log('Service workers are not supported in this browser.');
      
    }
  }, []);
  return (
    <PoluiProvider>
      <Toaster />
      {children}
    </PoluiProvider>
  );
}

export {Providers};
