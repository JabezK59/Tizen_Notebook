(function() {
    console.log("NotebookLM Mod Active");
    // This helps the TV browser handle the heavy Google JS
    window.addEventListener('keydown', function(e) {
        if(e.keyCode === 38) window.scrollBy(0, -150); // Up
        if(e.keyCode === 40) window.scrollBy(0, 150);  // Down
    });
})();
