import { useState, useEffect } from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Star, Check, ArrowRight, Play, Users, Contact, FileImage } from 'lucide-react';

const Index = () => {
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'portfolio', 'services', 'pricing', 'testimonials', 'contact'];
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const offsetTop = element.offsetTop;
          const offsetHeight = element.offsetHeight;
          
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 glass-effect border-b border-white/10">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="text-2xl font-playfair font-bold text-gradient">
              Videophix
            </div>
            <div className="hidden md:flex space-x-8">
              {[
                { id: 'home', label: 'Home' },
                { id: 'portfolio', label: 'Portfolio' },
                { id: 'services', label: 'Services' },
                { id: 'pricing', label: 'Pricing' },
                { id: 'testimonials', label: 'Testimonials' },
                { id: 'contact', label: 'Contact' }
              ].map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`transition-colors hover:text-primary ${
                    activeSection === item.id ? 'text-primary' : 'text-muted-foreground'
                  }`}
                >
                  {item.label}
                </button>
              ))}
            </div>
            <Button 
              onClick={() => window.open('https://discord.gg/your-server', '_blank')}
              className="gradient-purple text-white hover:opacity-90"
            >
              Join Discord
            </Button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="pt-20 pb-16 gradient-bg text-white">
        <div className="container mx-auto px-4 py-20">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6 animate-fade-in">
              <h1 className="text-5xl md:text-6xl font-playfair font-bold leading-tight">
                Transform Your Content with 
                <span className="block text-gray-300">Expert Editing</span>
              </h1>
              <p className="text-xl text-gray-200 leading-relaxed">
                Professional video editing and thumbnail design services that bring your vision to life. 
                From color correction to creative storytelling, we craft content that captivates.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button 
                  size="lg" 
                  onClick={() => scrollToSection('portfolio')}
                  className="bg-white text-gray-900 hover:bg-gray-100 font-semibold"
                >
                  View Our Work
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
                <Button 
                  size="lg" 
                  variant="outline"
                  onClick={() => scrollToSection('pricing')}
                  className="border-white text-white hover:bg-white hover:text-gray-900"
                >
                  See Pricing
                </Button>
              </div>
            </div>
            <div className="relative animate-float">
              <div className="aspect-video bg-gray-800 rounded-2xl overflow-hidden shadow-2xl">
                <img 
                  src="https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?w=600&h=400&fit=crop&crop=center"
                  alt="Professional editing workspace" 
                  className="w-full h-full object-cover"
                  loading="eager"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-20 h-20 bg-white/20 rounded-full flex items-center justify-center backdrop-blur-sm">
                    <Play className="h-8 w-8 text-white ml-1" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Portfolio Section */}
      <section id="portfolio" className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-playfair font-bold mb-4 text-gradient">Our Portfolio</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Showcase of our finest editing work across video and photo projects
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Fashion Photography Edit",
                category: "Photo Editing",
                image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=400&h=300&fit=crop"
              },
              {
                title: "Corporate Video Production",
                category: "Video Editing",
                image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=400&h=300&fit=crop"
              },
              {
                title: "Product Showcase",
                category: "Commercial Edit",
                image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=400&h=300&fit=crop"
              },
              {
                title: "Wedding Highlights",
                category: "Event Editing",
                image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=400&h=300&fit=crop"
              },
              {
                title: "Social Media Content",
                category: "Quick Edits",
                image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?w=400&h=300&fit=crop"
              },
              {
                title: "Brand Documentary",
                category: "Storytelling",
                image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=400&h=300&fit=crop"
              }
            ].map((item, index) => (
              <Card key={index} className="hover-lift cursor-pointer group">
                <div className="relative overflow-hidden rounded-t-lg">
                  <img 
                    src={item.image} 
                    alt={item.title}
                    className="w-full h-48 object-cover transition-transform group-hover:scale-110"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity">
                    <div className="absolute bottom-4 left-4 text-white">
                      <Badge variant="secondary" className="mb-2">{item.category}</Badge>
                    </div>
                  </div>
                </div>
                <CardContent className="p-4">
                  <h3 className="font-semibold mb-2">{item.title}</h3>
                  <p className="text-sm text-muted-foreground">{item.category}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-playfair font-bold mb-4 text-gradient">Our Services</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Comprehensive editing solutions tailored to your creative needs
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {[
              {
                icon: <Play className="h-8 w-8" />,
                title: "Video Editing",
                description: "Professional video editing with color grading, transitions, and storytelling",
                features: ["Color Correction", "Audio Sync", "Transitions", "Motion Graphics"]
              },
              {
                icon: <FileImage className="h-8 w-8" />,
                title: "Thumbnail Designing",
                description: "Eye-catching thumbnail designs that boost your video's click-through rate",
                features: ["Custom Designs", "Brand Consistency", "High Impact Visuals", "A/B Testing Options"]
              }
            ].map((service, index) => (
              <Card key={index} className="hover-lift">
                <CardHeader>
                  <div className="w-16 h-16 gradient-purple rounded-xl flex items-center justify-center text-white mb-4">
                    {service.icon}
                  </div>
                  <CardTitle className="text-xl">{service.title}</CardTitle>
                  <CardDescription>{service.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center">
                        <Check className="h-4 w-4 text-primary mr-2" />
                        <span className="text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-playfair font-bold mb-4 text-gradient">Choose Your Plan</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Flexible pricing options to suit projects of any size. Join our Discord to get started!
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "Basic Plan",
                price: "$49",
                description: "Perfect for simple edits and quick turnarounds",
                features: [
                  "Basic color correction",
                  "Simple transitions",
                  "Audio sync",
                  "1-day delivery",
                  "1 revision included"
                ],
                popular: false
              },
              {
                title: "Standard Plan",
                price: "$149",
                description: "Ideal for professional content creation",
                features: [
                  "Advanced color grading",
                  "Custom transitions",
                  "Motion graphics",
                  "3-day delivery",
                  "3 revisions included",
                  "Background music"
                ],
                popular: true
              },
              {
                title: "Premium Plan",
                price: "$299",
                description: "Complete package for high-end productions",
                features: [
                  "Cinema-grade editing",
                  "Custom animations",
                  "Sound design",
                  "5-day delivery",
                  "Unlimited revisions",
                  "Multiple formats",
                  "Priority support"
                ],
                popular: false
              }
            ].map((plan, index) => (
              <Card key={index} className={`hover-lift relative ${plan.popular ? 'ring-2 ring-primary' : ''}`}>
                {plan.popular && (
                  <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                    <Badge className="gradient-purple text-white px-4 py-1">Most Popular</Badge>
                  </div>
                )}
                <CardHeader className="text-center">
                  <CardTitle className="text-2xl font-playfair">{plan.title}</CardTitle>
                  <div className="text-4xl font-bold text-gradient my-4">{plan.price}</div>
                  <CardDescription>{plan.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3 mb-6">
                    {plan.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center">
                        <Check className="h-4 w-4 text-primary mr-3" />
                        <span className="text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Button 
                    className={`w-full ${plan.popular ? 'gradient-purple text-white' : ''}`}
                    variant={plan.popular ? 'default' : 'outline'}
                    onClick={() => window.open('https://discord.gg/your-server', '_blank')}
                  >
                    Get Started
                  </Button>
                  <p className="text-xs text-center text-muted-foreground mt-2">
                    Join our Discord server to purchase
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-playfair font-bold mb-4 text-gradient">What Our Clients Say</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Don't just take our word for it - hear from satisfied clients
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                name: "Sarah Johnson",
                role: "Content Creator",
                content: "ProEdit Studio transformed my YouTube channel! Their video editing skills are incredible and the turnaround time is amazing.",
                rating: 5
              },
              {
                name: "Michael Chen",
                role: "Wedding Photographer",
                content: "The photo editing quality exceeded my expectations. My clients were thrilled with the final results.",
                rating: 5
              },
              {
                name: "Emma Davis",
                role: "Marketing Director",
                content: "Professional, creative, and always on time. They've become our go-to team for all editing needs.",
                rating: 5
              }
            ].map((testimonial, index) => (
              <Card key={index} className="hover-lift">
                <CardContent className="p-6">
                  <div className="flex mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                  <blockquote className="text-muted-foreground mb-4 italic">
                    "{testimonial.content}"
                  </blockquote>
                  <div className="flex items-center">
                    <div className="w-10 h-10 gradient-purple rounded-full flex items-center justify-center text-white font-semibold mr-3">
                      {testimonial.name.split(' ').map(n => n[0]).join('')}
                    </div>
                    <div>
                      <div className="font-semibold">{testimonial.name}</div>
                      <div className="text-sm text-muted-foreground">{testimonial.role}</div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 gradient-bg text-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-playfair font-bold mb-4">Ready to Get Started?</h2>
            <p className="text-xl text-gray-200 max-w-2xl mx-auto">
              Join our Discord community to discuss your project and get a custom quote
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-white/20 rounded-lg flex items-center justify-center">
                  <Users className="h-6 w-6" />
                </div>
                <div>
                  <h3 className="font-semibold text-lg">Join Our Community</h3>
                  <p className="text-gray-200">Connect with other creators and our team</p>
                </div>
              </div>
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-white/20 rounded-lg flex items-center justify-center">
                  <Contact className="h-6 w-6" />
                </div>
                <div>
                  <h3 className="font-semibold text-lg">Quick Response</h3>
                  <p className="text-gray-200">Get answers to your questions within hours</p>
                </div>
              </div>
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-white/20 rounded-lg flex items-center justify-center">
                  <Star className="h-6 w-6" />
                </div>
                <div>
                  <h3 className="font-semibold text-lg">Premium Support</h3>
                  <p className="text-gray-200">Dedicated support throughout your project</p>
                </div>
              </div>
            </div>
            
            <div className="text-center">
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
                <h3 className="text-2xl font-semibold mb-4">Start Your Project Today</h3>
                <p className="text-gray-200 mb-6">
                  Click below to join our Discord server and discuss your editing needs with our team.
                </p>
                <Button 
                  size="lg"
                  onClick={() => window.open('https://discord.gg/your-server', '_blank')}
                  className="bg-white text-gray-900 hover:bg-gray-100 font-semibold animate-glow"
                >
                  Join Discord Server
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
                <p className="text-sm text-gray-300 mt-4">
                  Free to join • Instant access • No spam
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 bg-gray-900 text-gray-400">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-2xl font-playfair font-bold text-white mb-4 md:mb-0">
              Videophix
            </div>
            <div className="text-sm">
              © 2024 Videophix. All rights reserved. | Built for performance and creativity.
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
