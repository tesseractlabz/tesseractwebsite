import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Envelope, Phone, CheckCircle, WarningCircle, PaperPlaneTilt } from '@phosphor-icons/react';

const Contact = () => {
  const [formData, setFormData] = useState({ name: '', email: '', phone: '', country: '', address: '', message: '' });
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [toast, setToast] = useState(null);

  const showToast = (type, message) => {
    setToast({ type, message });
    setTimeout(() => setToast(null), 5000);
  };

  const validate = () => {
    const newErrors = {};
    if (!formData.name.trim())    newErrors.name    = 'Fill this field';
    if (!formData.email.trim()) {
      newErrors.email = 'Fill this field';
    } else {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(formData.email.trim())) {
        newErrors.email = 'Invalid email format';
      }
    }
    if (!formData.phone.trim())   newErrors.phone   = 'Fill this field';
    if (!formData.country.trim()) newErrors.country = 'Fill this field';
    if (!formData.message.trim()) newErrors.message = 'Fill this field';
    return newErrors;
  };
  const handlePhoneChange = (e) => {
    const value = e.target.value.replace(/[^0-9]/g, ''); // numbers only
    setFormData({ ...formData, phone: value });
    if (errors.phone) setErrors({ ...errors, phone: '' });
  };

  const handleChange = (field, value) => {
    setFormData({ ...formData, [field]: value });
    if (errors[field]) setErrors({ ...errors, [field]: '' });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }
    setIsSubmitting(true);
    try {
      const res = await fetch('/api/send-email', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });
      const data = await res.json();
      if (data.success) {
        showToast('success', `Thank you, ${formData.name}! Your message has been sent. We'll get back to you soon.`);
        setFormData({ name: '', email: '', phone: '', country: '', address: '', message: '' });
        setErrors({});
      } else {
        showToast('error', 'Failed to send message. Please try again.');
      }
    } catch {
      showToast('error', 'Server not reachable. Please try again later.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="section bg-white circuit-section">
      <div className="circuit-overlay"></div>

      {/* Toast Notification */}
      <AnimatePresence>
        {toast && (
          <motion.div
            className={`toast-notification ${toast.type}`}
            initial={{ opacity: 0, y: -60, x: '-50%' }}
            animate={{ opacity: 1, y: 0, x: '-50%' }}
            exit={{ opacity: 0, y: -60, x: '-50%' }}
            transition={{ type: 'spring', stiffness: 300, damping: 25 }}
          >
            <div className="toast-icon">
              {toast.type === 'success'
                ? <CheckCircle size={28} weight="fill" />
                : <WarningCircle size={28} weight="fill" />}
            </div>
            <div className="toast-content">
              <strong>{toast.type === 'success' ? 'Message Sent!' : 'Oops!'}</strong>
              <p>{toast.message}</p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <div className="container">
        <div className="grid grid-2">
          <motion.div 
            className="contact-info"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="section-title">Get In Touch</h2>
            <p>Ready to start your next project? Contact us for a consultation and let's build the future together.</p>
            <div className="info-items">
              <div className="info-item">
                <Envelope size={24} />
                <a href="mailto:tesseractlabz@gmail.com">tesseractlabz@gmail.com</a>
              </div>
              <div className="info-item">
                <Phone size={24} />
                <a href="tel:0762620233">0762620233</a>
              </div>
            </div>
          </motion.div>
          <motion.div 
            className="contact-form-wrapper glass"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <form onSubmit={handleSubmit} noValidate>
              <div className="form-group">
                <label htmlFor="name">Name</label>
                <input 
                  type="text" 
                  id="name" 
                  placeholder="Your Name"
                  className={errors.name ? 'input-error' : ''}
                  value={formData.name}
                  onChange={(e) => handleChange('name', e.target.value)}
                />
                {errors.name && <span className="field-error">⚠ {errors.name}</span>}
              </div>
              <div className="form-group">
                <label htmlFor="email">Email</label>
                <input 
                  type="email" 
                  id="email" 
                  placeholder="your@email.com"
                  className={errors.email ? 'input-error' : ''}
                  value={formData.email}
                  onChange={(e) => handleChange('email', e.target.value)}
                />
                {errors.email && <span className="field-error">⚠ {errors.email}</span>}
              </div>
              <div className="form-group">
                <label htmlFor="phone">Phone Number</label>
                <input 
                  type="tel" 
                  id="phone" 
                  placeholder="Your Phone Number"
                  className={errors.phone ? 'input-error' : ''}
                  value={formData.phone}
                  onChange={handlePhoneChange}
                  inputMode="numeric"
                  maxLength={15}
                />
                {errors.phone && <span className="field-error">⚠ {errors.phone}</span>}
              </div>
              <div className="form-group">
                <label htmlFor="country">Country</label>
                <input 
                  type="text" 
                  id="country" 
                  placeholder="Your Country"
                  className={errors.country ? 'input-error' : ''}
                  value={formData.country}
                  onChange={(e) => handleChange('country', e.target.value)}
                />
                {errors.country && <span className="field-error">⚠ {errors.country}</span>}
              </div>
              <div className="form-group">
                <label htmlFor="address">Address</label>
                <input 
                  type="text" 
                  id="address" 
                  placeholder="Your Address"
                  value={formData.address}
                  onChange={(e) => handleChange('address', e.target.value)}
                />
              </div>
              <div className="form-group">
                <label htmlFor="message">Message</label>
                <textarea 
                  id="message" 
                  rows="4" 
                  placeholder="How can we help?"
                  className={errors.message ? 'input-error' : ''}
                  value={formData.message}
                  onChange={(e) => handleChange('message', e.target.value)}
                ></textarea>
                {errors.message && <span className="field-error">⚠ {errors.message}</span>}
              </div>
              <button type="submit" className="btn btn-primary btn-block" disabled={isSubmitting}>
                {isSubmitting
                  ? <span className="sending-state"><span className="spinner" /> Sending...</span>
                  : <span className="send-state"><PaperPlaneTilt size={20} weight="fill" /> Send Message</span>}
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
