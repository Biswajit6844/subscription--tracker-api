import { sendReminderEmail } from './utils/send-email.js';

sendReminderEmail({
  to: 'babasethy1234@gmail.com',
  type: '7 days before reminder',
  subscription: {
    name: 'Netflix Premium',
    renewalDate: new Date(),
    currency: 'USD',
    price: 15.99,
    frequency: 'monthly',
    paymentMethod: 'Credit Card',
    user: { name: 'Jeet' }
  }
});
