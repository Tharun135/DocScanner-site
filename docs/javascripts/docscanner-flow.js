// DocScanner Flow Animation Enhancer
console.log('🚀 DocScanner Flow Animation Loader...');

function enhanceDocScannerFlow() {
    console.log('Enhancing DocScanner flow animations...');
    
    // Wait for Mermaid to render
    const mermaidDiagram = document.querySelector('.mermaid');
    console.log('Mermaid diagram found:', !!mermaidDiagram);
    
    if (mermaidDiagram) {
        const svg = mermaidDiagram.querySelector('svg');
        console.log('SVG found:', !!svg);
        
        if (svg) {
            // Add CSS animation styles directly to head if not present
            if (!document.querySelector('#docscanner-flow-animations')) {
                const style = document.createElement('style');
                style.id = 'docscanner-flow-animations';
                style.textContent = `
                    .mermaid svg .edgePaths path,
                    .mermaid svg .flowchart-link,
                    .mermaid svg path {
                        stroke-dasharray: 20 10 !important;
                        animation: dash-flow 1.5s linear infinite !important;
                        stroke-width: 2px !important;
                    }
                    
                    @keyframes dash-flow {
                        0% { stroke-dashoffset: 0; }
                        100% { stroke-dashoffset: -30; }
                    }
                    
                    .mermaid svg .cluster rect {
                        fill: #fff3cd !important;
                        stroke: #ff9800 !important;
                        stroke-width: 3px !important;
                        filter: drop-shadow(2px 2px 6px rgba(255,152,0,0.3)) !important;
                    }
                    
                    .mermaid svg .node rect {
                        rx: 10 !important;
                        ry: 10 !important;
                        filter: drop-shadow(2px 2px 4px rgba(0,0,0,0.15)) !important;
                    }
                `;
                document.head.appendChild(style);
                console.log('✅ Animation styles injected into head');
            }
            
            // Force apply animations to all paths
            const allPaths = svg.querySelectorAll('path');
            console.log('Found paths for animation:', allPaths.length);
            
            allPaths.forEach(function(path, index) {
                // Apply dashed stroke and animation directly
                path.style.setProperty('stroke-dasharray', '20 10', 'important');
                path.style.setProperty('animation', 'dash-flow 1.5s linear infinite', 'important');
                path.style.setProperty('stroke-width', '2px', 'important');
                
                // Force a redraw
                path.style.display = 'none';
                path.offsetHeight; // Trigger reflow
                path.style.display = '';
                
                console.log('Applied animation to path', index);
            });
            
            console.log('✅ DocScanner flow animations enhanced!');
        } else {
            console.log('No SVG found, retrying in 1 second...');
            setTimeout(enhanceDocScannerFlow, 1000);
        }
    } else {
        console.log('No Mermaid diagram found, retrying in 1 second...');
        setTimeout(enhanceDocScannerFlow, 1000);
    }
}

// Apply enhancements multiple times to ensure they work
function startEnhancements() {
    enhanceDocScannerFlow();
    setTimeout(enhanceDocScannerFlow, 2000);
    setTimeout(enhanceDocScannerFlow, 4000);
    setTimeout(enhanceDocScannerFlow, 6000);
}

// Apply when DOM is ready
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', startEnhancements);
} else {
    startEnhancements();
}

console.log('✅ DocScanner Flow Animation Enhancer Loaded!');
