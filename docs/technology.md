<style>
/* Universal black text override for this page */
* { color: #000000 !important; text-align: left !important; }
p { color: #000000 !important; font-weight: 500 !important; text-align: left !important; }
h1, h2, h3, h4, h5, h6 { color: #000000 !important; font-weight: 700 !important; text-align: left !important; }
.md-typeset p { color: #000000 !important; text-align: left !important; }
li { color: #000000 !important; font-weight: 500 !important; text-align: left !important; }
.md-content, .md-typeset { text-align: left !important; }
</style>

# 🔧 How DocScanner Works

Understand the technology behind DocScanner and how it delivers intelligent writing assistance while keeping your data completely private.

---

## 🖥️ Local Processing Architecture

All analysis happens on your computer using a 3-tier architecture: traditional rule processing, vector search with ChromaDB, and local AI models via Ollama.

---

## 🤖 AI Models Available

Choose from **Mistral** (4.4GB - best balance), **Llama3** (4.7GB - highest quality), **Phi3** (2.2GB - fast processing), or **TinyLLaMA** (637MB - resource-efficient).

---

## 📋 39+ Built-in Rules

Advanced rule engine checks grammar, style, readability, and structure using spaCy NLP for dependency parsing and linguistic analysis.

---

## 🔍 Vector Search Enhancement

ChromaDB-powered semantic search finds relevant context from your knowledge base to enhance AI suggestions with domain-specific improvements.

---

## 🔒 Complete Privacy Protection

Documents never leave your system. All AI models run locally via Ollama with no internet connection required and zero external data transmission.

---

## ⚡ Performance Specifications

**Small documents** (1-5 pages): 5-15 seconds. **Large documents** (25-50 pages): 2-5 minutes. Parallel processing with memory-efficient operations.

---

## 🎛️ Model Management

Built-in model selector with automatic system resource detection. Easy switching between AI models based on your hardware capabilities and quality needs.

---

## 🔄 Smart Fallback Logic

If AI models aren't available, DocScanner gracefully falls back to traditional rules, ensuring you always get helpful feedback regardless of system constraints.

---

## 🛠️ System Integration

RESTful API for programmatic access, webhook support for workflow automation, and compatibility with existing documentation pipelines.

---

## 📈 Adaptive Processing

Automatic system resource management with CPU optimization, multi-threading for rule processing, and async handling for smooth performance.

---

```mermaid
graph TD
    A[User Document] --> B[Document Processing]
    B --> C[Issue Detection - 39+ Rules]
    C --> D[Vector Search - ChromaDB]
    D --> E[RAG Enhancement - Local AI]
    E --> F[Smart Fallback Logic]
    F --> G[Enhanced Suggestions]
    G --> H[User Feedback & Export]
    
    style A fill:#e1f5fe
    style G fill:#e8f5e8
    style E fill:#fff3e0
```

---

**Ready to see how it works?**

<div style="text-align: center; margin-top: 20px;">
  <a href="/how-to-use/" class="md-button md-button--primary">Try It Now →</a>
  <a href="/usage/" class="md-button">See It In Action →</a>
  <a href="/performance-measures/" class="md-button">View Performance →</a>
</div>
