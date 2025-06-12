import { useState, useEffect } from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Star, Check, ArrowRight, Play, Users, Contact, FileImage, ExternalLink, MessageCircle } from 'lucide-react';

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

  const openDiscord = () => {
    window.open('https://discord.gg/your-server', '_blank');
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Enhanced Navigation */}
      <nav className="fixed top-0 w-full z-50 glass-effect border-b border-white/10">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="text-2xl font-playfair font-bold text-gradient">
              Videophix
            </div>
            <div className="hidden md:flex items-center space-x-8">
              {[
                { id: 'home', label: 'Home' },
                { id: 'portfolio', label: 'Our Work' },
                { id: 'services', label: 'What We Do' },
                { id: 'pricing', label: 'Plans & Pricing' },
                { id: 'testimonials', label: 'Client Reviews' },
                { id: 'contact', label: 'Get in Touch' }
              ].map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`transition-all duration-300 hover:text-primary font-medium ${
                    activeSection === item.id ? 'text-primary border-b-2 border-primary pb-1' : 'text-muted-foreground hover:text-foreground'
                  }`}
                >
                  {item.label}
                </button>
              ))}
            </div>
            <Button 
              onClick={openDiscord}
              className="gradient-purple text-white hover:opacity-90 font-semibold"
            >
              <MessageCircle className="h-4 w-4 mr-2" />
              Join Discord
            </Button>
          </div>
        </div>
      </nav>

      {/* Enhanced Hero Section */}
      <section id="home" className="pt-20 pb-16 gradient-bg text-white">
        <div className="container mx-auto px-4 py-20">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-8 animate-fade-in">
              <div className="space-y-4">
                <Badge className="bg-white/20 text-white border-white/30">Professional Video Editing Team</Badge>
                <h1 className="text-5xl md:text-6xl font-playfair font-bold leading-tight">
                  Transform Your Content with 
                  <span className="block text-gray-300">Expert Video Editing</span>
                </h1>
                <p className="text-xl text-gray-200 leading-relaxed max-w-lg">
                  From YouTube videos to brand commercials, we bring your vision to life with professional editing and eye-catching thumbnail designs that drive engagement.
                </p>
              </div>
              
              {/* Enhanced CTAs */}
              <div className="flex flex-col sm:flex-row gap-4">
                <Button 
                  size="lg" 
                  onClick={() => scrollToSection('portfolio')}
                  className="bg-white text-gray-900 hover:bg-gray-100 font-semibold group"
                >
                  View Our Work
                  <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </Button>
                <Button 
                  size="lg" 
                  variant="outline"
                  onClick={() => scrollToSection('pricing')}
                  className="border-white text-white hover:bg-white hover:text-gray-900 font-semibold"
                >
                  See Our Packages
                </Button>
                <Button 
                  size="lg" 
                  onClick={openDiscord}
                  className="border border-white/30 bg-white/10 text-white hover:bg-white/20 font-semibold"
                >
                  Get Free Quote
                </Button>
              </div>

              {/* Trust Indicators */}
              <div className="flex items-center space-x-6 pt-4">
                <div className="text-center">
                  <div className="text-2xl font-bold">500+</div>
                  <div className="text-sm text-gray-300">Videos Edited</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold">50+</div>
                  <div className="text-sm text-gray-300">Happy Clients</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold">24h</div>
                  <div className="text-sm text-gray-300">Avg. Delivery</div>
                </div>
              </div>
            </div>
            
            <div className="relative animate-float">
              <div className="aspect-video bg-gray-800 rounded-2xl overflow-hidden shadow-2xl">
                <img 
                  src="https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?w=600&h=400&fit=crop&crop=center"
                  alt="Professional video editing workspace showcasing our expertise" 
                  className="w-full h-full object-cover"
                  loading="eager"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-20 h-20 bg-white/20 rounded-full flex items-center justify-center backdrop-blur-sm hover:bg-white/30 transition-colors cursor-pointer">
                    <Play className="h-8 w-8 text-white ml-1" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Enhanced Portfolio Section */}
      <section id="portfolio" className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <Badge className="mb-4">Our Work</Badge>
            <h2 className="text-4xl font-playfair font-bold mb-4 text-gradient">Professional Video Editing Portfolio</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              See how we transform raw footage into compelling stories. From corporate videos to social media content, 
              our editing expertise delivers results that engage and convert.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            {[
              {
                title: "Tech Startup Product Launch",
                category: "Commercial Video",
                description: "Complete editing with motion graphics, sound design, and color grading",
                image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=400&h=300&fit=crop",
                results: "2M+ views, 15% conversion rate"
              },
              {
                title: "YouTube Channel Transformation",
                category: "Content Creation",
                description: "Series editing with custom thumbnails and consistent branding",
                image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=400&h=300&fit=crop",
                results: "300% subscriber growth"
              },
              {
                title: "E-commerce Product Showcase",
                category: "Product Video",
                description: "Dynamic product demonstrations with professional lighting effects",
                image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=400&h=300&fit=crop",
                results: "40% increase in sales"
              },
              {
                title: "Wedding Highlight Reel",
                category: "Event Video",
                description: "Emotional storytelling with cinematic color grading and music sync",
                image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=400&h=300&fit=crop",
                results: "Client featured on wedding blogs"
              },
              {
                title: "Social Media Campaign",
                category: "Short-form Content",
                description: "Series of engaging videos optimized for different platforms",
                image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?w=400&h=300&fit=crop",
                results: "500K+ total engagements"
              },
              {
                title: "Documentary Series",
                category: "Long-form Content",
                description: "Multi-episode series with professional interviews and B-roll",
                image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=400&h=300&fit=crop",
                results: "Featured at film festival"
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
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity">
                    <div className="absolute bottom-4 left-4 right-4 text-white">
                      <Badge variant="secondary" className="mb-2">{item.category}</Badge>
                      <p className="text-sm font-medium">{item.results}</p>
                    </div>
                  </div>
                </div>
                <CardContent className="p-6">
                  <h3 className="font-semibold mb-2 text-lg">{item.title}</h3>
                  <p className="text-sm text-muted-foreground mb-3">{item.description}</p>
                  <Button variant="outline" size="sm" className="group">
                    View Details
                    <ExternalLink className="h-3 w-3 ml-1 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Portfolio CTA */}
          <div className="text-center">
            <Button 
              size="lg"
              onClick={openDiscord}
              className="gradient-purple text-white hover:opacity-90 font-semibold"
            >
              Start Your Project Today
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </div>
        </div>
      </section>

      {/* Enhanced Services Section */}
      <section id="services" className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <Badge className="mb-4">What We Do</Badge>
            <h2 className="text-4xl font-playfair font-bold mb-4 text-gradient">Professional Editing Services</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              We specialize in two core services that transform your content and maximize its impact. 
              Every project is handled with precision and creativity.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 mb-12">
            {[
              {
                icon: <Play className="h-10 w-10" />,
                title: "Video Editing",
                description: "Transform your raw footage into compelling stories with professional editing techniques",
                features: [
                  "Professional color correction and grading",
                  "Dynamic transitions and effects",
                  "Audio enhancement and synchronization",
                  "Motion graphics and text animations",
                  "Multi-camera editing and switching",
                  "Sound design and music integration"
                ],
                process: "Upload footage → Creative brief → Professional editing → Revisions → Final delivery"
              },
              {
                icon: <FileImage className="h-10 w-10" />,
                title: "Thumbnail Design",
                description: "Create eye-catching thumbnails that boost click-through rates and viewer engagement",
                features: [
                  "Custom graphic design for each video",
                  "Brand-consistent visual identity",
                  "High-impact typography and layouts",
                  "A/B testing optimization suggestions",
                  "Platform-specific sizing and formats",
                  "Express delivery options available"
                ],
                process: "Video analysis → Design concepts → Client feedback → Refinements → Final files"
              }
            ].map((service, index) => (
              <Card key={index} className="hover-lift">
                <CardHeader>
                  <div className="w-20 h-20 gradient-purple rounded-xl flex items-center justify-center text-white mb-6">
                    {service.icon}
                  </div>
                  <CardTitle className="text-2xl mb-2">{service.title}</CardTitle>
                  <CardDescription className="text-base">{service.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-6">
                    <div>
                      <h4 className="font-semibold mb-3">What's Included:</h4>
                      <ul className="space-y-2">
                        {service.features.map((feature, featureIndex) => (
                          <li key={featureIndex} className="flex items-start">
                            <Check className="h-4 w-4 text-primary mr-3 mt-0.5 flex-shrink-0" />
                            <span className="text-sm">{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-semibold mb-2">Our Process:</h4>
                      <p className="text-sm text-muted-foreground">{service.process}</p>
                    </div>
                    <Button 
                      onClick={openDiscord}
                      className="w-full"
                      variant="outline"
                    >
                      Get Quote for {service.title}
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Services CTA */}
          <div className="text-center bg-gray-50 rounded-2xl p-8">
            <h3 className="text-2xl font-semibold mb-4">Need a Custom Solution?</h3>
            <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
              We also handle special projects, rush orders, and bulk editing packages. 
              Let's discuss your specific needs and create a tailored solution.
            </p>
            <Button 
              size="lg"
              onClick={openDiscord}
              className="gradient-purple text-white hover:opacity-90 font-semibold"
            >
              Discuss Your Project
              <MessageCircle className="ml-2 h-4 w-4" />
            </Button>
          </div>
        </div>
      </section>

      {/* Enhanced Pricing Section */}
      <section id="pricing" className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <Badge className="mb-4">Plans & Pricing</Badge>
            <h2 className="text-4xl font-playfair font-bold mb-4 text-gradient">Choose Your Perfect Plan</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Transparent pricing with no hidden fees. All purchases are processed through our Discord server 
              for personalized service and direct communication with our team.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-12">
            {[
              {
                title: "Starter",
                price: "$49",
                originalPrice: "$79",
                description: "Perfect for simple edits and quick turnarounds",
                features: [
                  "Basic color correction",
                  "Simple cuts and transitions",
                  "Audio level adjustment",
                  "1-2 day delivery",
                  "1 revision included",
                  "HD export (1080p)"
                ],
                popular: false,
                cta: "Start with Basics"
              },
              {
                title: "Professional",
                price: "$149",
                originalPrice: "$199",
                description: "Our most popular choice for content creators",
                features: [
                  "Advanced color grading",
                  "Custom transitions & effects",
                  "Motion graphics integration",
                  "Audio enhancement & mixing",
                  "2-3 day delivery",
                  "3 revisions included",
                  "Custom thumbnail design",
                  "4K export available"
                ],
                popular: true,
                cta: "Most Popular Choice"
              },
              {
                title: "Premium",
                price: "$299",
                originalPrice: "$399",
                description: "Complete package for professional productions",
                features: [
                  "Cinema-grade color grading",
                  "Custom animations & graphics",
                  "Professional sound design",
                  "Multi-camera editing",
                  "3-5 day delivery",
                  "Unlimited revisions",
                  "Multiple format exports",
                  "Priority support",
                  "Rush delivery available"
                ],
                popular: false,
                cta: "Go Premium"
              }
            ].map((plan, index) => (
              <Card key={index} className={`hover-lift relative ${plan.popular ? 'ring-2 ring-primary scale-105' : ''}`}>
                {plan.popular && (
                  <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                    <Badge className="gradient-purple text-white px-4 py-1">Most Popular</Badge>
                  </div>
                )}
                <CardHeader className="text-center pb-4">
                  <CardTitle className="text-2xl font-playfair">{plan.title}</CardTitle>
                  <div className="my-4">
                    <div className="flex items-center justify-center space-x-2">
                      <span className="text-4xl font-bold text-gradient">{plan.price}</span>
                      <div className="text-sm text-muted-foreground">
                        <div className="line-through">{plan.originalPrice}</div>
                        <div>per project</div>
                      </div>
                    </div>
                  </div>
                  <CardDescription className="text-base">{plan.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3 mb-8">
                    {plan.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-start">
                        <Check className="h-4 w-4 text-primary mr-3 mt-0.5 flex-shrink-0" />
                        <span className="text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <div className="space-y-3">
                    <Button 
                      className={`w-full font-semibold ${plan.popular ? 'gradient-purple text-white' : ''}`}
                      variant={plan.popular ? 'default' : 'outline'}
                      onClick={openDiscord}
                    >
                      {plan.cta}
                    </Button>
                    <p className="text-xs text-center text-muted-foreground">
                      Join Discord to purchase • Secure payment • Direct communication
                    </p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Pricing CTA */}
          <div className="text-center bg-white rounded-2xl p-8 shadow-sm">
            <h3 className="text-2xl font-semibold mb-4">Ready to Get Started?</h3>
            <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
              Join our Discord server to discuss your project, ask questions, and complete your purchase. 
              Our team is ready to help bring your vision to life.
            </p>
            <Button 
              size="lg"
              onClick={openDiscord}
              className="gradient-purple text-white hover:opacity-90 font-semibold"
            >
              <MessageCircle className="mr-2 h-5 w-5" />
              Join Discord & Purchase
            </Button>
          </div>
        </div>
      </section>

      {/* Keep existing testimonials and contact sections unchanged */}
      // ... keep existing code (testimonials section)

      {/* Testimonials Section */}
      <section id="testimonials" className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <Badge className="mb-4">Client Reviews</Badge>
            <h2 className="text-4xl font-playfair font-bold mb-4 text-gradient">What Our Clients Say</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Real feedback from content creators, businesses, and individuals who trust us with their video editing needs
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                name: "Sarah Johnson",
                role: "YouTube Content Creator",
                content: "Videophix transformed my channel! Their editing quality is incredible and the turnaround time is amazing. My subscriber count doubled in just 3 months.",
                rating: 5,
                project: "Weekly YouTube series editing"
              },
              {
                name: "Michael Chen",
                role: "Wedding Videographer",
                content: "The cinematic quality they achieve is outstanding. My clients are always thrilled with the final wedding videos. Professional service every time.",
                rating: 5,
                project: "Wedding highlight reels"
              },
              {
                name: "Emma Davis",
                role: "Marketing Director",
                content: "Professional, creative, and always on time. They've become our go-to team for all video content. The results speak for themselves.",
                rating: 5,
                project: "Corporate video campaigns"
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
                  <div className="flex items-center justify-between">
                    <div className="flex items-center">
                      <div className="w-10 h-10 gradient-purple rounded-full flex items-center justify-center text-white font-semibold mr-3">
                        {testimonial.name.split(' ').map(n => n[0]).join('')}
                      </div>
                      <div>
                        <div className="font-semibold">{testimonial.name}</div>
                        <div className="text-sm text-muted-foreground">{testimonial.role}</div>
                      </div>
                    </div>
                  </div>
                  <div className="mt-3 pt-3 border-t border-gray-100">
                    <Badge variant="outline" className="text-xs">{testimonial.project}</Badge>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Enhanced Contact Section */}
      <section id="contact" className="py-20 gradient-bg text-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <Badge className="mb-4 bg-white/20 text-white border-white/30">Get in Touch</Badge>
            <h2 className="text-4xl font-playfair font-bold mb-4">Ready to Transform Your Content?</h2>
            <p className="text-xl text-gray-200 max-w-3xl mx-auto">
              Join our Discord community to discuss your project, get a custom quote, and connect with our editing team. 
              We're here to help bring your creative vision to life.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-white/20 rounded-lg flex items-center justify-center">
                  <Users className="h-6 w-6" />
                </div>
                <div>
                  <h3 className="font-semibold text-lg">Active Community</h3>
                  <p className="text-gray-200">Connect with other creators and our professional editing team</p>
                </div>
              </div>
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-white/20 rounded-lg flex items-center justify-center">
                  <MessageCircle className="h-6 w-6" />
                </div>
                <div>
                  <h3 className="font-semibold text-lg">Direct Communication</h3>
                  <p className="text-gray-200">Chat directly with our editors throughout your project</p>
                </div>
              </div>
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-white/20 rounded-lg flex items-center justify-center">
                  <Star className="h-6 w-6" />
                </div>
                <div>
                  <h3 className="font-semibold text-lg">Premium Support</h3>
                  <p className="text-gray-200">Dedicated support and project management from start to finish</p>
                </div>
              </div>
            </div>
            
            <div className="text-center">
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
                <h3 className="text-2xl font-semibold mb-4">Start Your Project Today</h3>
                <p className="text-gray-200 mb-6">
                  Click below to join our Discord server, discuss your editing needs, and get started with professional video editing services.
                </p>
                <div className="space-y-4">
                  <Button 
                    size="lg"
                    onClick={openDiscord}
                    className="bg-white text-gray-900 hover:bg-gray-100 font-semibold animate-glow w-full"
                  >
                    <MessageCircle className="mr-2 h-5 w-5" />
                    Join Discord Server
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                  <div className="text-center">
                    <Button 
                      variant="ghost" 
                      onClick={() => scrollToSection('pricing')}
                      className="text-white hover:bg-white/10"
                    >
                      View Pricing Plans First
                    </Button>
                  </div>
                </div>
                <p className="text-sm text-gray-300 mt-4">
                  Free to join • Instant access • Professional support
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
            <div className="text-sm text-center md:text-right">
              <p>© 2024 Videophix. All rights reserved.</p>
              <p className="mt-1">Professional video editing services | Built for performance and creativity</p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
