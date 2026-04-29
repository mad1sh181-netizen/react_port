import { useState } from 'react';

const contactItems = [
  { icon: 'fas fa-envelope', title: 'Email', value: 'mad1na@gmail.com', note: 'Response within 24 hours' },
  { icon: 'fas fa-phone', title: 'Phone', value: '(+998) 91 435 02 03', note: 'Mon-Fri, 9AM-6PM' },
  { icon: 'fas fa-map-marker-alt', title: 'Location', value: 'Khorezm, Uzbekistan', note: 'Available for remote work worldwide' },
  { icon: 'fas fa-clock', title: 'Availability', value: 'Available for freelance projects', note: 'Full-time freelance availability' },
];

// Label harflarini animatsiya qilish uchun yordamchi funksiya
const AnimatedLabel = ({ text }) => {
  return (
    <label className="label">
      {text.split('').map((char, index) => (
        <span key={index} className="label-char" style={{ '--index': index }}>
          {char === ' ' ? '\u00A0' : char}
        </span>
      ))}
    </label>
  );
};

export default function ContactSlide() {
  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' });
  const [sent, setSent] = useState(false);

  function handleChange(e) {
    const field = e.target.getAttribute('name');
    setForm({ ...form, [field]: e.target.value });
  }

  function handleSubmit(e) {
    e.preventDefault();
    console.log('Form Submitted:', form);
    setSent(true);
    setForm({ name: '', email: '', subject: '', message: '' });
    setTimeout(() => setSent(false), 5000);
  }

  return (
    <div className="slide" id="slide-3">
      <div className="slide-content">
        <h1 className="animate-fade-in">
          Let's <span className="gradient-text">Connect</span>
        </h1>
        <p className="description animate-fade-in delay-1">
          Have a project in mind? Let's work together to bring your ideas to life!
        </p>

        {/* --- SOCIAL SECTION --- */}
        <div className="social-section animate-fade-in delay-2">
          <div className="social-buttons-container">
            <a href="https://www.instagram.com/mady_offcll" target="_blank" rel="noreferrer" className="uiverse-button instagram">
              <i className="fab fa-instagram"></i><span>Instagram</span>
            </a>
            
            <a href="https://t.me/azamatovvna_7" target="_blank" rel="noreferrer" className="uiverse-button telegram">
              <i className="fab fa-telegram-plane"></i>
              <span>Telegram</span>
            </a>
            
            <a href="https://github.com/mad1sh181-netizen" target="_blank" rel="noreferrer" className="uiverse-button github">
              <i className="fab fa-github"></i><span>GitHub</span>
            </a>
          </div>
        </div>

        <div className="contact-container">
          {/* Contact Info */}
          <div className="contact-info">
            {contactItems.map((item, i) => (
              <div className={`contact-item animate-fade-in delay-${i + 3}`} key={item.title}>
                <div className="contact-icon"><i className={item.icon}></i></div>
                <div className="contact-details">
                  <h4>{item.title}</h4>
                  <p>{item.value}</p>
                  <small className="text-muted">{item.note}</small>
                </div>
              </div>
            ))}
          </div>

          {/* Contact Form with Wave Effect */}
          <div className="contact-form-container animate-fade-in delay-4">
            <form className="contact-form" onSubmit={handleSubmit}>
              
              <div className="wave-group">
                <input required type="text" name="name" className="input" value={form.name} onChange={handleChange} />
                <span className="bar"></span>
                <AnimatedLabel text="Full Name" />
              </div>

              <div className="wave-group">
                <input required type="email" name="email" className="input" value={form.email} onChange={handleChange} />
                <span className="bar"></span>
                <AnimatedLabel text="Email Address" />
              </div>

              <div className="wave-group">
                <input required type="text" name="subject" className="input" value={form.subject} onChange={handleChange} />
                <span className="bar"></span>
                <AnimatedLabel text="Subject" />
              </div>

              <div className="wave-group">
                <textarea required name="message" className="input" rows="3" value={form.message} onChange={handleChange}></textarea>
                <span className="bar"></span>
                <AnimatedLabel text="Your Message" />
              </div>

              <button type="submit" className="uiverse-button submit-btn">
                <i className="fas fa-paper-plane"></i>
                <span>Send Message</span>
              </button>
            </form>

            {sent && (
              <div className="success-message">
                <i className="fas fa-check-circle"></i> <p>Message Sent!</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}