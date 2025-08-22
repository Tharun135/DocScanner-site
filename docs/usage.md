# � Usage Guide

Quick guide to using DocScanner's AI-powered document analysis.

---

## Getting Started

### 1. Launch DocScanner

- **Local**: Open `http://localhost:5000` in your browser
- **Team**: Access your organization's DocScanner URL
- **First Time**: System automatically detects available AI models

### 2. Upload Your Document

**Supported Formats:**
- Microsoft Word (.docx), PDF, HTML, Markdown, Plain Text
- **Batch Upload**: ZIP files with multiple documents
- **Quick Input**: Copy-paste text directly

**Upload Methods:**
- Drag & drop files onto the interface
- Click "Browse" to select files
- Enter URLs for web page analysis

---

## Understanding Results

### Issue Types

- **Grammar**: Passive voice, subject-verb agreement, word choice
- **Style**: Long sentences, readability, tone consistency  
- **Format**: Punctuation, capitalization, list formatting

### AI Suggestions

Each suggestion shows:
- **Issue Type**: What writing problem was detected
- **Original Text**: The problematic section highlighted
- **Suggested Fix**: The improved version
- **Confidence Level**: How reliable the suggestion is
- **Source**: Which AI model provided the suggestion

**Confidence Levels:**
- **High (90%+)**: Strong AI recommendation - likely correct
- **Medium (70-89%)**: Good suggestion - review recommended
- **Low (<70%)**: Consider traditional rule-based alternative

---

## Working with Suggestions

### Reviewing Results

1. **Focus on High Confidence First** - Most likely to be helpful
2. **Check Context** - Ensure suggestions fit your document's purpose
3. **Accept/Reject** - Click buttons to apply or dismiss suggestions
4. **Multiple Options** - Choose between AI and traditional suggestions

### Making Changes

- **Individual Edits**: Accept suggestions one by one
- **Batch Apply**: Select multiple suggestions to apply together
- **Manual Override**: Edit text directly in the interface
- **Export Options**: Download improved document in various formats

---

## Advanced Features

### Model Selection

- **Automatic (Default)**: System chooses best model for your hardware
- **Mistral**: Best balance of quality and speed
- **Llama3**: Highest quality for critical documents
- **Phi3**: Fast processing for high-volume work
- **TinyLLaMA**: Always available, works on any system

### Custom Rules

Add organization-specific writing guidelines:

1. Go to Settings > Custom Rules
2. Add your organization's specific terms and replacements
3. Choose categories like "branding" or "style"
4. Save to apply across all future documents

### Batch Processing

1. **Prepare Files**: Package documents in a ZIP file
2. **Upload Batch**: System processes all documents sequentially  
3. **Review Results**: Access individual document analyses
4. **Export All**: Download all improved documents at once

---

## API Integration

### Basic Usage

The API allows you to submit documents programmatically and receive analysis results in JSON format, making it easy to integrate with existing systems.

### CI/CD Integration

You can integrate DocScanner into your development pipeline to automatically check documentation quality as part of your build process.

---

## Export Options

### Document Formats

- **Clean Version**: All accepted suggestions applied
- **Track Changes**: Word document showing modifications
- **Comparison**: Side-by-side original vs improved

### Report Formats

- **PDF Summary**: Professional improvement report
- **JSON Data**: Machine-readable results for integration
- **CSV Analysis**: Spreadsheet-compatible issue tracking

---

## Tips for Best Results

### Document Preparation

- **Clean Formatting**: Remove excessive styling before upload
- **Complete Content**: Analyze full documents rather than fragments
- **Clear Structure**: Use proper headings and organization

### Working with AI

- **Iterative Process**: Run analysis multiple times as you improve
- **Context Awareness**: Consider document type and audience
- **Quality Focus**: Prioritize high-confidence suggestions

### Team Usage

- **Consistent Models**: Use same settings across your team
- **Shared Rules**: Develop organization-specific guidelines
- **Regular Training**: Keep team updated on best practices

---

**Need Help?**

- **Built-in Help**: Press F1 for context-sensitive assistance
- **FAQ**: Check [frequently asked questions](faq.md)
- **Technical Details**: Learn about the [technology](technology.md)

### Phase 3: Results & Recommendations
- **Real-time Display**: Issues highlighted as analysis progresses
- **Confidence Scores**: AI certainty levels for each suggestion
- **Context Awareness**: Suggestions adapt to document type
- **Multiple Options**: Choose between AI and traditional suggestions

---

## 📊 Understanding Your Results

### Issue Classification
**Grammar Issues:**
- Passive voice constructions
- Subject-verb disagreements
- Incorrect word usage

**Style Issues:**
- Long, complex sentences
- Inconsistent terminology
- Inappropriate tone

**Readability Issues:**
- Dense paragraphs
- Complex vocabulary
- Poor structure

### AI Enhancement Indicators

When AI makes suggestions, you'll see:
- **Issue Type**: What problem was detected (e.g., passive voice)
- **Original**: The problematic text highlighted
- **AI Suggestion**: The improved version
- **Confidence**: How sure the AI is about the suggestion
- **Model Used**: Which AI model provided the suggestion
- **Method**: Shows it came from local AI processing

