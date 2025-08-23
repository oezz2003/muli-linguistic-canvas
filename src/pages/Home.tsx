import { motion } from 'framer-motion';
import { ArrowRight, CheckCircle, Globe, Languages, Mic, FileText } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Reveal } from '@/components/Reveal';
import { LogoCloud } from '@/components/LogoCloud';
import { Link } from 'react-router-dom';
import heroImage from '@/assets/hero-bg.jpg';
import workspaceImage from '@/assets/workspace.jpg';

export default function Home() {
  const services = [
    {
      id: 'translation',
      title: 'Translation & Localization',
      description: 'Adapt your content to resonate with global audiences.',
      icon: Languages,
    },
    {
      id: 'transcription',
      title: 'Transcription & Subtitling',
      description: 'Ensure your messages are accessible and engaging.',
      icon: FileText,
    },
    {
      id: 'voiceover',
      title: 'Voice-Over & Proofreading',
      description: 'Enhance your content with professional polish.',
      icon: Mic,
    },
  ];

  return (
    <div className="pt-16 lg:pt-20">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url(${heroImage})` }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-background/90 via-background/70 to-background/90" />
        
        <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="max-w-4xl mx-auto"
          >
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-foreground mb-6 leading-tight">
              Your Companion for{' '}
              <span className="text-accent">Global Growth</span>
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-2xl mx-auto leading-relaxed">
              We walk beside you, giving your business the voice it needs to connect, inspire, and thrive across borders
            </p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.8 }}
            >
              <Button 
                asChild
                size="lg"
                className="bg-accent hover:bg-accent/90 text-accent-foreground rounded-2xl px-8 py-6 text-lg font-semibold shadow-xl hover:shadow-2xl transform hover:-translate-y-1 transition-all"
              >
                <Link to="/contact">
                  Request a Quote
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
            </motion.div>
          </motion.div>
        </div>

        {/* Floating Elements */}
        <motion.div
          animate={{ y: [0, -20, 0] }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-1/4 left-10 opacity-20"
        >
          <Globe className="h-16 w-16 text-accent" />
        </motion.div>
        <motion.div
          animate={{ y: [0, 20, 0] }}
          transition={{ duration: 3, repeat: Infinity, ease: "easeInOut", delay: 1 }}
          className="absolute bottom-1/4 right-10 opacity-20"
        >
          <Languages className="h-12 w-12 text-accent" />
        </motion.div>
      </section>

      {/* Connecting Cultures Section */}
      <section className="py-20 md:py-28 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <Reveal>
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-8">
                Connecting Cultures Through Language Excellence
              </h2>
              <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                Welcome to Mulingua – Your Gateway to Seamless Global Communication. We are a premier Language Service Provider dedicated to bridging language barriers and empowering your business with our comprehensive suite of services. Whether you're looking for translation, localization, subtitling, or more, you've come to the right place.
              </p>
              <Button 
                asChild
                variant="outline"
                size="lg"
                className="rounded-2xl px-6 py-3 border-2 hover:bg-accent hover:text-accent-foreground hover:border-accent transition-all"
              >
                <Link to="/about">
                  Learn More
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Businesses We Support Section */}
      <section className="py-20 md:py-28 bg-muted">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <Reveal direction="left">
              <div>
                <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
                  Businesses We Are Proud to Support
                </h2>
                <p className="text-lg text-muted-foreground leading-relaxed mb-8">
                  We're proud to support organizations of every size and shape, from passionate startups to established global leaders. Wherever you are on your journey, we adapt to your needs and walk beside you, helping your message travel further and connect with audiences worldwide.
                </p>
              </div>
            </Reveal>
            
            <Reveal direction="right">
              <div className="relative">
                <img
                  src={workspaceImage}
                  alt="person using laptop computer beside aloe vera"
                  className="rounded-2xl shadow-2xl w-full h-auto"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/20 to-transparent rounded-2xl" />
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Our Expertise Section */}
      <section className="py-20 md:py-28 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <Reveal>
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
                Our Expertise
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                We offer a full spectrum of language services, including:
              </p>
            </div>
          </Reveal>

          <Reveal delay={0.2}>
            <Tabs defaultValue="translation" className="max-w-4xl mx-auto">
              <TabsList className="grid grid-cols-1 md:grid-cols-3 mb-8 bg-muted rounded-2xl">
                {services.map((service) => (
                  <TabsTrigger
                    key={service.id}
                    value={service.id}
                    className="rounded-xl text-sm font-medium data-[state=active]:bg-accent data-[state=active]:text-accent-foreground"
                  >
                    <service.icon className="h-4 w-4 mr-2" />
                    {service.title}
                  </TabsTrigger>
                ))}
              </TabsList>

              {services.map((service) => (
                <TabsContent key={service.id} value={service.id}>
                  <Card className="border-2 shadow-lg rounded-2xl">
                    <CardContent className="p-8 text-center">
                      <service.icon className="h-16 w-16 text-accent mx-auto mb-6" />
                      <h3 className="text-2xl font-bold text-foreground mb-4">
                        {service.title}
                      </h3>
                      <p className="text-lg text-muted-foreground">
                        {service.description}
                      </p>
                    </CardContent>
                  </Card>
                </TabsContent>
              ))}
            </Tabs>
          </Reveal>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-20 md:py-28 bg-gradient-to-r from-accent/10 via-accent/5 to-accent/10">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <Reveal>
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
                Ready to Strengthen Your Global Reach?
              </h2>
              <p className="text-lg text-muted-foreground mb-10 leading-relaxed">
                Discover how Mulingua can transform your communication strategies. Contact Us for a consultation or Request a Quote today. Let's start bridging your language gaps and unlocking new opportunities together.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button 
                  asChild
                  size="lg"
                  className="bg-accent hover:bg-accent/90 text-accent-foreground rounded-2xl px-8 py-6 text-lg font-semibold shadow-xl hover:shadow-2xl transform hover:-translate-y-1 transition-all"
                >
                  <Link to="/contact">
                    Request a Quote
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>
                </Button>
                <Button 
                  asChild
                  variant="outline"
                  size="lg"
                  className="rounded-2xl px-8 py-6 text-lg font-semibold border-2 hover:bg-accent hover:text-accent-foreground hover:border-accent transition-all"
                >
                  <Link to="/contact">
                    Contact Us
                  </Link>
                </Button>
              </div>
            </div>
          </Reveal>
        </div>
      </section>
    </div>
  );
}