<div class="hero-section" style="background-image: url('images/logo-docscanner.png'); background-size: cover; background-position: center; background-repeat: no-repeat; min-height: 500px; position: relative; margin: -20px -20px 40px -20px; border-radius: 15px;">
</div>

<style>
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

## 🤖 AI-Powered Writing Assistant

DocScanner is like having a professional editor that works for you 24/7. It analyzes your documents and suggests improvements to make your writing clearer, more professional, and easier to read.

---

## 🔍 What Makes DocScanner Different

**Complete Privacy** - Everything stays on your computer, no cloud processing  
**Universal Support** - Works with any document format  
**Always Available** - Functions offline after initial setup  
**Smart Analysis** - AI-powered suggestions for clearer writing

---

## 🤖 RAG-Based DocScanner Workflow

<div style="background: linear-gradient(135deg, #fafafa 0%, #f5f5f5 100%); padding: 30px; border-radius: 20px; margin: 30px 0; box-shadow: 0 5px 15px rgba(0,0,0,0.05); border: 1px solid rgba(0,0,0,0.05); text-align: center;">

<div style="margin-bottom: 20px;">
<h3 style="color: #333333 !important; margin: 0; text-shadow: none;">🔍 AI-Powered Document Analysis</h3>
</div>

```mermaid
flowchart TD
    A["📝 Ask a Question"] --> B["🤔 Understand the Question<br/>(Turn into search form)"]
    B --> C["🔍 Retrieve Helpful Info<br/>(Search the knowledge base)"]
    C --> D["📂 Select the Best Bits<br/>(Most relevant info)"]
    D --> E["🔗 Merge with the Question"]
    E --> F["💡 Generate the Answer<br/>(AI writes the reply)"]
    F --> G["📢 Deliver Answer to the User"]
```

</div>

---

## 🚀 Ready to Transform Your Writing?

<div style="text-align: center; margin: 40px 0;">

<a href="/how-to-use/" class="md-button md-button--primary md-button--lg" style="margin: 0 10px 10px 0;">🎯 Start Your Journey</a>

<a href="/benefits/" class="md-button md-button--lg" style="margin: 0 10px 10px 0;">💡 See All Benefits</a>

<a href="/faq/" class="md-button md-button--lg" style="margin: 0 10px 10px 0;">❓ Have Questions?</a>

</div>
