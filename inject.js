(function() {
    console.log("NotebookLM TizenMod Loaded");

    // Handle TV Remote Keys
    window.addEventListener('keydown', function(e) {
        switch(e.keyCode) {
            case 38: // TV Up
                window.scrollBy(0, -100);
                break;
            case 40: // TV Down
                window.scrollBy(0, 100);
                break;
            case 10009: // TV Return/Back
                // Prevent app from closing instantly on back-press
                if (window.history.length > 1) {
                    window.history.back();
                }
                break;
        }
    });

    // Optional: Inject CSS to make the text bigger for TV viewing
    const style = document.createElement('style');
    style.innerHTML = `
        body { zoom: 1.2; } 
        .notebk-sidebar { width: 300px !important; }
    `;
    document.head.appendChild(style);
})();