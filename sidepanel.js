// Load the URL from storage when the side panel is loaded
document.addEventListener('DOMContentLoaded', function() {
    chrome.storage.sync.get('savedUrl', function(data) {
        document.getElementById('urlContainer').textContent = data.savedUrl || 'No URL saved yet.';
    });
});