### Understanding Confidence Levels
- **High (90%+)**: AI very confident in suggestion
- **Medium (70-89%)**: Good suggestion, manual review recommended
- **Low (<70%)**: Consider traditional rule-based suggestion instead

---

## 🎯 Advanced Features

### Document Type Optimization
**Technical Documentation:**
- Emphasis on clarity and precision
- Active voice preferences
- Consistent terminology

**Marketing Content:**
- Engaging language suggestions
- Audience-appropriate tone
- Brand consistency checks

**Legal Documents:**
- Formal language maintenance
- Precision over simplicity
- Traditional structure preservation

### Custom Knowledge Integration

1. **Access Settings**: Click "Customize Rules" in the interface
2. **Add Custom Rules**: Define organization-specific guidelines for terms, replacements, and categories like brand consistency
3. **Test Rules**: Validate custom rules with sample documents  
4. **Deploy**: Apply to all future document analysis

---

## 📈 Batch Processing & Automation

### Multiple Document Analysis
1. **Zip Upload**: Package multiple documents in a single ZIP file
2. **Batch Analysis**: System processes all documents sequentially
3. **Consolidated Report**: Single report covering all documents
4. **Individual Files**: Access specific document results

### API Integration

For developers, DocScanner provides a simple API that accepts document uploads and returns analysis results. This allows integration with existing workflows and automation systems.

### CI/CD Pipeline Integration

DocScanner can be integrated into your development pipeline to automatically check documentation quality as part of your build process.

---

## 🔧 Customization & Settings

### Model Preferences
**Automatic Selection (Recommended):**
- System chooses optimal model for your hardware
- Balances quality and performance

**Manual Selection:**
- **Mistral**: Best overall quality and speed balance
- **Phi3**: Memory-efficient for resource-constrained systems
- **Llama3**: Maximum quality for critical documents
- **TinyLLaMA**: Fastest processing, always available

### Performance Tuning
**Memory Settings:**
- Adjust model loading based on available RAM
- Configure concurrent processing limits
- Set cache preferences for frequently used rules

**Response Time Optimization:**
- Enable model pre-loading for faster startup
- Configure background processing for large documents
- Set timeout limits for AI suggestions

---

## 📋 Reports & Export Options

### Interactive Reports
- **Live Editing**: Make changes directly in the interface
- **Before/After**: Compare original vs. improved text
- **Issue Tracking**: Mark suggestions as accepted/rejected
- **Progress Metrics**: See improvement statistics

### Export Formats
**Document Formats:**
- **Clean Version**: Document with all suggestions applied
- **Track Changes**: Word document showing all modifications
- **Side-by-Side**: Original and improved versions compared

**Report Formats:**
- **PDF Summary**: Professional report for stakeholders
- **JSON Data**: Machine-readable results for integration
- **CSV Analysis**: Spreadsheet-compatible issue tracking
- **HTML Report**: Web-viewable detailed analysis

---

## 🚨 Troubleshooting

### Common Issues

**AI Model Not Loading:**
1. Check available disk space (12GB+ recommended)
2. Verify Ollama installation and service status
3. Try switching to TinyLLaMA for minimal requirements

**Slow Performance:**
1. Close unnecessary applications to free RAM
2. Switch to a smaller model (Phi3 instead of Llama3)
3. Enable document pre-processing for large files

**Inconsistent Suggestions:**
1. Check confidence scores - ignore low confidence suggestions
2. Verify document type is correctly detected
3. Consider adding custom rules for domain-specific content

### Getting Help
- **Built-in Help**: Press F1 for context-sensitive assistance
- **System Status**: Check model availability and performance metrics
- **Logs**: Review processing logs for detailed error information
- **Community**: Access user forums and documentation

---

## 💡 Pro Tips for Best Results

### Document Preparation
- **Clean Formatting**: Remove excessive styling before upload
- **Clear Structure**: Use proper headings and sections
- **Complete Context**: Include full documents rather than fragments

### Working with AI Suggestions
- **Review Confidence**: Focus on high-confidence suggestions first
- **Context Check**: Ensure suggestions fit the document's purpose
- **Iterative Process**: Run analysis multiple times as you improve content

### Team Collaboration
- **Shared Rules**: Develop organization-specific rule sets
- **Consistent Models**: Use the same model settings across team
- **Version Control**: Track document improvements over time

---

## 🎯 Next Steps

1. **Start Simple**: Begin with a single document to learn the interface
2. **Explore Models**: Try different AI models to see which works best
3. **Customize Rules**: Add your organization's specific requirements
4. **Scale Up**: Integrate into your documentation workflow
5. **Share Knowledge**: Train team members on best practices

Ready to revolutionize your writing process with enterprise-grade AI assistance that runs completely private on your infrastructure!

---

**Ready to start using DocScanner?**

[Advanced Features →](features.md){ .md-button .md-button--primary }

[Technical Details →](technology.md){ .md-button }

[Get Help →](faq.md){ .md-button }
