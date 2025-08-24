// Simple & Smooth Mermaid Interactions
document.addEventListener('DOMContentLoaded', function() {
    function enhanceMermaidDiagram() {
        const mermaidContainer = document.querySelector('.mermaid');
        
        if (mermaidContainer) {
            // Wait for Mermaid to render
            setTimeout(() => {
                const svg = mermaidContainer.querySelector('svg');
                
                if (svg) {
                    console.log('Mermaid SVG found, adding interactions...');
                    
                    // Add simple click interactions to nodes
                    const nodes = svg.querySelectorAll('.node, [id*="flowchart"]');
                    console.log('Found nodes:', nodes.length);
                    
                    nodes.forEach((node, index) => {
                        node.style.cursor = 'pointer';
                        
                        // Simple click effect - just add a class for CSS animation
                        node.addEventListener('click', function(e) {
                            e.preventDefault();
                            console.log('Node clicked:', index);
                            
                            // Remove previous clicked class from all nodes
                            nodes.forEach(n => n.classList.remove('clicked'));
                            
                            // Add clicked class to this node
                            this.classList.add('clicked');
                            
                            // Show simple alert with step info
                            showStepInfo(index);
                            
                            // Remove after animation completes
                            setTimeout(() => {
                                this.classList.remove('clicked');
                            }, 600);
                        });
                        
                        // Add hover effect
                        node.addEventListener('mouseenter', function() {
                            console.log('Node hover:', index);
                            this.style.transform = 'scale(1.05)';
                            this.style.transition = 'transform 0.3s ease';
                        });
                        
                        node.addEventListener('mouseleave', function() {
                            this.style.transform = 'scale(1)';
                        });
                    });
                    
                    // Also try to target rectangles and shapes directly
                    const shapes = svg.querySelectorAll('rect, circle, ellipse, polygon');
                    console.log('Found shapes:', shapes.length);
                    
                    shapes.forEach((shape, index) => {
                        shape.style.cursor = 'pointer';
                        shape.addEventListener('click', function(e) {
                            e.preventDefault();
                            console.log('Shape clicked:', index);
                            showStepInfo(index);
                        });
                    });
                    
                    // Add keyboard navigation
                    mermaidContainer.setAttribute('tabindex', '0');
                    mermaidContainer.addEventListener('keydown', function(e) {
                        if (e.key === 'Enter' || e.key === ' ') {
                            e.preventDefault();
                            console.log('Keyboard interaction');
                            showStepInfo(0);
                            // Trigger a gentle pulse animation
                            this.style.animation = 'none';
                            this.offsetHeight; // Trigger reflow
                            this.style.animation = 'diagram-pulse 1s ease-out';
                        }
                    });
                    
                    console.log('Mermaid interactions setup complete!');
                }
            }, 1500); // Increased timeout to ensure Mermaid is fully rendered
        }
    }
    
    // Show step information
    function showStepInfo(index) {
        const stepInfo = [
            "📄 Upload Document: Support for multiple formats with drag & drop",
            "🚀 Intelligent Processing: Multi-engine analysis with AI power",
            "📚 Grammar Analysis: Built-in rules with spaCy NLP",
            "🤖 AI Analysis: Local AI models - Mistral, Llama, Phi3",
            "📐 Structure Check: Layout analysis and format validation",
            "💎 Smart Suggestions: Actionable insights with confidence scores",
            "✨ Transformation: Professional quality improvements",
            "📤 Export Results: Multiple formats with detailed reports"
        ];
        
        const info = stepInfo[index] || "DocScanner Step: Part of the intelligent workflow";
        
        // Create a simple notification
        const notification = document.createElement('div');
        notification.style.cssText = `
            position: fixed;
            top: 20px;
            right: 20px;
            background: #333;
            color: white;
            padding: 15px 20px;
            border-radius: 8px;
            box-shadow: 0 4px 12px rgba(0,0,0,0.3);
            z-index: 1000;
            max-width: 300px;
            font-size: 14px;
            animation: slideIn 0.3s ease-out;
        `;
        notification.textContent = info;
        
        // Add animation keyframes
        if (!document.querySelector('#notification-styles')) {
            const styles = document.createElement('style');
            styles.id = 'notification-styles';
            styles.textContent = `
                @keyframes slideIn {
                    from { opacity: 0; transform: translateX(20px); }
                    to { opacity: 1; transform: translateX(0); }
                }
            `;
            document.head.appendChild(styles);
        }
        
        document.body.appendChild(notification);
        
        // Remove after 3 seconds
        setTimeout(() => {
            notification.style.animation = 'slideIn 0.3s ease-in reverse';
            setTimeout(() => notification.remove(), 300);
        }, 3000);
    }
    
    // Initial enhancement
    enhanceMermaidDiagram();
    
    // Re-enhance if mermaid content changes
    const observer = new MutationObserver(function(mutations) {
        mutations.forEach(function(mutation) {
            if (mutation.addedNodes) {
                mutation.addedNodes.forEach(function(node) {
                    if (node.nodeType === 1 && (node.classList.contains('mermaid') || node.querySelector('.mermaid'))) {
                        console.log('Mermaid content changed, re-enhancing...');
                        setTimeout(() => enhanceMermaidDiagram(), 500);
                    }
                });
            }
        });
    });
    
    observer.observe(document.body, {
        childList: true,
        subtree: true
    });
    
    // Also try to enhance after a longer delay in case Mermaid is slow
    setTimeout(() => {
        console.log('Backup enhancement attempt...');
        enhanceMermaidDiagram();
    }, 3000);
});
