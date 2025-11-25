// Ringside VR - Custom JavaScript
// Further hide any VDO.Ninja references

(function() {
    // Wait for page to load
    window.addEventListener('load', function() {
        // Remove any remaining VDO.Ninja text
        document.body.innerHTML = document.body.innerHTML.replace(/VDO\.Ninja/gi, 'Ringside VR');
        document.body.innerHTML = document.body.innerHTML.replace(/vdo\.ninja/gi, 'Ringside VR');
        
        // Update page title
        document.title = 'Ringside VR - Camera Feed';
    });
})();
```

4. **Commit this file too**

---

## Step 2: Test Your Branded Version

Now open your fork with the custom branding applied:
```
https://theproffit.github.io/vdo.ninja/?css=https://theproffit.github.io/vdo.ninja/brand.css&js=https://theproffit.github.io/vdo.ninja/brand.js
