// ========================================
// RINGSIDE VR - CUSTOM JAVASCRIPT
// Applies corner-specific CSS classes IMMEDIATELY
// ========================================

// !!! RUN THIS IMMEDIATELY - DON'T WAIT FOR PAGE LOAD !!!
(function() {
    'use strict';
    
    // Detect corner from URL RIGHT NOW
    const url = window.location.href.toLowerCase();
    
    // Apply appropriate class to body IMMEDIATELY
    if (url.includes('blue-fighter') || url.includes('blue-coach') || url.includes('label=blue')) {
        document.documentElement.classList.add('blue-corner');
        document.body.classList.add('blue-corner');
        document.title = 'Ringside VR - Blue Corner';
        console.log('🥊 BLUE CORNER THEME APPLIED');
    } else if (url.includes('red-fighter') || url.includes('red-coach') || url.includes('label=red')) {
        document.documentElement.classList.add('red-corner');
        document.body.classList.add('red-corner');
        document.title = 'Ringside VR - Red Corner';
        console.log('🥊 RED CORNER THEME APPLIED');
    } else if (url.includes('director')) {
        document.documentElement.classList.add('director');
        document.body.classList.add('director');
        document.title = 'Ringside VR - Director View';
        console.log('🎬 DIRECTOR THEME APPLIED');
    }
    
})();

// Remove favicon when page loads
window.addEventListener('DOMContentLoaded', function() {
    const links = document.querySelectorAll('link[rel*="icon"]');
    links.forEach(link => link.remove());
    
    const link = document.createElement('link');
    link.rel = 'icon';
    link.href = 'data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><text y=".9em" font-size="90">🥊</text></svg>';
    document.head.appendChild(link);
});
