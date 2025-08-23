import { motion } from 'framer-motion';
import { Languages, FileText, Mic, Globe, Users, Zap } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Button } from '@/components/ui/button';
import { Reveal } from '@/components/Reveal';
import { Link } from 'react-router-dom';

export default function Services() {
  const services = [
    {
      id: 'translation',
      title: 'Translation & Localization',
      icon: Languages,
      description: 'Adapt your content to resonate with global audiences.',
      features: [
        'Document Translation',
        'Website Localization',
        'Software Localization',
        'Marketing Content Translation',
        'Legal Document Translation',
        'Technical Translation',
      ],
      details: 'Our expert translators ensure your message maintains its impact and cultural relevance across all target markets. We combine linguistic expertise with cultural insights to deliver translations that truly connect with your audience.',
    },
    {
      id: 'transcription',
      title: 'Transcription & Subtitling',
      icon: FileText,
      description: 'Ensure your messages are accessible and engaging.',
      features: [
        'Audio Transcription',
        'Video Transcription',
        'Subtitle Creation',
        'Closed Captioning',
        'Live Captioning',
        'Multi-language Subtitles',
      ],
      details: 'Make your content accessible to wider audiences with our professional transcription and subtitling services. We ensure accuracy, proper timing, and cultural appropriateness in every project.',
    },
    {
      id: 'voiceover',
      title: 'Voice-Over & Proofreading',
      icon: Mic,
      description: 'Enhance your content with professional polish.',
      features: [
        'Professional Voice-Over',
        'Native Speaker Talent',
        'Audio Editing',
        'Proofreading Services',
        'Copy Editing',
        'Quality Assurance',
      ],
      details: 'Bring your content to life with our native speaker voice talent and meticulous proofreading services. Every word is carefully crafted to ensure maximum impact and professional quality.',
    },
  ];

  const industries = [
    {
      name: 'NGOs & Education',
      icon: Users,
      description: 'NGOs, SMEs, e-learning platforms, and students',
    },
    {
      name: 'Technology',
      icon: Zap,
      description: 'Software, apps, and tech documentation',
    },
    {
      name: 'Healthcare',
      icon: Users,
      description: 'Medical documents and patient materials',
    },
    {
      name: 'Legal',
      icon: FileText,
      description: 'Contracts, patents, and legal documents',
    },
    {
      name: 'Marketing',
      icon: Globe,
      description: 'Campaigns, websites, and brand content',
    },
  ];

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
              Our <span className="text-accent">Services</span>
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed">
              Comprehensive language solutions to help your business thrive globally
            </p>
          </motion.div>
        </div>
      </section>

      {/* Services Tabs */}
      <section className="py-20 md:py-28 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <Reveal>
            <Tabs defaultValue="translation" className="max-w-6xl mx-auto">
              <TabsList className="grid grid-cols-1 md:grid-cols-3 mb-12 bg-muted rounded-2xl p-2">
                {services.map((service) => (
                  <TabsTrigger
                    key={service.id}
                    value={service.id}
                    className="rounded-xl text-sm font-medium data-[state=active]:bg-accent data-[state=active]:text-accent-foreground p-4"
                  >
                    <service.icon className="h-5 w-5 mr-2" />
                    {service.title}
                  </TabsTrigger>
                ))}
              </TabsList>

              {services.map((service) => (
                <TabsContent key={service.id} value={service.id}>
                  <div className="grid lg:grid-cols-2 gap-8">
                    <Card className="border-2 shadow-lg rounded-2xl">
                      <CardHeader>
                        <div className="flex items-center mb-4">
                          <service.icon className="h-8 w-8 text-accent mr-3" />
                          <CardTitle className="text-2xl">{service.title}</CardTitle>
                        </div>
                        <p className="text-lg text-muted-foreground">
                          {service.details}
                        </p>
                      </CardHeader>
                      <CardContent>
                        <Button asChild className="bg-accent hover:bg-accent/90 text-accent-foreground rounded-2xl">
                          <Link to="/contact">Get Started</Link>
                        </Button>
                      </CardContent>
                    </Card>

                    <Card className="border-2 shadow-lg rounded-2xl">
                      <CardHeader>
                        <CardTitle className="text-xl mb-4">Service Features</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <ul className="space-y-3">
                          {service.features.map((feature) => (
                            <li key={feature} className="flex items-center">
                              <div className="w-2 h-2 bg-accent rounded-full mr-3 flex-shrink-0" />
                              <span className="text-muted-foreground">{feature}</span>
                            </li>
                          ))}
                        </ul>
                      </CardContent>
                    </Card>
                  </div>
                </TabsContent>
              ))}
            </Tabs>
          </Reveal>
        </div>
      </section>

      {/* Industries We Serve */}
      <section className="py-20 md:py-28 bg-muted">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <Reveal>
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
                Industries We Serve
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Specialized expertise across diverse sectors
              </p>
            </div>
          </Reveal>

          <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-6">
            {industries.map((industry, index) => (
              <Reveal key={industry.name} delay={index * 0.1}>
                <Card className="text-center border-2 shadow-lg rounded-2xl hover:shadow-xl transition-all hover:-translate-y-2">
                  <CardContent className="p-6">
                    <div className="inline-flex items-center justify-center w-16 h-16 bg-accent/10 rounded-full mb-4">
                      <industry.icon className="h-8 w-8 text-accent" />
                    </div>
                    <h3 className="text-lg font-bold text-foreground mb-2">
                      {industry.name}
                    </h3>
                    <p className="text-sm text-muted-foreground">
                      {industry.description}
                    </p>
                  </CardContent>
                </Card>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 md:py-28 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <Reveal>
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
                Our Process
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                A streamlined approach to delivering exceptional results
              </p>
            </div>
          </Reveal>

          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-4 gap-8">
              {[
                { step: '01', title: 'Consultation', description: 'Understanding your specific needs and requirements' },
                { step: '02', title: 'Planning', description: 'Creating a tailored strategy for your project' },
                { step: '03', title: 'Execution', description: 'Expert delivery by our professional team' },
                { step: '04', title: 'Quality Check', description: 'Rigorous review and quality assurance' },
              ].map((process, index) => (
                <Reveal key={process.step} delay={index * 0.1}>
                  <div className="text-center">
                    <div className="inline-flex items-center justify-center w-16 h-16 bg-accent text-accent-foreground rounded-full text-xl font-bold mb-4">
                      {process.step}
                    </div>
                    <h3 className="text-lg font-bold text-foreground mb-2">
                      {process.title}
                    </h3>
                    <p className="text-sm text-muted-foreground">
                      {process.description}
                    </p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 md:py-28 bg-gradient-to-r from-accent/10 via-accent/5 to-accent/10">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <Reveal>
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
                Ready to Get Started?
              </h2>
              <p className="text-lg text-muted-foreground mb-8">
                Let's discuss your language service needs and create a custom solution for your business.
              </p>
              <Button 
                asChild
                size="lg"
                className="bg-accent hover:bg-accent/90 text-accent-foreground rounded-2xl px-8 py-6 text-lg font-semibold"
              >
                <Link to="/contact">Contact Us Today</Link>
              </Button>
            </div>
          </Reveal>
        </div>
      </section>
    </div>
  );
}