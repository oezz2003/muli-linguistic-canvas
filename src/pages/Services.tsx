import { motion } from 'framer-motion';
import { Languages, FileText, Mic, Globe, Users, Zap, MessageSquare, Subtitles, ClipboardCheck, AudioLines } from 'lucide-react';
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
      id: 'interpreting',
      title: 'Interpreting',
      icon: MessageSquare,
      description: 'Real-time language interpretation for seamless communication.',
      features: [
        'Simultaneous Interpreting',
        'Consecutive Interpreting',
        'Conference Interpreting',
        'Business Meeting Interpretation',
        'Remote Interpreting',
        'Medical Interpreting',
      ],
      details: 'Bridge language barriers in real-time with our professional interpreting services. Our skilled interpreters ensure clear, accurate communication in conferences, meetings, and critical conversations.',
    },
    {
      id: 'subtitling',
      title: 'Subtitling',
      icon: Subtitles,
      description: 'Professional subtitling services for global accessibility.',
      features: [
        'Video Subtitling',
        'Movie Subtitling',
        'Educational Content Subtitles',
        'Multi-language Subtitles',
        'Timing and Synchronization',
        'Style and Format Customization',
      ],
      details: 'Make your video content accessible worldwide with our precise subtitling services. We ensure perfect timing, readability, and cultural adaptation for maximum audience engagement.',
    },
    {
      id: 'proofreading',
      title: 'Proofreading',
      icon: ClipboardCheck,
      description: 'Meticulous proofreading for flawless communication.',
      features: [
        'Document Proofreading',
        'Academic Paper Review',
        'Business Document Polish',
        'Grammar and Syntax Check',
        'Style Consistency',
        'Cultural Appropriateness Review',
      ],
      details: 'Ensure your written communication is error-free and impactful. Our experienced proofreaders refine your content for clarity, accuracy, and professional presentation.',
    },
    {
      id: 'transcription',
      title: 'Transcription',
      icon: FileText,
      description: 'Accurate transcription services for all your audio content.',
      features: [
        'Audio Transcription',
        'Video Transcription',
        'Interview Transcription',
        'Meeting Minutes',
        'Legal Transcription',
        'Medical Transcription',
      ],
      details: 'Convert your audio and video content into accurate, searchable text. Our transcription services maintain context, speaker identification, and professional formatting.',
    },
    {
      id: 'voiceover',
      title: 'Voice-over',
      icon: AudioLines,
      description: 'Professional voice-over services with native speakers.',
      features: [
        'Commercial Voice-over',
        'E-learning Narration',
        'Documentary Voice-over',
        'Audiobook Recording',
        'IVR and Phone Systems',
        'Character Voice Acting',
      ],
      details: 'Bring your content to life with our talented voice artists. We provide native-speaker quality recordings that capture the right tone and emotion for your project.',
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

      {/* Service Detail Sections */}
      {services.map((service, index) => (
        <section key={service.id} className={`py-20 md:py-28 ${index % 2 === 0 ? 'bg-background' : 'bg-muted'}`}>
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-6xl mx-auto">
              <Reveal>
                <div className="text-center mb-16">
                  <div className="inline-flex items-center justify-center w-20 h-20 bg-accent/10 rounded-full mb-6">
                    <service.icon className="h-10 w-10 text-accent" />
                  </div>
                  <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
                    {service.title}
                  </h2>
                  <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
                    {service.description}
                  </p>
                </div>
              </Reveal>

              <div className="grid lg:grid-cols-2 gap-8">
                <Reveal delay={0.2}>
                  <Card className="border-2 shadow-lg rounded-2xl">
                    <CardHeader>
                      <CardTitle className="text-2xl mb-4">About This Service</CardTitle>
                      <p className="text-lg text-muted-foreground leading-relaxed">
                        {service.details}
                      </p>
                    </CardHeader>
                    <CardContent>
                      <Button asChild className="bg-accent hover:bg-accent/90 text-accent-foreground rounded-2xl">
                        <Link to="/contact">Get Started</Link>
                      </Button>
                    </CardContent>
                  </Card>
                </Reveal>

                <Reveal delay={0.3}>
                  <Card className="border-2 shadow-lg rounded-2xl">
                    <CardHeader>
                      <CardTitle className="text-2xl mb-6">Service Features</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <ul className="space-y-4">
                        {service.features.map((feature) => (
                          <li key={feature} className="flex items-center">
                            <div className="w-3 h-3 bg-accent rounded-full mr-4 flex-shrink-0" />
                            <span className="text-muted-foreground text-lg">{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </CardContent>
                  </Card>
                </Reveal>
              </div>
            </div>
          </div>
        </section>
      ))}

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