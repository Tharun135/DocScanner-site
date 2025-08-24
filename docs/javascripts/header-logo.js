// Add logo to header - FAR LEFT side, aligned with text
document.addEventListener('DOMContentLoaded', function() {
    // Find the span containing the site title text in the header
    const siteTitleSpan = document.querySelector('.md-header__title .md-header__topic .md-ellipsis');
    if (siteTitleSpan) {
        // Create logo element
        const logo = document.createElement('img');
        logo.src = '/images/logo.png';
        logo.alt = 'DocScanner Logo';
        logo.style.cssText = `
            height: 80px;
            width: auto;
            margin-left: 6px;
            vertical-align: middle;
            display: inline-block;
        `;
        // Insert logo immediately after the site title span
        siteTitleSpan.parentNode.insertBefore(logo, siteTitleSpan.nextSibling);
    }
});
