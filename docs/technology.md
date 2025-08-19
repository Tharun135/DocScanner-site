# Technology Behind DocScanner AI

DocScanner AI combines traditional rule-based systems with modern AI to help technical writers efficiently review content.

---

## Methodology

### Rule-Based Configuration

- Enforces style, grammar, and terminology rules.
- Allows customization according to your organization’s standards.

### RAG + LLM

- Context-aware AI suggestions using Retrieval-Augmented Generation.
- Provides suggestions grounded in your existing documentation.

### Tech Stack

- **Backend:** Python, Flask  
- **NLP & AI:** spaCy, ChromaDB, OpenAI / LLM integration  
- **Frontend / Docs:** MkDocs with Material theme  

![Tech Stack Diagram](images/techstack.png)

---

## Workflow Diagram

```mermaid
graph TD
    A[User Docs] --> B[Rule Engine]
    B --> C[LLM Suggestions]
    C --> D[Feedback / Export]
