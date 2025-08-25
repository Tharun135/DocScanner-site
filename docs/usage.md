
<style>
/* Inline CSS to force black text and left align */
* { color: #000000 !important; text-align: left !important; }
p, li, h1, h2, h3, h4, h5, h6 { color: #000000 !important; text-align: left !important; }
.md-content, .md-typeset { text-align: left !important; }
</style>

# How DocScanner works?

<div style="background: linear-gradient(135deg, #fafafa 0%, #f5f5f5 100%); padding: 30px; border-radius: 20px; margin: 30px 0; box-shadow: 0 5px 15px rgba(0,0,0,0.05); border: 1px solid rgba(0,0,0,0.05); text-align: center;">

<div style="margin-bottom: 20px;">
<h3 style="color: #333333 !important; margin: 0; text-shadow: none;">🗂️ Complete Document Processing Pipeline</h3>
</div>

```mermaid
flowchart TD
  A["� Upload Document"] --> B["🛠 Text Extraction<br/>(PDF, MD, DOCX, HTML, ZIP)"]
  B --> C["🧹 Text Parsing & Cleaning"]
  C --> D["� Rule-Based Checks<br/>(Style Guide, Grammar, Readability)"]
  C --> E
  subgraph RAG["🔥 RAG (Retrieval-Augmented Generation)"]
    E["🧠 Embedding Generation"]
    E --> F["💾 Store in ChromaDB<br/>+ Knowledge Base"]
    F --> G["🤖 AI Suggestions & Feedback"]
  end
  D --> G
  G --> H["📑 Report Generation"]
```

</div>

---

**Ready to start using DocScanner?**

<div style="text-align: center; margin-top: 20px;">
  <a href="/features/" class="md-button md-button--primary">Advanced Features →</a>
  <a href="/technology/" class="md-button">Technical Details →</a>
  <a href="/faq/" class="md-button">Get Help →</a>
</div>
