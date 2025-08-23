import { Link } from 'react-router-dom';
import { Globe, Linkedin, Twitter, Instagram } from 'lucide-react';
import { Button } from './ui/button';
import { Separator } from './ui/separator';

export function Footer() {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { name: 'Home', path: '/' },
    { name: 'About Us', path: '/about' },
    { name: 'Our Services', path: '/services' },
    { name: 'Contact Us', path: '/contact' },
  ];

  const socialLinks = [
    { name: 'LinkedIn', icon: Linkedin, href: '#' },
    { name: 'X', icon: Twitter, href: '#' },
    { name: 'Instagram', icon: Instagram, href: '#' },
    { name: 'TikTok', icon: Globe, href: '#' },
    { name: 'Threads', icon: Globe, href: '#' },
  ];

  return (
    <footer className="bg-muted border-t">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <Link to="/" className="flex items-center space-x-2">
              <Globe className="h-6 w-6 text-accent" />
              <span className="text-xl font-bold">Mulingua</span>
            </Link>
            <p className="text-sm text-muted-foreground">
              Your Gateway to Seamless Global Communication
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="text-sm font-semibold uppercase tracking-wider">Quick Links</h3>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    className="text-sm text-muted-foreground hover:text-accent transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div className="space-y-4">
            <h3 className="text-sm font-semibold uppercase tracking-wider">Contact</h3>
            <div className="space-y-2 text-sm text-muted-foreground">
              <p>Call us at +1 (854) 201-20-60</p>
              <p>info@mulingua.com</p>
              <div className="space-y-1">
                <p>128 City Road,</p>
                <p>London,</p>
                <p>EC1V 2NX</p>
                <p>United Kingdom</p>
              </div>
            </div>
          </div>

          {/* Follow Us & Careers */}
          <div className="space-y-4">
            <h3 className="text-sm font-semibold uppercase tracking-wider">Follow Us</h3>
            <div className="flex space-x-3">
              {socialLinks.map((social) => (
                <Button
                  key={social.name}
                  variant="ghost"
                  size="sm"
                  asChild
                  className="h-8 w-8 p-0 hover:bg-accent hover:text-accent-foreground"
                >
                  <a href={social.href} aria-label={social.name}>
                    <social.icon className="h-4 w-4" />
                  </a>
                </Button>
              ))}
            </div>
            
            <div className="pt-4">
              <h4 className="text-sm font-semibold uppercase tracking-wider mb-2">Join Our Team</h4>
              <a
                href="mailto:careers@mulingua.com"
                className="text-sm text-muted-foreground hover:text-accent transition-colors"
              >
                careers@mulingua.com
              </a>
            </div>
          </div>
        </div>

        <Separator className="my-8" />

        <div className="text-center text-sm text-muted-foreground">
          <p>Copyright © {currentYear} Mulingua. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}