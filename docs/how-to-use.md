# ⚙️ Installation & Setup Guide

Step-by-step instructions to get DocScanner running on your computer.

---

## System Requirements

### What You Need

**Minimum Requirements:**
- 8GB RAM (memory)
- 4-core processor
- 20GB free storage space
- Windows 10+, macOS 10.15+, or Linux
- Internet connection (only for initial setup)

**Recommended for Best Performance:**
- 16GB RAM or more
- 8-core processor
- SSD storage with 50GB free space
- Modern web browser (Chrome, Firefox, Safari, Edge)

---

## Step 1: Download DocScanner

1. **Download the installer** from the official DocScanner website
2. **Choose your operating system**: Windows, Mac, or Linux
3. **Save the file** to your Downloads folder

---

## Step 2: Install DocScanner

### Windows Installation

1. **Double-click** the downloaded installer file
2. **Follow the setup wizard**:
   - Click "Next" through the welcome screens
   - Choose installation folder (default is fine)
   - Accept the license agreement
   - Click "Install"
3. **Wait for installation** to complete (5-10 minutes)
4. **Click "Finish"** when done

### Mac Installation

1. **Double-click** the downloaded `.dmg` file
2. **Drag DocScanner** to the Applications folder
3. **Open Applications** folder and find DocScanner
4. **Right-click** and select "Open" (first time only)
5. **Click "Open"** when security warning appears

### Linux Installation

1. **Open Terminal**
2. **Navigate** to your Downloads folder
3. **Run the installer** by double-clicking or following provided instructions
4. **Enter your password** when prompted

---

## Step 3: First Launch

### Starting DocScanner

1. **Find DocScanner** in your applications or start menu
2. **Double-click** to launch
3. **Wait for startup** (may take 1-2 minutes first time)
4. **Your web browser will open** automatically to `http://localhost:5000`

### Initial Setup

When DocScanner starts for the first time:

1. **AI Model Download** will begin automatically
   - This downloads the AI models to your computer
   - Takes 10-20 minutes depending on internet speed
   - Downloads about 5GB of data
   - Only happens once

2. **Choose Your AI Model**:
   - **Recommended**: Let DocScanner choose automatically
   - **Advanced**: Select specific model based on your computer's power

3. **Test Your Setup**:
   - Upload a small document
   - Check that suggestions appear
   - Verify everything works correctly

---

## Understanding AI Models

DocScanner includes several AI models. Don't worry - it automatically picks the best one for your computer!

### Available Models

**Mistral** (Recommended)
- Best balance of quality and speed
- Works well on most computers
- 4.4GB download size

**Llama3** (High Quality)
- Highest quality suggestions
- Needs more computer power
- 4.7GB download size

**Phi3** (Fast)
- Quick processing
- Good for older computers
- 2.2GB download size

**TinyLLaMA** (Always Works)
- Works on any computer
- Basic but reliable suggestions
- 637MB download size

---

## Step 4: Using DocScanner

### Basic Usage

1. **Open your web browser** to `http://localhost:5000`
2. **Upload a document** by:
   - Dragging and dropping a file
   - Clicking "Browse" to select files
   - Copy-pasting text directly
3. **Wait for analysis** (usually 10-30 seconds)
4. **Review suggestions** and apply improvements
5. **Download** your improved document

### Supported File Types

DocScanner works with:
- Microsoft Word documents (.docx)
- PDF files
- Text files (.txt)
- Markdown files (.md)
- HTML files
- Multiple files in ZIP archives

---

## Troubleshooting

### Common Issues

**DocScanner won't start:**
1. Restart your computer
2. Check you have enough free disk space (20GB+)
3. Disable antivirus temporarily during setup
4. Run as administrator (Windows) or with sudo (Linux)

**AI models won't download:**
1. Check your internet connection
2. Disable firewall temporarily
3. Try again later (servers might be busy)
4. Contact support if problem persists

**Browser shows "Connection failed":**
1. Wait a few more minutes (DocScanner might still be starting)
2. Try refreshing the page
3. Check if another application is using port 5000
4. Restart DocScanner

**Suggestions are slow or poor quality:**
1. Close other programs to free up memory
2. Try a different AI model in settings
3. Process smaller documents
4. Restart DocScanner

### Getting Help

**Built-in Help:**
- Press F1 in DocScanner for context-sensitive help
- Check the status indicator for system health
- Look for error messages in the interface

**Documentation:**
- Read the Usage Guide for detailed instructions
- Check FAQ for common questions
- Review Features list for capabilities

**Support Options:**
- Contact technical support
- Join the user community forum
- Check the knowledge base online

---

## Team & Enterprise Setup

### Installing for Multiple Users

**Small Teams (2-10 people):**
1. Install DocScanner on a shared computer or server
2. Team members access via web browser
3. Set up user accounts and permissions
4. Configure shared custom rules

**Large Organizations:**
1. Contact support for enterprise deployment
2. Use Docker containers for scalability
3. Integrate with existing authentication systems
4. Set up monitoring and backup procedures

### Security Considerations

**Data Privacy:**
- All processing happens on your computers
- No data is sent to external servers
- Documents never leave your network
- Complete offline operation after setup

**Access Control:**
- Set up user accounts and passwords
- Configure role-based permissions
- Enable audit logging for compliance
- Integrate with company authentication

---

## Advanced Configuration

### Performance Optimization

**For Faster Processing:**
1. Use SSD storage instead of traditional hard drives
2. Add more RAM to your computer
3. Close unnecessary applications
4. Select faster AI models in settings

**For Better Quality:**
1. Use higher-quality AI models
2. Add custom rules for your organization
3. Train the system with your preferred style
4. Review and accept high-confidence suggestions

### Customization Options

**Organization Rules:**
- Add company-specific terminology
- Define style guidelines
- Set up brand consistency checks
- Create industry-specific rules

**Integration Setup:**
- Connect with document management systems
- Set up automated processing workflows
- Configure notifications and alerts
- Enable API access for developers

---

## Next Steps

### Learn More

1. **Read the Usage Guide** - Learn how to analyze documents effectively
2. **Explore Features** - Discover all DocScanner capabilities  
3. **Review FAQ** - Get answers to common questions
4. **Join the Community** - Connect with other users

### Start Using DocScanner

1. **Test with sample documents** - Try different file types
2. **Experiment with settings** - Find your preferred configuration
3. **Set up custom rules** - Add your organization's standards
4. **Share with your team** - Help others get started

---

**Congratulations! DocScanner is now ready to help improve your writing.**

🎉 **You now have your own private AI writing assistant running on your computer!**

---

**Ready to improve your writing?**

[Start Using DocScanner →](usage.md){ .md-button .md-button--primary }

[Troubleshooting Help →](faq.md){ .md-button }

[See What's Possible →](features.md){ .md-button }
