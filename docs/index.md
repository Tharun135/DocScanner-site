<div class="hero-section">
</div>

<style>
/* Hero Section Styling - Inline for highest priority */
.hero-section {
    background-image: url('/images/logo-docscanner.png') !important;
    background-size: cover !important;
    background-position: center !important;
    background-repeat: no-repeat !important;
    min-height: 500px !important;
    width: 100% !important;
    margin: 0 0 40px 0 !important;
    border-radius: 15px !important;
    box-shadow: 0 4px 20px rgba(0,0,0,0.2) !important;
    position: relative !important;
}

/* Force override Material theme styles */
.md-content__inner .hero-section {
    max-width: none !important;
    margin-left: -1rem !important;
    margin-right: -1rem !important;
}

/* Inline CSS to force black text - highest priority */
* { color: #000000 !important; }
p { color: #000000 !important; }
h1, h2, h3, h4, h5, h6 { color: #000000 !important; }
.md-typeset p { color: #000000 !important; }
/* Left align all content except workflow section */
.md-content, .md-typeset, h1, h2, h3, h4, h5, h6, p, li { text-align: left !important; }
/* Keep workflow section centered */
.workflow-grid, .workflow-card { text-align: center !important; }

/* ===== Animated Arrows ===== */
.mermaid svg .edgePaths path {
  stroke-dasharray: 20 10 !important;
  animation: dash 1.5s linear infinite !important;
  stroke-width: 2px;
}
@keyframes dash {
  to {
    stroke-dashoffset: -30;
  }
}

/* ===== Rounded, modern node boxes ===== */
.mermaid svg rect {
  rx: 10;
  ry: 10;
  stroke-width: 2px;
  filter: drop-shadow(2px 2px 5px rgba(0,0,0,0.15));
}

/* ===== Stage-specific colors ===== */
.mermaid svg .node rect {
  fill: #e3f2fd !important;
  stroke: #2196f3 !important;
}

/* Understanding stage */
.mermaid svg .node[id*="B"] rect {
  fill: #fff8e1 !important;
  stroke: #ffb300 !important;
}

/* Retrieval stage */
.mermaid svg .node[id*="C"], 
.mermaid svg .node[id*="D"] rect {
  fill: #e8f5e9 !important;
  stroke: #43a047 !important;
}

/* Generation stage */
.mermaid svg .node[id*="E"], 
.mermaid svg .node[id*="F"] rect {
  fill: #f3e5f5 !important;
  stroke: #8e24aa !important;
}

/* Output stage */
.mermaid svg .node[id*="G"] rect {
  fill: #fff3e0 !important;
  stroke: #fb8c00 !important;
}

/* ===== Text styling ===== */
.mermaid svg text {
  font-family: 'Segoe UI', sans-serif !important;
  font-size: 14px !important;
  font-weight: 500;
}

/* ===== Hover effects ===== */
.mermaid:hover {
  transform: scale(1.02);
  box-shadow: 0 8px 25px rgba(0,0,0,0.15);
  transition: all 0.3s ease;
}
</style>

# 🏠 Welcome to DocScanner

<p style="color: #000000 !important; font-weight: 600 !important;">Your intelligent writing assistant that helps create better documents while keeping your data completely private and secure.</p>

---

## 🤖 AI-Powered writing assistant

DocScanner is like having a professional editor that works for you 24/7. It analyzes your documents and suggests improvements to make your writing clearer, more professional, and easier to read.

<video width="100%" controls>
  <source src="images/AI-docscanner.mp4" type="video/mp4">
  Your browser does not support the video tag.
</video>

---

## 🔍 What makes DocScanner different

**Complete Privacy** - Everything stays on your computer, no cloud processing  
**Universal Support** - Works with any document format  
**Always Available** - Functions offline after initial setup  
**Smart Analysis** - AI-powered suggestions for clearer writing

---

## 🚀 Ready to transform your writing?

<div style="text-align: center; margin: 40px 0;">

<a href="/how-to-use/" class="md-button md-button--primary md-button--lg" style="margin: 0 10px 10px 0;">🎯 Start Your Journey</a>

<a href="/benefits/" class="md-button md-button--lg" style="margin: 0 10px 10px 0;">💡 See All Benefits</a>

<a href="/faq/" class="md-button md-button--lg" style="margin: 0 10px 10px 0;">❓ Have Questions?</a>

</div>
