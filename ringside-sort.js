// Ringside VR - Blue Left / Red Right Grid Sorter
// Watches guest feeds and reorders based on labels

(function() {
    'use strict';
    
    // Only run on director pages
    if (!window.location.href.includes('director')) return;
    
    console.log('[Ringside] Grid sorter initialized');
    
    // Sort function - blue first, then red, then others
    function sortGuestFeeds() {
        const container = document.getElementById('guestFeeds');
        if (!container) return;
        
        const videos = Array.from(container.children);
        if (videos.length < 2) return;
        
        // Sort: blue labels first (left), red labels second (right), others last
        videos.sort((a, b) => {
            const labelA = (a.querySelector('.video-label')?.textContent || 
                           a.dataset.label || '').toLowerCase();
            const labelB = (b.querySelector('.video-label')?.textContent || 
                           b.dataset.label || '').toLowerCase();
            
            const isBlueA = labelA.includes('blue');
            const isBlueB = labelB.includes('blue');
            const isRedA = labelA.includes('red');
            const isRedB = labelB.includes('red');
            
            // Blue always first
            if (isBlueA && !isBlueB) return -1;
            if (!isBlueA && isBlueB) return 1;
            
            // Red after blue
            if (isRedA && !isRedB) return 1;
            if (!isRedA && isRedB) return -1;
            
            // Within same category, sort alphabetically
            return labelA.localeCompare(labelB);
        });
        
        // Reorder DOM elements
        videos.forEach(video => container.appendChild(video));
        
        console.log('[Ringside] Sorted', videos.length, 'feeds');
    }
    
    // Watch for changes to guest feeds
    function setupObserver() {
        const container = document.getElementById('guestFeeds');
        if (!container) {
            // Container not ready yet, retry
            setTimeout(setupObserver, 1000);
            return;
        }
        
        const observer = new MutationObserver((mutations) => {
            // Debounce - wait for changes to settle
            clearTimeout(window.ringsideSortTimeout);
            window.ringsideSortTimeout = setTimeout(sortGuestFeeds, 500);
        });
        
        observer.observe(container, {
            childList: true,
            subtree: true,
            attributes: true,
            attributeFilter: ['data-label', 'class']
        });
        
        console.log('[Ringside] Observer watching guestFeeds');
        
        // Initial sort
        setTimeout(sortGuestFeeds, 1000);
    }
    
    // Start when DOM is ready
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', setupObserver);
    } else {
        setupObserver();
    }
    
    // Also sort periodically as a fallback
    setInterval(sortGuestFeeds, 5000);
    
})();
