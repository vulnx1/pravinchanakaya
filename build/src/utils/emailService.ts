import emailjs from '@emailjs/browser';
import { emailjsConfig } from '../config/emailjs';

export interface ContactFormData {
  name: string;
  email: string;
  phone: string;
  subject: string;
  message: string;
}

export interface EmailServiceResponse {
  success: boolean;
  message: string;
}

export const sendContactEmail = async (formData: ContactFormData): Promise<EmailServiceResponse> => {
  try {
    // Validate required fields
    if (!formData.name || !formData.email || !formData.phone || !formData.subject || !formData.message) {
      return {
        success: false,
        message: 'Please fill in all required fields.'
      };
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      return {
        success: false,
        message: 'Please enter a valid email address.'
      };
    }

    // Validate phone number (basic validation)
    const phoneRegex = /^[\d\s\+\-\(\)]{10,}$/;
    if (!phoneRegex.test(formData.phone)) {
      return {
        success: false,
        message: 'Please enter a valid phone number.'
      };
    }

    // Prepare email template parameters
    const templateParams = {
      from_name: formData.name,
      from_email: formData.email,
      reply_to: formData.email,
      phone: formData.phone,
      subject: formData.subject,
      message: formData.message,
      inquiry_type: 'Contact Form Submission',
      timestamp: new Date().toLocaleString('en-IN', {
        timeZone: 'Asia/Kolkata',
        year: 'numeric',
        month: 'long',
        day: 'numeric',
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit'
      })
    };

    // Send email using EmailJS
    const response = await emailjs.send(
      emailjsConfig.serviceId,
      emailjsConfig.templateId,
      templateParams,
      emailjsConfig.publicKey
    );

    if (response.status === 200) {
      return {
        success: true,
        message: '✅ Thank you for your inquiry! We will get back to you within 24 hours.'
      };
    } else {
      throw new Error('Failed to send email');
    }

  } catch (error) {
    console.error('EmailJS Error:', error);
    
    return {
      success: false,
      message: `❌ Sorry, there was an issue sending your message. Please try contacting us directly:\n📞 Call: 91515 77755 / 8383 048884\n📧 Email: pravinbalda79@gmail.com\n💬 WhatsApp: Click the WhatsApp button below`
    };
  }
};
