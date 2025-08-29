# EmailJS Setup Instructions

## Overview
The contact form now uses EmailJS to send emails directly from the frontend without requiring a backend server.

## Configuration Required

### 1. Install EmailJS Package
```bash
npm install @emailjs/browser
```

### 2. EmailJS Dashboard Setup
1. Go to [EmailJS Dashboard](https://dashboard.emailjs.com/)
2. Create a new service or use existing service ID: `service_5lodzjj`
3. Create a new email template with ID: `template_contact`

### 3. Email Template Setup
Create a template in EmailJS with the following variables:
```
Subject: New Contact Form Submission - {{subject}}

From: {{from_name}}
Email: {{from_email}}
Phone: {{phone}}

Message:
{{message}}

---
Inquiry Type: {{inquiry_type}}
Submitted: {{timestamp}}
Reply to: {{reply_to}}
```

### 4. Update Configuration
Edit the file: `src/config/emailjs.ts`
```typescript
export const emailjsConfig = {
  serviceId: 'service_5lodzjj', // Your EmailJS service ID
  templateId: 'template_contact', // Your actual template ID
  publicKey: 'YOUR_ACTUAL_PUBLIC_KEY', // Replace with your EmailJS public key
};
```

### 5. Get Your Public Key
1. Go to EmailJS Dashboard > Account > API Keys
2. Copy your Public Key
3. Replace `YOUR_ACTUAL_PUBLIC_KEY` in the config file

## Features Implemented

### ✅ Form Validation
- Required field validation
- Email format validation
- Phone number validation (minimum 10 digits)

### ✅ Enhanced UX
- Loading spinner during submission
- Success/error messages with icons
- Form reset after successful submission
- Fallback contact information in error messages
- Disabled button state during submission

### ✅ Email Content
- All form fields included in email
- Timestamp in Indian timezone
- Professional formatting
- Reply-to field set to user's email
- Inquiry type classification

## Testing
1. Complete the EmailJS setup above
2. Fill out the contact form
3. Check your configured email for the message
4. Verify all form fields are included
5. Test error handling by submitting invalid data

## Fallback Options
If EmailJS fails, users can still:
- Call directly: 91515 77755 / 8383 048884
- WhatsApp: Integrated WhatsApp button
- Email directly: pravinbalda79@gmail.com

## Files Created/Modified
- `src/config/emailjs.ts` - EmailJS configuration
- `src/utils/emailService.ts` - Email service utility with validation
- `src/components/Contact.tsx` - Updated form submission with EmailJS
- `README_EMAILJS.md` - This setup guide

## Email Template Variables
The following variables are sent to your EmailJS template:
- `from_name` - User's name
- `from_email` - User's email
- `reply_to` - User's email (for easy replies)
- `phone` - User's phone number
- `subject` - Message subject
- `message` - User's message
- `inquiry_type` - Set to "Contact Form Submission"
- `timestamp` - Submission time in Indian timezone

## Security Notes
- All validation is performed client-side
- EmailJS public key is safe to expose in frontend code
- No sensitive data is stored in the application
- Form data is only sent to EmailJS and your configured email
