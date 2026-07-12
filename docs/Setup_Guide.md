# Setup Guide

## Requirements

- n8n v2.27.4
- Groq API Key
- Gmail Account
- Google Sheets
- Modern Web Browser

## Installation

### 1. Clone Repository

```bash
git clone https://github.com/YOUR_USERNAME/AI-Customer-Support-System.git
```

### 2. Import Workflow

- Open n8n
- Click Import Workflow
- Select AI_Customer_Support_Workflow.json

### 3. Configure Credentials

Create the following credentials in n8n:

- Gmail
- Google Sheets
- HTTP Request (Groq API)

### 4. Update Groq API Key

Replace your API key inside the HTTP Request node.

### 5. Configure Google Sheet

Create a Google Sheet with the required ticket columns and connect it to the workflow.

### 6. Run n8n

Start n8n and activate the workflow.

### 7. Open Customer Form

Open:

frontend/index.html

Submit a support request.

The workflow will:

- Receive the request
- Analyze it using AI
- Generate a Ticket ID
- Save data to Google Sheets
- Send customer email
- Send escalation email (if required)

## Technologies

- HTML
- CSS
- JavaScript
- n8n
- Groq AI
- Gmail
- Google Sheets
