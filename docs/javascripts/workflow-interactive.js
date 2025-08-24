// Interactive Workflow Enhancement
document.addEventListener('DOMContentLoaded', function() {
    // Add interaction to "Explore Each Step" heading
    const exploreHeading = document.querySelector('.explore-heading');
    if (exploreHeading) {
        exploreHeading.addEventListener('click', function() {
            // Scroll to workflow section smoothly
            const workflowGrid = document.querySelector('.workflow-grid');
            if (workflowGrid) {
                workflowGrid.scrollIntoView({
                    behavior: 'smooth',
                    block: 'center'
                });
                
                // Add a pulse effect to all workflow cards
                const cards = document.querySelectorAll('.workflow-card');
                cards.forEach((card, index) => {
                    setTimeout(() => {
                        card.style.animation = 'pulse 0.8s ease-out';
                        setTimeout(() => {
                            card.style.animation = '';
                        }, 800);
                    }, index * 100);
                });
            }
        });
        
        // Add cursor pointer
        exploreHeading.style.cursor = 'pointer';
    }
    
    // Add click animations to workflow cards (only on homepage)
    const workflowCards = document.querySelectorAll('.workflow-grid .workflow-card');
    
    workflowCards.forEach((card, index) => {
        // Add staggered animation delay
        card.style.setProperty('--delay', `${index * 0.2}s`);
        
        // Add click animation
        card.addEventListener('click', function(e) {
            // Let button clicks work normally - check for both direct button and nested elements
            if (e.target.tagName.toLowerCase() === 'a' || e.target.closest('a')) {
                return; // Don't interfere with button clicks
            }
            
            // Add pulse animation
            this.style.animation = 'pulse 0.6s ease-out';
            setTimeout(() => {
                this.style.animation = '';
            }, 600);
            
            // Find and navigate to the button's link - improved logic
            const button = this.querySelector('a.md-button');
            if (button && button.getAttribute('href')) {
                setTimeout(() => {
                    button.click(); // Use click() method instead of direct navigation
                }, 300);
            }
        });
        
        // Enhanced hover effects
        card.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-8px) scale(1.02)';
            this.style.boxShadow = '0 15px 40px rgba(0,0,0,0.2)';
        });
        
        card.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(-5px) scale(1)';
            this.style.boxShadow = '0 10px 30px rgba(0,0,0,0.2)';
        });
    });
    
    // Add animated entrance for cards
    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry, index) => {
            if (entry.isIntersecting) {
                setTimeout(() => {
                    entry.target.style.opacity = '1';
                    entry.target.style.transform = 'translateY(0)';
                }, index * 150);
            }
        });
    });
    
    workflowCards.forEach(card => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(30px)';
        card.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(card);
    });
    
    // Enhanced Mermaid diagram interaction with animated arrows
    const mermaidDiagram = document.querySelector('.mermaid');
    if (mermaidDiagram) {
        // Wait for Mermaid to fully render, then apply animations
        const applyAnimations = () => {
            // Apply dash animation to all edge paths
            const edges = mermaidDiagram.querySelectorAll('svg g.edgePaths .edgePath .path, svg .flowchart-link, svg path[marker-end]');
            console.log('Found edges:', edges.length); // Debug log
            
            edges.forEach((edge, index) => {
                edge.style.strokeDasharray = '8 4';
                edge.style.strokeDashoffset = '0';
                edge.style.animation = 'dash-flow 2s linear infinite';
                edge.style.animationDelay = `${index * 0.3}s`;
                edge.style.strokeWidth = '3px';
                
                // Add different colors
                const colors = ['#0277bd', '#7b1fa2', '#388e3c', '#f57c00', '#c2185b'];
                edge.style.stroke = colors[index % colors.length];
                
                console.log(`Applied animation to edge ${index}`); // Debug log
            });

            // Apply animation to arrow markers
            const markers = mermaidDiagram.querySelectorAll('svg defs marker polygon, svg defs marker path');
            console.log('Found markers:', markers.length); // Debug log
            
            markers.forEach((marker, index) => {
                marker.style.animation = 'arrow-marker-pulse 2s ease-in-out infinite';
                marker.style.animationDelay = `${index * 0.2}s`;
                console.log(`Applied animation to marker ${index}`); // Debug log
            });

            // If no edges found, try alternative selectors
            if (edges.length === 0) {
                const alternativeEdges = mermaidDiagram.querySelectorAll('svg path');
                console.log('Trying alternative selector, found paths:', alternativeEdges.length);
                
                alternativeEdges.forEach((edge, index) => {
                    if (edge.getAttribute('marker-end') || edge.getAttribute('stroke-width')) {
                        edge.style.strokeDasharray = '8 4';
                        edge.style.animation = 'dash-flow 2s linear infinite';
                        edge.style.animationDelay = `${index * 0.3}s`;
                        console.log(`Applied animation to alternative edge ${index}`);
                    }
                });
            }
        };

        // Try applying animations at different intervals
        setTimeout(applyAnimations, 1000);
        setTimeout(applyAnimations, 2000);
        setTimeout(applyAnimations, 3000);

        // Also apply on any DOM changes
        const observer = new MutationObserver(() => {
            setTimeout(applyAnimations, 500);
        });
        observer.observe(mermaidDiagram, { childList: true, subtree: true });

        // Add click handlers to nodes for better interactivity
        setTimeout(() => {
            const nodes = mermaidDiagram.querySelectorAll('[id*="flowchart"], .node');
            nodes.forEach(node => {
                node.style.cursor = 'pointer';
                node.addEventListener('click', function() {
                    // Add visual feedback
                    this.style.filter = 'brightness(1.2)';
                    setTimeout(() => {
                        this.style.filter = '';
                    }, 200);
                });
                
                // Add hover effect that speeds up nearby arrows
                node.addEventListener('mouseenter', function() {
                    const nearbyEdges = mermaidDiagram.querySelectorAll('svg path[stroke-dasharray]');
                    nearbyEdges.forEach(edge => {
                        edge.style.animationDuration = '1s';
                        edge.style.strokeWidth = '4px';
                    });
                });
                
                node.addEventListener('mouseleave', function() {
                    const nearbyEdges = mermaidDiagram.querySelectorAll('svg path[stroke-dasharray]');
                    nearbyEdges.forEach(edge => {
                        edge.style.animationDuration = '2s';
                        edge.style.strokeWidth = '3px';
                    });
                });
            });
        }, 2000);
    }
});

// Add smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});
