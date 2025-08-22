# ❓ Frequently Asked Questions

Quick answers to common questions about DocScanner.

---

## Basic Questions

### What is DocScanner?

DocScanner is an AI-powered writing assistant that runs completely on your infrastructure. It combines 39+ traditional writing rules with local AI models to improve document quality while ensuring complete privacy.

### How is it different from online tools?

- **Complete Privacy**: All processing happens on your servers
- **No Subscription Fees**: One-time setup, unlimited usage
- **Always Available**: Works offline, no external dependencies
- **Customizable**: Add your organization's specific writing rules

### What file formats are supported?

Microsoft Word (.docx), PDF, HTML, Markdown, Plain Text, and ZIP archives for batch processing.

---

## Technical Questions

### What are the system requirements?

**Minimum:**
- 8GB RAM, 4-core CPU, 20GB storage
- Python 3.11+, modern web browser

**Recommended:**
- 16GB RAM, 8-core CPU, 50GB SSD storage

### Which AI model should I choose?

- **Mistral** (4.4GB) - Best balance of quality and speed
- **Llama3** (4.7GB) - Highest quality for critical documents
- **Phi3** (2.2GB) - Fast processing, resource-efficient  
- **TinyLLaMA** (637MB) - Always available, works on any system

### How accurate are the suggestions?

- Grammar issues: 94-96% accuracy
- Style improvements: 88-92% user acceptance rate
- Each AI suggestion includes confidence scores (High/Medium/Low)

---

## Setup & Usage

### How long does setup take?

- Single user: 15-20 minutes (including model download)
- Enterprise deployment: 1-2 hours with IT configuration

### Can I add custom writing rules?

Yes! You can add organization-specific rules through the web interface. Simply define what text to find, what to replace it with, and categorize the rule (like "branding" or "style guidelines").

### Does it work offline?

Yes, once models are downloaded, DocScanner works completely offline.

---

## Performance & Scaling

### How fast is document processing?

- Small documents (1-5 pages): 5-15 seconds
- Medium documents (10-20 pages): 30-60 seconds
- Large documents (50+ pages): 2-5 minutes

### Can it handle multiple users?

Yes, DocScanner scales from single users to enterprise deployments with Docker and Kubernetes support.

---

## Troubleshooting

### AI models won't load

1. Check available disk space (12GB+ recommended)
2. Verify Ollama service is running
3. Try TinyLLaMA for minimal resource usage
4. Restart the application

### Processing is slow

1. Switch to a lighter model (Phi3 instead of Llama3)
2. Close other memory-intensive applications
3. Enable background processing for large documents

### Suggestions are inconsistent

1. Focus on high-confidence suggestions (90%+)
2. Check if document type is correctly detected
3. Consider adding custom rules for specific needs

---

## Security & Privacy

### Is my data secure?

Yes. DocScanner provides complete data privacy:
- All processing happens on your infrastructure
- No external API calls or data transmission
- Documents encrypted at rest and in transit
- Zero analytics or telemetry collection

### Is it compliant with regulations?

DocScanner is designed for compliance:
- GDPR compliant (no external data sharing)
- HIPAA compatible for healthcare organizations
- SOC 2 Type II controls available

---

## Integration & API

### Can I integrate with existing workflows?

Yes, DocScanner provides:
- RESTful API for programmatic access
- CI/CD pipeline integration examples
- Webhook support for notifications
- Batch processing capabilities

### Example API usage?

The API accepts POST requests with document files and returns analysis results in JSON format. You can specify which AI model to use and set confidence thresholds for suggestions.

---

**Need more help?**

- Check the [Usage Guide](usage.md) for detailed instructions
- Review [Technical Details](technology.md) for architecture information
- Explore [Features](features.md) for complete capabilities

---

**Ready to get started?**

[Back to Installation →](how-to-use.md){ .md-button .md-button--primary }

[Usage Guide →](usage.md){ .md-button }

[Technical Details →](technology.md){ .md-button }
