import { motion } from 'framer-motion';
import { Target, Eye, Globe, Users, Award, CheckCircle } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Reveal } from '@/components/Reveal';

export default function About() {
  const values = [
    {
      icon: Globe,
      title: 'Global Reach',
      description: 'Connecting businesses across 240+ languages worldwide',
    },
    {
      icon: Users,
      title: 'Expert Team',
      description: 'Passionate language professionals dedicated to excellence',
    },
    {
      icon: Award,
      title: 'Quality First',
      description: 'Every detail matters in our pursuit of perfection',
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
              About <span className="text-accent">Mulingua</span>
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed">
              Connecting cultures through expert language services since our founding
            </p>
          </motion.div>
        </div>
      </section>

      {/* Connecting Cultures Section */}
      <section className="py-20 md:py-28 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <Reveal>
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-8">
                Connecting Cultures Through Language Services
              </h2>
              <div className="space-y-6 text-lg text-muted-foreground leading-relaxed">
                <p>
                  We believe in the power of language to bring people and businesses closer together. Offering services in over 240 languages, we help companies connect with new markets and speak to their audiences in a way that resonates. Whether it's translation, localization, or subtitling, we ensure your message is more than just understood—it's impactful.
                </p>
                <p>
                  Our passionate team of language experts is dedicated to getting every detail right. From startups to global enterprises, we're here to make your international growth journey smoother.
                </p>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 md:py-28 bg-muted">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12">
            <Reveal direction="left">
              <Card className="h-full border-2 shadow-lg rounded-2xl">
                <CardContent className="p-8">
                  <div className="flex items-center mb-6">
                    <Target className="h-8 w-8 text-accent mr-3" />
                    <h3 className="text-2xl font-bold text-foreground">Our Mission</h3>
                  </div>
                  <p className="text-lg text-muted-foreground leading-relaxed">
                    To help businesses connect globally by delivering accurate, reliable, and culturally relevant language services that break communication barriers.
                  </p>
                </CardContent>
              </Card>
            </Reveal>

            <Reveal direction="right">
              <Card className="h-full border-2 shadow-lg rounded-2xl">
                <CardContent className="p-8">
                  <div className="flex items-center mb-6">
                    <Eye className="h-8 w-8 text-accent mr-3" />
                    <h3 className="text-2xl font-bold text-foreground">Our Vision</h3>
                  </div>
                  <p className="text-lg text-muted-foreground leading-relaxed">
                    Becoming the trusted global language partner for businesses, enabling you to seamlessly connect, grow, and succeed in an increasingly interconnected world.
                  </p>
                </CardContent>
              </Card>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 md:py-28 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <Reveal>
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
                Our Values
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                The principles that guide everything we do
              </p>
            </div>
          </Reveal>

          <div className="grid md:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <Reveal key={value.title} delay={index * 0.1}>
                <Card className="text-center border-2 shadow-lg rounded-2xl hover:shadow-xl transition-all hover:-translate-y-2">
                  <CardContent className="p-8">
                    <div className="inline-flex items-center justify-center w-16 h-16 bg-accent/10 rounded-full mb-6">
                      <value.icon className="h-8 w-8 text-accent" />
                    </div>
                    <h3 className="text-xl font-bold text-foreground mb-4">
                      {value.title}
                    </h3>
                    <p className="text-muted-foreground">
                      {value.description}
                    </p>
                  </CardContent>
                </Card>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 md:py-28 bg-gradient-to-r from-accent/10 via-accent/5 to-accent/10">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <Reveal>
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-12 text-center">
                Why Choose Mulingua?
              </h2>
              
              <div className="grid md:grid-cols-2 gap-6">
                {[
                  'Expert linguists with native-level proficiency',
                  'Cultural sensitivity and localization expertise',
                  'Advanced technology for quality assurance',
                  'Flexible solutions for businesses of all sizes',
                  'Dedicated project management',
                  'Competitive pricing and fast turnaround',
                ].map((feature, index) => (
                  <Reveal key={feature} delay={index * 0.1}>
                    <div className="flex items-center space-x-3">
                      <CheckCircle className="h-6 w-6 text-accent flex-shrink-0" />
                      <span className="text-lg text-muted-foreground">{feature}</span>
                    </div>
                  </Reveal>
                ))}
              </div>
            </div>
          </Reveal>
        </div>
      </section>
    </div>
  );
}