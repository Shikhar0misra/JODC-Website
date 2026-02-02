import { motion } from 'framer-motion';
import { Linkedin, Instagram, MessageCircle, Phone, Mail } from 'lucide-react';

const socialLinks = [
  { name: 'LinkedIn', icon: Linkedin, href: 'https://www.linkedin.com/company/jodc/' },
  { name: 'Instagram', icon: Instagram, href: 'https://www.instagram.com/jodc128/' },
  { name: 'WhatsApp', icon: MessageCircle, href: 'https://chat.whatsapp.com/HKkAWu264SAF9ydKEQ1UME' },
];

const Footer = () => {
  return (
    <footer className="relative bg-card border-t border-border/30 py-12">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid md:grid-cols-3 gap-8">

          {/* Brand */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              {/* ✅ REAL LOGO */}
              <img
                src="/jodc-logo.png"
                alt="JODC Logo"
                className="h-10 w-10 object-contain"
              />
              <span className="font-heading text-xl font-bold tracking-wider text-foreground">
                JODC
              </span>
            </div>
            <p className="text-muted-foreground text-sm leading-relaxed">
              Open Development Committee<br />
              Jaypee Institute of Information Technology<br />
              Sector 128, Noida
            </p>
          </div>

          {/* Social Links */}
          <div>
            <h3 className="font-heading text-lg font-bold text-foreground mb-4">
              CONNECT WITH US
            </h3>
            <div className="flex gap-4">
              {socialLinks.map((link) => (
                <motion.a
                  key={link.name}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 rounded-lg glass-card flex items-center justify-center text-muted-foreground hover:text-secondary transition-all duration-300 hover:neon-border-cyan"
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <link.icon size={22} />
                </motion.a>
              ))}
            </div>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-heading text-lg font-bold text-foreground mb-4">
              COORDINATOR
            </h3>
            <div className="space-y-3">
              <p className="text-foreground font-medium">JODC Coordinator</p>
              <a
                href="tel:+918604899344"
                className="flex items-center gap-2 text-muted-foreground hover:text-secondary transition-colors"
              >
                <Phone size={16} />
                <span>+91 86048 99344</span>
              </a>
              <a
                href="mailto:jodccreative@gmail.com"
                className="flex items-center gap-2 text-muted-foreground hover:text-secondary transition-colors"
              >
                <Mail size={16} />
                <span>jodccreative@gmail.com</span>
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-6 border-t border-border/30 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-muted-foreground text-sm">
            © {new Date().getFullYear()} JODC. All rights reserved.
          </p>
          <p className="text-muted-foreground text-sm">
            Built by Shikhar Misra
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
