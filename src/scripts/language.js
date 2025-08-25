// Language switching functionality
const translations = {
  de: {
    // Navigation
    'nav-home': 'Home',
    'nav-services': 'Leistungen',
    'nav-hours': 'Öffnungszeiten',
    'nav-contact': 'Kontakt',
    
    // Hero Section
    'hero-title': 'Tierarzt am Spittelberg',
    'hero-doctor1': 'Dipl. Tierarzt Peter Rippel',
    'hero-doctor2': 'Dr. Bettina Rippel-Rachlé',
    'hero-services': 'Röntgen | Ultraschall | Chirurgie | Laser | Endoskopie | Labor | Ganzheitliche Medizin',
    'hero-booking-btn': 'Online Termin buchen',
    
    // Services Section
    'services-title': 'Unsere Leistungen',
    'services-subtitle': 'Moderne Tiermedizin mit ganzheitlichem Ansatz für die bestmögliche Betreuung Ihres Lieblings',
    'service-xray': 'Röntgen',
    'service-xray-desc': 'Modernste Röntgentechnik für präzise Diagnosen und optimale Behandlungsplanung.',
    'service-ultrasound': 'Ultraschall',
    'service-ultrasound-desc': 'Schonende Ultraschalluntersuchungen für detaillierte Einblicke in den Körper Ihres Tieres.',
    'service-surgery': 'Chirurgie',
    'service-surgery-desc': 'Professionelle chirurgische Eingriffe mit modernster Ausstattung und höchsten Standards.',
    'service-laser': 'Laser',
    'service-laser-desc': 'Innovative Lasertherapie für schmerzfreie Behandlungen und schnellere Heilung.',
    'service-endoscopy': 'Endoskopie',
    'service-endoscopy-desc': 'Minimalinvasive Untersuchungen für präzise Diagnosen ohne großen Eingriff.',
    'service-lab': 'Labor',
    'service-lab-desc': 'Umfassende Labordiagnostik für schnelle und zuverlässige Testergebnisse.',
    'service-holistic': 'Ganzheitliche Medizin',
    'service-holistic-desc': 'Individuelle Behandlungsansätze, die das Wohlbefinden Ihres Tieres ganzheitlich fördern.',
    
    // Opening Hours
    'hours-title': 'Unsere Ordinationszeiten',
    'hours-notice': 'Aufgrund der herrschenden Umstände sind ab sofort Ordinationsbesuche nur nach vorheriger Terminvereinbarung möglich!',
    'hours-subtitle': 'Termine und Terminvereinbarung zu folgenden Zeiten:',
    'hours-schedule-title': 'Öffnungszeiten',
    'hours-monday': 'Montag',
    'hours-tuesday': 'Dienstag', 
    'hours-wednesday': 'Mittwoch',
    'hours-thursday': 'Donnerstag',
    'hours-friday': 'Freitag',
    'hours-benefits-title': 'Ihr Vorteil',
    'hours-benefit1-title': 'Persönliche Sicherheit',
    'hours-benefit1-desc': 'Durch die neue Regelung reduzieren wir die Kontaktmöglichkeit mit anderen Patienten und erhöhen dadurch Ihre persönliche Sicherheit.',
    'hours-benefit2-title': 'Keine Wartezeiten',
    'hours-benefit2-desc': 'Zudem haben Sie keine Wartezeiten und wir können uns optimal auf Ihren Liebling einstellen.',
    'hours-cta': 'Jetzt Termin vereinbaren',
    
    // Contact
    'contact-title': 'Unser Standort',
    'contact-subtitle': 'Besuchen Sie uns in der Siebensterngasse im Herzen von Wien',
    'contact-address-title': 'Adresse',
    'contact-phone-title': 'Telefon',
    'contact-email-title': 'E-Mail',
    'contact-cta-title': 'Bereit für einen Termin?',
    'contact-cta-subtitle': 'Vereinbaren Sie noch heute einen Termin für Ihren Liebling',
    'contact-cta-btn': 'Online Termin buchen',
    
    // Footer
    'footer-services-title': 'Unsere Leistungen'
  },
  en: {
    // Navigation
    'nav-home': 'Home',
    'nav-services': 'Services',
    'nav-hours': 'Opening Hours',
    'nav-contact': 'Contact',
    
    // Hero Section
    'hero-title': 'Veterinarian at Spittelberg',
    'hero-doctor1': 'Veterinarian Peter Rippel',
    'hero-doctor2': 'Dr. Bettina Rippel-Rachlé',
    'hero-services': 'X-Ray | Ultrasound | Surgery | Laser | Endoscopy | Laboratory | Holistic Medicine',
    'hero-booking-btn': 'Book Online Appointment',
    
    // Services Section
    'services-title': 'Our Services',
    'services-subtitle': 'Modern veterinary medicine with a holistic approach for the best possible care of your pet',
    'service-xray': 'X-Ray',
    'service-xray-desc': 'State-of-the-art X-ray technology for precise diagnoses and optimal treatment planning.',
    'service-ultrasound': 'Ultrasound',
    'service-ultrasound-desc': 'Gentle ultrasound examinations for detailed insights into your pet\'s body.',
    'service-surgery': 'Surgery',
    'service-surgery-desc': 'Professional surgical procedures with state-of-the-art equipment and highest standards.',
    'service-laser': 'Laser',
    'service-laser-desc': 'Innovative laser therapy for pain-free treatments and faster healing.',
    'service-endoscopy': 'Endoscopy',
    'service-endoscopy-desc': 'Minimally invasive examinations for precise diagnoses without major intervention.',
    'service-lab': 'Laboratory',
    'service-lab-desc': 'Comprehensive laboratory diagnostics for fast and reliable test results.',
    'service-holistic': 'Holistic Medicine',
    'service-holistic-desc': 'Individual treatment approaches that holistically promote your pet\'s well-being.',
    
    // Opening Hours
    'hours-title': 'Our Opening Hours',
    'hours-notice': 'Due to current circumstances, appointments are only possible by prior arrangement!',
    'hours-subtitle': 'Appointments and scheduling at the following times:',
    'hours-schedule-title': 'Opening Hours',
    'hours-monday': 'Monday',
    'hours-tuesday': 'Tuesday',
    'hours-wednesday': 'Wednesday', 
    'hours-thursday': 'Thursday',
    'hours-friday': 'Friday',
    'hours-benefits-title': 'Your Benefits',
    'hours-benefit1-title': 'Personal Safety',
    'hours-benefit1-desc': 'The new regulation reduces contact with other patients and thereby increases your personal safety.',
    'hours-benefit2-title': 'No Waiting Times',
    'hours-benefit2-desc': 'Additionally, you have no waiting times and we can optimally focus on your pet.',
    'hours-cta': 'Schedule Appointment Now',
    
    // Contact
    'contact-title': 'Our Location',
    'contact-subtitle': 'Visit us in Siebensterngasse in the heart of Vienna',
    'contact-address-title': 'Address',
    'contact-phone-title': 'Phone',
    'contact-email-title': 'Email',
    'contact-cta-title': 'Ready for an Appointment?',
    'contact-cta-subtitle': 'Schedule an appointment for your pet today',
    'contact-cta-btn': 'Book Online Appointment',
    
    // Footer
    'footer-services-title': 'Our Services'
  }
};

