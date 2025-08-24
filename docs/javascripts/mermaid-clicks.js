// Simple Direct Mermaid Click Handler
console.log('Loading direct mermaid click handler...');

// Function to add click handlers
function addMermaidClickHandlers() {
    console.log('Adding Mermaid click handlers...');
    
    // Wait a bit for Mermaid to render
    setTimeout(function() {
        const mermaidContainer = document.querySelector('.mermaid');
        console.log('Mermaid container found:', !!mermaidContainer);
        
        if (mermaidContainer) {
            const svg = mermaidContainer.querySelector('svg');
            console.log('SVG found:', !!svg);
            
            if (svg) {
                // Add click handler to the entire SVG
                svg.addEventListener('click', function(e) {
                    console.log('SVG clicked!', e.target);
                    showClickNotification('🎉 Workflow Step Clicked!', 'You successfully clicked on the workflow diagram!');
                });
                
                // Try to find and add handlers to specific elements
                const allClickableElements = svg.querySelectorAll('g, rect, circle, ellipse, polygon, text, foreignObject');
                console.log('Found clickable elements:', allClickableElements.length);
                
                allClickableElements.forEach(function(element, index) {
                    element.style.cursor = 'pointer';
                    element.addEventListener('click', function(e) {
                        e.stopPropagation();
                        console.log('Element clicked:', element.tagName, index);
                        
                        const stepMessages = [
                            '📄 Upload Document: Drag & drop your files for instant analysis!',
                            '🚀 Intelligent Processing: Multi-engine AI analysis in progress!',
                            '📚 Grammar Check: 39+ built-in rules ensuring perfection!',
                            '🤖 AI Analysis: Local models working their magic!',
                            '📐 Structure Review: Layout and format optimization!',
                            '💎 Smart Suggestions: Actionable insights ready!',
                            '✨ Transformation: Your document is now professional quality!',
                            '📤 Export Ready: Download in multiple formats!'
                        ];
                        
                        const message = stepMessages[index % stepMessages.length] || 'DocScanner workflow step activated!';
                        showClickNotification('✨ Step ' + (index + 1), message);
                    });
                    
                    // Add hover effect
                    element.addEventListener('mouseenter', function() {
                        this.style.filter = 'brightness(1.2) drop-shadow(0 4px 8px rgba(0,0,0,0.3))';
                        this.style.transform = 'scale(1.05)';
                        this.style.transition = 'all 0.3s ease';
                    });
                    
                    element.addEventListener('mouseleave', function() {
                        this.style.filter = '';
                        this.style.transform = '';
                    });
                });
                
                console.log('Click handlers added successfully!');
            }
        }
    }, 2000);
}

// Function to show notification
function showClickNotification(title, message) {
    console.log('Showing notification:', title, message);
    
    // Remove existing notification
    const existing = document.querySelector('.click-notification');
    if (existing) {
        existing.remove();
    }
    
    // Create notification
    const notification = document.createElement('div');
    notification.className = 'click-notification';
    notification.innerHTML = `
        <div style="
            position: fixed;
            top: 20px;
            right: 20px;
            background: #28a745;
            color: white;
            padding: 16px 20px;
            border-radius: 8px;
            box-shadow: 0 6px 20px rgba(0,0,0,0.3);
            z-index: 10000;
            max-width: 350px;
            font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
            animation: slideInNotification 0.4s ease-out;
        ">
            <div style="font-weight: bold; margin-bottom: 4px; font-size: 16px;">${title}</div>
            <div style="font-size: 14px; line-height: 1.4;">${message}</div>
        </div>
    `;
    
    // Add animation styles if not already added
    if (!document.querySelector('#notification-animation-styles')) {
        const styles = document.createElement('style');
        styles.id = 'notification-animation-styles';
        styles.textContent = `
            @keyframes slideInNotification {
                from {
                    opacity: 0;
                    transform: translateX(100px);
                }
                to {
                    opacity: 1;
                    transform: translateX(0);
                }
            }
            @keyframes slideOutNotification {
                from {
                    opacity: 1;
                    transform: translateX(0);
                }
                to {
                    opacity: 0;
                    transform: translateX(100px);
                }
            }
        `;
        document.head.appendChild(styles);
    }
    
    document.body.appendChild(notification);
    
    // Auto remove after 4 seconds
    setTimeout(function() {
        if (notification.parentNode) {
            notification.querySelector('div').style.animation = 'slideOutNotification 0.4s ease-in';
            setTimeout(function() {
                if (notification.parentNode) {
                    notification.remove();
                }
            }, 400);
        }
    }, 4000);
}

// Start when DOM is ready
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', addMermaidClickHandlers);
} else {
    addMermaidClickHandlers();
}

// Also try after a delay in case Mermaid is slow
setTimeout(addMermaidClickHandlers, 3000);
setTimeout(addMermaidClickHandlers, 5000);

console.log('Direct mermaid click handler loaded!');
