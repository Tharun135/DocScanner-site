// Force background colors with JavaScript after page load
document.addEventListener('DOMContentLoaded', function() {
    // Apply background to HTML and body
    document.documentElement.style.background = 'linear-gradient(135deg, #d4f1d4 0%, #e1f5fe 50%, #c8e6ff 100%)';
    document.body.style.background = 'linear-gradient(135deg, #d4f1d4 0%, #e1f5fe 50%, #c8e6ff 100%)';
    
    // Apply backgrounds to Material Design containers
    const containers = document.querySelectorAll('.md-container, .md-main');
    containers.forEach(container => {
        container.style.background = 'transparent';
    });
    
    const mainInner = document.querySelector('.md-main__inner');
    if (mainInner) {
        mainInner.style.background = 'linear-gradient(135deg, rgba(230, 248, 255, 0.92) 0%, rgba(210, 245, 235, 0.92) 50%, rgba(220, 245, 255, 0.92) 100%)';
        mainInner.style.borderRadius = '15px';
        mainInner.style.margin = '20px 10px';
        mainInner.style.maxWidth = 'none';
        mainInner.style.boxShadow = '0 8px 32px rgba(26, 138, 138, 0.2)';
        mainInner.style.border = '1px solid rgba(26, 138, 138, 0.15)';
    }
    
    const content = document.querySelector('.md-content');
    if (content) {
        content.style.background = 'transparent';
        content.style.maxWidth = 'none';
    }
    
    const grid = document.querySelector('.md-grid');
    if (grid) {
        grid.style.maxWidth = 'none';
        grid.style.margin = '0';
    }
    
    const container = document.querySelector('.md-container');
    if (container) {
        container.style.maxWidth = 'none';
    }
    
    // Remove white backgrounds from any remaining elements
    const whiteElements = document.querySelectorAll('.md-typeset, .md-content__inner, article, section');
    whiteElements.forEach(element => {
        element.style.background = 'transparent';
    });
});

// Also apply on navigation changes (for single-page app behavior)
document.addEventListener('DOMContentLoaded', function() {
    const observer = new MutationObserver(function(mutations) {
        mutations.forEach(function(mutation) {
            if (mutation.type === 'childList') {
                // Reapply backgrounds when content changes
                const mainInner = document.querySelector('.md-main__inner');
                if (mainInner) {
                    mainInner.style.background = 'linear-gradient(135deg, rgba(230, 248, 255, 0.92) 0%, rgba(210, 245, 235, 0.92) 50%, rgba(220, 245, 255, 0.92) 100%)';
                    mainInner.style.maxWidth = 'none';
                    mainInner.style.margin = '20px 10px';
                }
            }
        });
    });
    
    observer.observe(document.body, {
        childList: true,
        subtree: true
    });
});
