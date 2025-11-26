// ========================================
// RINGSIDE VR - CUSTOM JAVASCRIPT
// Remove any remaining VDO.Ninja references
// ========================================

(function() {
    'use strict';
    
    // Wait for page to fully load
    window.addEventListener('load', function() {
        console.log('🥊 Ringside VR Camera System Loaded');
        
        // Remove all VDO.Ninja text references
        replaceText();
        
        // Apply color coding to video tiles
        colorCodeVideos();
        
        // Update page title
        updateTitle();
        
        // Watch for new videos being added
        observeVideoChanges();
    });
    
    // Replace any VDO.Ninja text
    function replaceText() {
        const bodyText = document.body.innerHTML;
        document.body.innerHTML = bodyText
            .replace(/VDO\.Ninja/gi, 'Ringside VR')
            .replace(/vdo\.ninja/gi, 'Ringside VR')
            .replace(/obs\.ninja/gi, 'Ringside VR');
    }
    
    // Update page title based on role
    function updateTitle() {
        const url = window.location.href;
        if (url.includes('director')) {
            document.title = 'Ringside VR - Director Control';
        } else if (url.includes('blue')) {
            document.title = 'Ringside VR - Blue Corner';
        } else if (url.includes('red')) {
            document.title = 'Ringside VR - Red Corner';
        } else {
            document.title = 'Ringside VR - Camera Feed';
        }
    }
    
    // Color code video tiles by corner
    function colorCodeVideos() {
        // Find all video elements
        const videos = document.querySAll('[id*="videosource"], [class*="video"]');
        
        videos.forEach(video => {
            const label = video.getAttribute('data-label') || video.id || '';
            
            if (label.toLowerCase().includes('blue')) {
                video.style.borderColor = '#0066cc';
                video.style.boxShadow = '0 0 20px rgba(0, 102, 204, 0.5)';
            } else if (label.toLowerCase().includes('red')) {
                video.style.borderColor = '#cc0000';
                video.style.boxShadow = '0 0 20px rgba(204, 0, 0, 0.5)';
            }
        });
    }
    
    // Watch for new videos being added dynamically
    function observeVideoChanges() {
        const observer = new MutationObserver(function(mutations) {
            mutations.forEach(function(mutation) {
                if (mutation.addedNodes.length) {
                    colorCodeVideos();
                }
            });
        });
        
        observer.observe(document.body, {
            childList: true,
            subtree: true
        });
    }
    
})();
```

---

## Step 3: Commit Both Files

Commit both `brand.css` and `brand.js` with the message:
```
Complete Ringside VR branding and styling
```

---

## Step 4: Test It!

Wait 1-2 minutes for GitHub Pages to update, then test:
```
https://theproffit.github.io/ringside-camera/?room=test&push
