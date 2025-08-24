console.log('🚀 Simple Click Handler Loading...');

function createClickableOverlay() {
    console.log('Creating clickable overlay...');
    
    // Wait for page to load
    setTimeout(function() {
        const mermaidDiv = document.querySelector('div.mermaid');
        console.log('Mermaid div found:', !!mermaidDiv);
        
        if (mermaidDiv) {
            // Create invisible overlay
            const overlay = document.createElement('div');
            overlay.style.cssText = `
                position: absolute;
                top: 0;
                left: 0;
                width: 100%;
                height: 100%;
                background: transparent;
                cursor: pointer;
                z-index: 10;
            `;
            
            // Make mermaid container relative for positioning
            mermaidDiv.style.position = 'relative';
            
            // Add overlay to mermaid container
            mermaidDiv.appendChild(overlay);
            
            // Add click handler to overlay
            overlay.addEventListener('click', function(e) {
                console.log('Overlay clicked!');
                showBigNotification();
                e.preventDefault();
                e.stopPropagation();
            });
            
            console.log('✅ Clickable overlay added successfully!');
            
            // Also add direct click to mermaid div itself
            mermaidDiv.addEventListener('click', function(e) {
                console.log('Mermaid div clicked directly!');
                showBigNotification();
            });
        }
    }, 3000);
}

function showBigNotification() {
    console.log('Showing big notification...');
    
    // Remove any existing notification
    const existing = document.querySelector('#big-notification');
    if (existing) {
        existing.remove();
    }
    
    // Create big notification
    const notification = document.createElement('div');
    notification.id = 'big-notification';
    notification.innerHTML = `
        <div style="
            position: fixed;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
            background: linear-gradient(135deg, #4CAF50, #45a049);
            color: white;
            padding: 40px 60px;
            border-radius: 20px;
            box-shadow: 0 20px 40px rgba(0,0,0,0.3);
            z-index: 99999;
            text-align: center;
            font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
            max-width: 80vw;
            animation: bounceIn 0.6s ease-out;
        ">
            <div style="font-size: 48px; margin-bottom: 20px;">🎉</div>
            <div style="font-size: 24px; font-weight: bold; margin-bottom: 10px;">SUCCESS!</div>
            <div style="font-size: 16px; line-height: 1.5;">
                DocScanner Workflow Clicked!<br>
                Interactive functionality is working perfectly! ✨
            </div>
            <div style="font-size: 14px; margin-top: 20px; opacity: 0.9;">
                Click anywhere to close
            </div>
        </div>
    `;
    
    // Add bounce animation
    const style = document.createElement('style');
    style.textContent = `
        @keyframes bounceIn {
            0% { transform: translate(-50%, -50%) scale(0.3); opacity: 0; }
            50% { transform: translate(-50%, -50%) scale(1.05); }
            70% { transform: translate(-50%, -50%) scale(0.9); }
            100% { transform: translate(-50%, -50%) scale(1); opacity: 1; }
        }
    `;
    document.head.appendChild(style);
    
    document.body.appendChild(notification);
    
    // Close on click
    notification.addEventListener('click', function() {
        notification.style.animation = 'bounceIn 0.3s ease-in reverse';
        setTimeout(function() {
            if (notification.parentNode) {
                notification.remove();
            }
        }, 300);
    });
    
    // Auto close after 5 seconds
    setTimeout(function() {
        if (notification.parentNode) {
            notification.click();
        }
    }, 5000);
}

// Run when DOM is ready
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', createClickableOverlay);
} else {
    createClickableOverlay();
}

// Also try multiple times to ensure it works
setTimeout(createClickableOverlay, 2000);
setTimeout(createClickableOverlay, 4000);
setTimeout(createClickableOverlay, 6000);

console.log('✅ Simple Click Handler Loaded!');
