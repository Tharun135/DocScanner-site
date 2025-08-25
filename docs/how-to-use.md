<style>
* { text-align: left !important; color: #000 !important; }
h1, h2, h3, h4, h5, h6 { font-size: 1.15em !important; }
p, li, code, pre, ol, ul, table, td, th, span, div { font-size: 0.98em !important; }
</style>

# ⚙️ Installation and setup guide

## Step-by-step instructions to get DocScanner running on your computer

This guide explains how to fork, clone, and run the DocScanner app.

## Prerequisites

- You must already have a GitHub account.
- You should have forked the original repository into your own GitHub account.
- Install Git on your system (`git --version` to check).

## Procedure


1. **Fork the repository**
      - Go to the [DocScanner repo](https://github.com/Tharun135/doc-scanner.git)
      - Click **Fork** (top-right)
      - Select **+ Create a new fork**

1. Go to your forked repository

      ```sh
      # Open GitHub, log in, go to your profile, click on the repo under Repositories
      # Example: Your fork will be at
      https://github.com/<your-username>/doc-scanner
      ```

1. Copy the clone URL

      ```sh
      # On the repo page, click the green Code button
      # Select HTTPS and copy the URL
      # Example:
      https://github.com/<your-username>/doc-scanner.git
      ```

1. Open a terminal (or Git Bash)
      ```sh
      # Open your terminal or Git Bash
      ```

1. Navigate to the folder where you want to place the repo:

      ```sh
      cd path/to/your/projects
      ```

1. Clone your forked repo

      ```sh
      git clone https://github.com/<your-username>/doc-scanner.git
      ```

1. Move into the cloned repo folder

      ```sh
      cd doc-scanner
      ```

1. **Create and activate a virtual environment**
      ```sh
      python -m venv .venv
      .venv\Scripts\Activate.ps1
      ```
1. **Install dependencies**
      ```sh
      python -m pip install --upgrade pip
      pip install -r requirements.txt
      ```
1. **Configure environment variables**
      - If a `.env.example` file exists:
        ```sh
        cp .env.example .env
        ```
      - Open `.env` and update any required values.
1. **Install spaCy model**
      ```sh
      python -m spacy download en_core_web_sm
      ```
1. **Run the DocScanner app**
      ```sh
      python run.py
      ```
1. **Access the app**
      - Open your browser and go to: 👉 [http://localhost:5000](http://localhost:5000)

### Initial setup

- **AI model download** will begin automatically:
      - This downloads the AI models to your computer
      - Takes 10-20 minutes depending on internet speed
      - Downloads about 5GB of data
      - Only happens once
- **Test your setup:**
      - Upload a small document
      - Check that suggestions appear
      - Verify everything works correctly

---

## Next steps

### Learn more

1. **Read the user guide** - Learn how to analyze documents effectively
2. **Explore features** - Discover all DocScanner capabilities  
3. **Review FAQ** - Get answers to common questions

---

**Congratulations! DocScanner is now ready to help improve your writing.**

🎉 **You now have your own private AI writing assistant running on your computer!**

---

**Ready to improve your writing?**

<div style="text-align: center; margin-top: 20px;">
  <a href="/usage/" class="md-button md-button--primary">Start Using DocScanner →</a>
  <a href="/faq/" class="md-button">Troubleshooting Help →</a>
  <a href="/features/" class="md-button">See What's Possible →</a>
</div>
