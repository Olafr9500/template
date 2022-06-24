function callSW() {
    if ('serviceWorker' in navigator) {
        navigator.serviceWorker.register('/sw.js').then(function (registration) {
            console.log('Service Worker registered with scope: ', registration.scope);
        });
    }
}

export default callSW;