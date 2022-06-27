import setupHeader from './modules/header';
import callSW from './modules/sw';
window.addEventListener('load', () => {
    console.log('Loaded');
    callSW();
    setupHeader();
});