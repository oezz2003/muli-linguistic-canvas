import { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Send, Clock, Globe } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Reveal } from '@/components/Reveal';
import { useToast } from '@/hooks/use-toast';

export default function Contact() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const contactInfo = [
    {
      icon: Phone,
      title: 'Phone',
      details: '+1 (854) 201-20-60',
      description: 'Mon-Fri from 8am to 5pm',
    },
    {
      icon: Mail,
      title: 'Email',
      details: 'info@mulingua.com',
      description: 'We respond within 24 hours',
    },
    {
      icon: MapPin,
      title: 'Office',
      details: '128 City Road, London, EC1V 2NX, United Kingdom',
      description: 'Visit us during business hours',
    },
  ];

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 2000));

    toast({
      title: "Quote request sent!",
      description: "We'll get back to you within 24 hours.",
    });

    setIsSubmitting(false);
    (e.target as HTMLFormElement).reset();
  };

  return (
    <div className="pt-16 lg:pt-20">
      {/* Hero Section */}
      <section className="py-20 md:py-28 bg-gradient-to-b from-muted to-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl mx-auto text-center"
          >
            <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-8">
              Get in <span className="text-accent">Touch</span>
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed">
              Ready to break down language barriers? Contact us for a consultation or request a quote.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Cards */}
      <section className="py-20 md:py-28 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            {contactInfo.map((info, index) => (
              <Reveal key={info.title} delay={index * 0.1}>
                <Card className="text-center border-2 shadow-lg rounded-2xl hover:shadow-xl transition-all hover:-translate-y-2">
                  <CardContent className="p-8">
                    <div className="inline-flex items-center justify-center w-16 h-16 bg-accent/10 rounded-full mb-6">
                      <info.icon className="h-8 w-8 text-accent" />
                    </div>
                    <h3 className="text-xl font-bold text-foreground mb-2">
                      {info.title}
                    </h3>
                    <p className="text-lg text-muted-foreground mb-2 font-medium">
                      {info.details}
                    </p>
                    <p className="text-sm text-muted-foreground">
                      {info.description}
                    </p>
                  </CardContent>
                </Card>
              </Reveal>
            ))}
          </div>

          {/* Contact Form */}
          <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
            <Reveal direction="left">
              <Card className="border-2 shadow-lg rounded-2xl">
                <CardHeader>
                  <CardTitle className="text-2xl flex items-center">
                    <Send className="h-6 w-6 text-accent mr-3" />
                    Request a Quote
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="firstName">First Name</Label>
                        <Input id="firstName" required />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="lastName">Last Name</Label>
                        <Input id="lastName" required />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="email">Email</Label>
                      <Input id="email" type="email" required />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="company">Company</Label>
                      <Input id="company" />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="service">Service Needed</Label>
                      <Select>
                        <SelectTrigger>
                          <SelectValue placeholder="Select a service" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="translation">Translation & Localization</SelectItem>
                          <SelectItem value="transcription">Transcription & Subtitling</SelectItem>
                          <SelectItem value="voiceover">Voice-Over & Proofreading</SelectItem>
                          <SelectItem value="other">Other</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="message">Project Details</Label>
                      <Textarea
                        id="message"
                        placeholder="Tell us about your project requirements..."
                        className="min-h-[120px]"
                        required
                      />
                    </div>

                    <Button 
                      type="submit" 
                      disabled={isSubmitting}
                      className="w-full bg-accent hover:bg-accent/90 text-accent-foreground rounded-2xl py-6 text-lg font-semibold"
                    >
                      {isSubmitting ? 'Sending...' : 'Send Quote Request'}
                      <Send className="ml-2 h-5 w-5" />
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </Reveal>

            <Reveal direction="right">
              <div className="space-y-8">
                <Card className="border-2 shadow-lg rounded-2xl">
                  <CardContent className="p-8">
                    <div className="flex items-center mb-4">
                      <Clock className="h-6 w-6 text-accent mr-3" />
                      <h3 className="text-xl font-bold text-foreground">Business Hours</h3>
                    </div>
                    <div className="space-y-2 text-muted-foreground">
                      <p>Monday - Friday: 8:00 AM - 5:00 PM</p>
                      <p>Saturday: 9:00 AM - 1:00 PM</p>
                      <p>Sunday: Closed</p>
                      <p className="text-sm mt-4">
                        Emergency translation services available 24/7
                      </p>
                    </div>
                  </CardContent>
                </Card>

                <Card className="border-2 shadow-lg rounded-2xl">
                  <CardContent className="p-8">
                    <div className="flex items-center mb-4">
                      <Globe className="h-6 w-6 text-accent mr-3" />
                      <h3 className="text-xl font-bold text-foreground">Global Reach</h3>
                    </div>
                    <div className="space-y-2 text-muted-foreground">
                      <p>🌍 240+ Languages Supported</p>
                      <p>🏢 Offices in London, UK</p>
                      <p>🌐 Serving clients worldwide</p>
                      <p>⚡ Fast turnaround times</p>
                    </div>
                  </CardContent>
                </Card>

                <Card className="border-2 shadow-lg rounded-2xl bg-gradient-to-br from-accent/10 to-accent/5">
                  <CardContent className="p-8">
                    <h3 className="text-xl font-bold text-foreground mb-4">
                      Need immediate assistance?
                    </h3>
                    <p className="text-muted-foreground mb-4">
                      For urgent translation needs, call us directly:
                    </p>
                    <Button 
                      asChild
                      className="w-full bg-accent hover:bg-accent/90 text-accent-foreground rounded-2xl"
                    >
                      <a href="tel:+18542012060">
                        <Phone className="mr-2 h-4 w-4" />
                        +1 (854) 201-20-60
                      </a>
                    </Button>
                  </CardContent>
                </Card>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Careers Section */}
      <section className="py-20 md:py-28 bg-muted">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <Reveal>
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
                Join Our Team
              </h2>
              <p className="text-lg text-muted-foreground mb-8">
                Are you a passionate language professional? We're always looking for talented individuals to join our growing team.
              </p>
              <Button 
                asChild
                variant="outline"
                size="lg"
                className="rounded-2xl px-8 py-6 text-lg font-semibold border-2 hover:bg-accent hover:text-accent-foreground hover:border-accent transition-all"
              >
                <a href="mailto:careers@mulingua.com">
                  <Mail className="mr-2 h-5 w-5" />
                  careers@mulingua.com
                </a>
              </Button>
            </div>
          </Reveal>
        </div>
      </section>
    </div>
  );
}