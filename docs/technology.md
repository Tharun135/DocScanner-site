<style>
* { color: #000 !important; text-align: left !important; }
p, li, h1, h2, h3, h4, h5, h6 { color: #000 !important; text-align: left !important; }
.md-content, .md-typeset { text-align: left !important; }
</style>

# 🛠️ Technologies used in DocScanner

This app is built using the following core technologies:

| Area            | Technology/Tool              | Purpose                                      |
|-----------------|-----------------------------|----------------------------------------------|
| Language        | Python                      | Main backend and scripting                   |
| Environment     | venv, pip                   | Dependency and environment management        |
| NLP             | spaCy, SentenceTransformers | Text processing, embeddings, rules           |
| Vector DB       | ChromaDB                    | Semantic search and retrieval                |
| LLM             | Ollama, Llama               | AI-powered rewriting, RAG                    |
| Backend         | Flask                       | API/web server                               |
| Data            | JSONL, JSON, .env           | Rules, config, environment                   |
| Version Control | Git                         | Collaboration, code management               |


## Programming Language & Environment

- **Python**: Main language for backend, scripts, and data processing.
- **venv**: Python’s built-in virtual environment tool for dependency isolation.
- **pip**: Python package manager for installing dependencies.

## Natural Language Processing (NLP)

- **spaCy**: Used for advanced NLP tasks such as tokenization, sentence splitting, and possibly part-of-speech tagging or entity recognition.
- **SentenceTransformers**: For generating vector embeddings from text, enabling semantic search and retrieval.
- **Custom Rule Files**: JSONL/JSON files (e.g., `rules_split_sentences.jsonl`, `rules_passive_voice.jsonl`) define writing rules, patterns, and few-shot examples for NLP tasks.

## Vector Database & Retrieval

- **ChromaDB**: Stores vector embeddings and associated metadata for fast semantic search and retrieval-augmented generation (RAG).

## AI & Large Language Models

- **Ollama**: Local LLM runner, likely used to serve Llama or similar models for fast, private inference.
- **Llama**: Used for AI-powered rewriting, suggestions, and RAG-based completions.
- **RAG (Retrieval-Augmented Generation)**: Combines knowledge base retrieval (from ChromaDB) with LLM generation for context-aware suggestions.

## Backend & API

- **Flask**: Lightweight Python web framework for serving APIs and possibly the web app.
- **run.py / app.py**: Entrypoint scripts to launch the backend server.

## Data & Configuration

- **JSONL/JSON**: Used for storing rules, few-shot examples, and configuration.
- **.env**: Environment variable configuration for secrets and settings.

## Additional Tools & Libraries

- **spaCy Model**: `en_core_web_sm` for English NLP tasks.
- **Git**: For version control, collaboration, and managing upstream/downstream changes.

## Frontend

- **JavaScript/TypeScript**: For UI logic.
- **React/Vue/Other**: For building the user interface.
- **REST API**: To communicate with the Flask backend.