let currentLanguage = 'de';

function switchLanguage(lang) {
  currentLanguage = lang;
  
  // Update language buttons
  document.querySelectorAll('.language-btn').forEach(btn => {
    btn.classList.remove('active');
    if (btn.dataset.lang === lang) {
      btn.classList.add('active');
    }
  });
  
  // Update all translatable elements
  document.querySelectorAll('[data-translate]').forEach(element => {
    const key = element.dataset.translate;
    if (translations[lang] && translations[lang][key]) {
      element.textContent = translations[lang][key];
    }
  });
  
  // Update navigation items
  document.querySelectorAll('[data-de]').forEach(element => {
    const text = lang === 'de' ? element.dataset.de : element.dataset.en;
    if (text) {
      element.textContent = text;
    }
  });
  
  // Store language preference
  localStorage.setItem('preferredLanguage', lang);
}

// Initialize language functionality
function initLanguage() {
  // Check for saved language preference
  const savedLang = localStorage.getItem('preferredLanguage') || 'de';
  
  // Set up language toggle buttons
  document.querySelectorAll('.language-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      switchLanguage(btn.dataset.lang);
    });
  });
  
  // Apply saved language
  switchLanguage(savedLang);
}

// Auto-initialize when DOM is loaded
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', initLanguage);
} else {
  initLanguage();
}
