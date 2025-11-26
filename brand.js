// ========================================
// RINGSIDE VR - CUSTOM JAVASCRIPT
// Applies corner-specific CSS classes
// ========================================

(function() {
    'use strict';
    
    // Detect corner from URL
    const url = window.location.href.toLowerCase();
    
    // Apply appropriate class to body
    if (url.includes('blue-fighter') || url.includes('blue-coach') || url.includes('label=blue')) {
        document.body.classList.add('blue-corner');
        document.title = 'Ringside VR - Blue Corner';
    } else if (url.includes('red-fighter') || url.includes('red-coach') || url.includes('label=red')) {
        document.body.classList.add('red-corner');
        document.title = 'Ringside VR - Red Corner';
    } else if (url.includes('director')) {
        document.body.classList.add('director');
        document.title = 'Ringside VR - Director View';
    } else {
        document.title = 'Ringside VR';
    }
    
    // Remove VDO.Ninja favicon
    window.addEventListener('load', function() {
        const links = document.querySelectorAll('link[rel*="icon"]');
        links.forEach(link => link.remove());
        
        const link = document.createElement('link');
        link.rel = 'icon';
        link.href = 'data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><text y=".9em" font-size="90">🥊</text></svg>';
        document.head.appendChild(link);
        
        console.log('🥊 Ringside VR Camera System Loaded');
    });
    
})();
