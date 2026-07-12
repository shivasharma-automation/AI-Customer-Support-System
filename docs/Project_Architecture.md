# Project Architecture

```
Customer Form
        │
        ▼
Webhook (n8n)
        │
        ▼
Edit Fields
        │
        ▼
Groq AI Analysis
        │
        ▼
Generate Ticket
        │
        ▼
IF Node
   ┌───────────────┐
   │               │
   ▼               ▼
Human         Normal Ticket
Escalation
   │               │
   └──────┬────────┘
          ▼
Google Sheets
          │
          ▼
Customer Email
```

## Workflow Components

- Customer Support Form
- Webhook
- AI Classification
- Ticket Generation
- Human Escalation
- Google Sheets Logging
- Email Notifications

## Output

- Ticket ID
- Priority
- Category
- AI Reply
- Status
- Email Notification
