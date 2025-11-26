// ========================================
// RINGSIDE VR - CUSTOM JAVASCRIPT
// Dynamic corner-based theming
// ========================================

(function() {
    'use strict';
    
    // Detect which corner this is
    const url = window.location.href;
    const isBlueCorner = url.includes('blue');
    const isRedCorner = url.includes('red');
    const isDirector = url.includes('director');
    
    // Set theme colors based on corner
    let themeColor = '#ffd700'; // Gold for director/default
    let themeName = 'RINGSIDE VR';
    
    if (isBlueCorner) {
        themeColor = '#0066cc';
        themeName = 'BLUE CORNER';
    } else if (isRedCorner) {
        themeColor = '#cc0000';
        themeName = 'RED CORNER';
    } else if (isDirector) {
        themeName = 'DIRECTOR VIEW';
    }
    
    // Apply theme immediately
    document.documentElement.style.setProperty('--corner-theme-color', themeColor);
    
    // Wait for page to fully load
    window.addEventListener('load', function() {
        console.log('🥊 Ringside VR Camera System Loaded -', themeName);
        
        // Remove favicon
        removeFavicon();
        
        // Remove all VDO.Ninja text references
        replaceText();
        
        // Apply corner-specific theming
        applyCornerTheme();
        
        // Update page title
        updateTitle();
        
        // Watch for new videos being added
        observeVideoChanges();
    });
    
    // Remove VDO.Ninja favicon
    function removeFavicon() {
        // Remove ALL existing favicons
        const links = document.querySelectorAll('link[rel*="icon"]');
        links.forEach(link => link.remove());
        
        // Add boxing glove as new favicon
        const link = document.createElement('link');
        link.rel = 'icon';
        link.href = 'data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><text y=".9em" font-size="90">🥊</text></svg>';
        document.head.appendChild(link);
    }
    
    // Replace any VDO.Ninja text
    function replaceText() {
        const bodyText = document.body.innerHTML;
        document.body.innerHTML = bodyText
            .replace(/VDO\.Ninja/gi, 'Ringside VR')
            .replace(/vdo\.ninja/gi, 'Ringside VR')
            .replace(/obs\.ninja/gi, 'Ringside VR');
    }
    
    // Update page title based on corner
    function updateTitle() {
        document.title = `Ringside VR - ${themeName}`;
    }
    
    // Apply corner-specific theme
    function applyCornerTheme() {
        // Update the "RINGSIDE VR" header text
        const style = document.createElement('style');
        style.textContent = `
            body::before {
                content: '${themeName}' !important;
                color: ${themeColor} !important;
                text-shadow: 
                    0 0 20px ${themeColor}80,
                    2px 2px 4px rgba(0, 0, 0, 0.8) !important;
            }
            
            /* Theme-colored borders */
            .video-tile,
            [id*="videosource"],
            [class*="video"] {
                border-color: ${themeColor} !important;
                box-shadow: 0 0 20px ${themeColor}80 !important;
            }
            
            /* Theme-colored buttons */
            button,
            .button {
                border-color: ${themeColor} !important;
                box-shadow: 0 4px 15px ${themeColor}66 !important;
            }
        `;
        document.head.appendChild(style);
        
        // Color code videos
        colorCodeVideos();
    }
    
    // Color code video tiles
    function colorCodeVideos() {
        const videos = document.querySelectorAll('[id*="videosource"], [class*="video"]');
        
        videos.forEach(video => {
            const label = (video.getAttribute('data-label') || video.id || '').toLowerCase();
            
            if (label.includes('blue')) {
                video.style.borderColor = '#0066cc';
                video.style.boxShadow = '0 0 20px rgba(0, 102, 204, 0.5)';
            } else if (label.includes('red')) {
                video.style.borderColor = '#cc0000';
                video.style.boxShadow = '0 0 20px rgba(204, 0, 0, 0.5)';
            } else {
                // Default to theme color
                video.style.borderColor = themeColor;
                video.style.boxShadow = `0 0 20px ${themeColor}80`;
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

## Now Test It:

**Blue Corner:**
```
https://theproffit.github.io/ringside-camera/?room=test&push&label=blue-fighter
```
Should show: **BLUE CORNER** in blue at the top

**Red Corner:**
```
https://theproffit.github.io/ringside-camera/?room=test&push&label=red-fighter
```
Should show: **RED CORNER** in red at the top

**Director:**
```
https://theproffit.github.io/ringside-camera/?director=test
