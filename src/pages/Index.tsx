import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Star, Play, Users, Award, CheckCircle } from "lucide-react";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 z-50 border-b">
        <div className="container flex h-14 items-center">
          <div className="mr-4 flex">
            <a className="mr-6 flex items-center space-x-2" href="/">
              <div className="h-6 w-6 bg-white rounded"></div>
              <span className="font-bold text-white">Videophix</span>
            </a>
          </div>
          <div className="flex flex-1 items-center justify-between space-x-2 md:justify-end">
            <nav className="flex items-center space-x-6 text-sm font-medium">
              <a href="#portfolio" className="text-muted-foreground hover:text-white transition-colors">Portfolio</a>
              <a href="#services" className="text-muted-foreground hover:text-white transition-colors">Services</a>
              <a href="#pricing" className="text-muted-foreground hover:text-white transition-colors">Pricing</a>
              <a href="#contact" className="text-muted-foreground hover:text-white transition-colors">Contact</a>
            </nav>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-20 pb-16 px-4 text-center">
        <div className="container mx-auto max-w-4xl">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 text-white">
            Professional Video Editing & Thumbnail Design
          </h1>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Transform your content with our expert editing team. We specialize in creating engaging videos and eye-catching thumbnails that drive views and engagement.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Button size="lg" className="bg-white text-black hover:bg-gray-200">
              <span className="text-black font-semibold">View Our Work</span>
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-black">
              <span className="font-semibold">See Our Packages</span>
            </Button>
          </div>
          
          {/* Video Section with Edit Instructions */}
          <div className="relative max-w-3xl mx-auto">
            <div className="bg-gray-800 rounded-lg p-8 text-center">
              <Play className="h-16 w-16 mx-auto mb-4 text-white" />
              <h3 className="text-xl font-semibold mb-2 text-white">Demo Reel</h3>
              <p className="text-muted-foreground mb-4">See our latest work in action</p>
              <div className="bg-gray-700 p-4 rounded text-left text-sm text-gray-300">
                <p className="font-semibold text-white mb-2">How to add your video:</p>
                <ol className="list-decimal list-inside space-y-1">
                  <li>Upload your video file to your hosting service</li>
                  <li>Replace this section with an HTML5 video element or embed code</li>
                  <li>Example: &lt;video controls&gt;&lt;source src="your-video.mp4"&gt;&lt;/video&gt;</li>
                  <li>For YouTube: Use an iframe with your video's embed URL</li>
                </ol>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Portfolio Section */}
      <section id="portfolio" className="py-16 px-4 bg-gray-900">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12 text-white">Our Portfolio</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Gaming Montage",
                description: "High-energy gaming compilation with custom transitions and effects",
                category: "Video Editing",
                image: "/placeholder.svg"
              },
              {
                title: "YouTube Thumbnail Set",
                description: "Eye-catching thumbnail designs that increased CTR by 40%",
                category: "Thumbnail Design",
                image: "/placeholder.svg"
              },
              {
                title: "Product Review Edit",
                description: "Professional product showcase with clean cuts and color grading",
                category: "Video Editing",
                image: "/placeholder.svg"
              },
              {
                title: "Vlog Series Thumbnails",
                description: "Consistent branding across 20+ thumbnail designs",
                category: "Thumbnail Design",
                image: "/placeholder.svg"
              },
              {
                title: "Educational Content",
                description: "Clear, engaging educational video with motion graphics",
                category: "Video Editing",
                image: "/placeholder.svg"
              },
              {
                title: "Stream Highlights",
                description: "Best moments compilation with dynamic transitions",
                category: "Video Editing",
                image: "/placeholder.svg"
              }
            ].map((item, index) => (
              <Card key={index} className="bg-gray-800 border-gray-700 hover-lift">
                <div className="aspect-video bg-gray-700 rounded-t-lg flex items-center justify-center">
                  <Play className="h-12 w-12 text-white" />
                </div>
                <CardHeader>
                  <div className="flex justify-between items-start">
                    <CardTitle className="text-white">{item.title}</CardTitle>
                    <Badge variant="secondary">{item.category}</Badge>
                  </div>
                  <CardDescription className="text-gray-300">{item.description}</CardDescription>
                </CardHeader>
              </Card>
            ))}
          </div>
          <div className="text-center mt-12">
            <Button size="lg" className="bg-white text-black hover:bg-gray-200">
              <span className="text-black font-semibold">Contact Us for Your Project</span>
            </Button>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-16 px-4">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12 text-white">Our Services</h2>
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <Card className="bg-gray-800 border-gray-700">
              <CardHeader>
                <CardTitle className="text-white flex items-center gap-2">
                  <Play className="h-5 w-5" />
                  Video Editing
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-300 mb-4">
                  Professional video editing services including cuts, transitions, color grading, audio mixing, and special effects.
                </p>
                <ul className="space-y-2 text-gray-300">
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-green-400" />
                    Color correction and grading
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-green-400" />
                    Audio enhancement and mixing
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-green-400" />
                    Custom transitions and effects
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-green-400" />
                    Motion graphics integration
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="bg-gray-800 border-gray-700">
              <CardHeader>
                <CardTitle className="text-white flex items-center gap-2">
                  <Award className="h-5 w-5" />
                  Thumbnail Designing
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-300 mb-4">
                  Eye-catching thumbnail designs that increase click-through rates and help your content stand out.
                </p>
                <ul className="space-y-2 text-gray-300">
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-green-400" />
                    Custom graphic design
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-green-400" />
                    A/B testing variations
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-green-400" />
                    Platform optimization
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-green-400" />
                    Brand consistency
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
          <div className="text-center mt-12">
            <Button size="lg" className="bg-white text-black hover:bg-gray-200">
              <span className="text-black font-semibold">Get Started Today</span>
            </Button>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="py-16 px-4 bg-gray-900">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold text-center mb-4 text-white">Choose Your Plan</h2>
          <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
            Select the perfect plan for your editing needs. All plans include direct Discord support and fast delivery.
          </p>
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {[
              {
                title: "Basic Plan",
                price: "$25",
                description: "Perfect for simple editing projects and individual creators",
                features: [
                  "Basic video editing (cuts, transitions)",
                  "Color correction",
                  "Audio balancing",
                  "2 thumbnail designs",
                  "48-hour delivery",
                  "1 revision included"
                ]
              },
              {
                title: "Standard Plan",
                price: "$50",
                description: "Great for regular content creators who need consistent quality",
                features: [
                  "Advanced video editing",
                  "Color grading",
                  "Audio enhancement & music",
                  "5 thumbnail designs",
                  "Motion graphics (basic)",
                  "24-hour delivery",
                  "3 revisions included"
                ],
                popular: true
              },
              {
                title: "Premium Plan",
                price: "$100",
                description: "Professional package for serious content creators and businesses",
                features: [
                  "Professional video editing",
                  "Advanced color grading",
                  "Custom audio mixing",
                  "10 thumbnail designs",
                  "Advanced motion graphics",
                  "12-hour delivery",
                  "Unlimited revisions",
                  "Custom effects & animations"
                ]
              }
            ].map((plan, index) => (
              <Card key={index} className={`relative bg-gray-800 border-gray-700 ${plan.popular ? 'border-white' : ''}`}>
                {plan.popular && (
                  <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                    <Badge className="bg-white text-black">Most Popular</Badge>
                  </div>
                )}
                <CardHeader>
                  <CardTitle className="text-white">{plan.title}</CardTitle>
                  <CardDescription className="text-gray-300">{plan.description}</CardDescription>
                  <div className="text-3xl font-bold text-white">{plan.price}</div>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3 mb-6">
                    {plan.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center gap-2 text-gray-300">
                        <CheckCircle className="h-4 w-4 text-green-400" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <Button 
                    className="w-full bg-white text-black hover:bg-gray-200" 
                    onClick={() => window.open('https://discord.gg/your-server', '_blank')}
                  >
                    <span className="text-black font-semibold">Get Started</span>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
          <div className="text-center mt-12">
            <p className="text-muted-foreground mb-4">
              Ready to get started? Join our Discord server to purchase any plan and discuss your project requirements.
            </p>
            <Button 
              size="lg" 
              variant="outline" 
              className="border-white text-white hover:bg-white hover:text-black"
              onClick={() => window.open('https://discord.gg/your-server', '_blank')}
            >
              <span className="font-semibold">Join Discord Server</span>
            </Button>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16 px-4">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12 text-white">What Our Clients Say</h2>
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {[
              {
                name: "Alex Thompson",
                role: "YouTube Creator",
                content: "Videophix transformed my content! Their editing style perfectly matches my vision, and the thumbnails they create consistently get 40%+ CTR.",
                rating: 5
              },
              {
                name: "Sarah Chen",
                role: "Twitch Streamer", 
                content: "The highlight reels they create from my streams are incredible. They know exactly which moments to capture and how to make them engaging.",
                rating: 5
              },
              {
                name: "Mike Rodriguez",
                role: "Business Owner",
                content: "Professional quality at an affordable price. Their Standard plan is perfect for our weekly product reviews. Highly recommend!",
                rating: 5
              }
            ].map((testimonial, index) => (
              <Card key={index} className="bg-gray-800 border-gray-700">
                <CardHeader>
                  <div className="flex items-center gap-1 mb-2">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                  <CardDescription className="text-gray-300 italic">
                    "{testimonial.content}"
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center gap-3">
                    <div className="h-10 w-10 bg-gray-600 rounded-full flex items-center justify-center">
                      <Users className="h-5 w-5 text-white" />
                    </div>
                    <div>
                      <p className="font-semibold text-white">{testimonial.name}</p>
                      <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-16 px-4 bg-gray-900">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4 text-white">Ready to Get Started?</h2>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Join our Discord community to discuss your project, get quotes, and see more examples of our work.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              size="lg" 
              className="bg-white text-black hover:bg-gray-200"
              onClick={() => window.open('https://discord.gg/your-server', '_blank')}
            >
              <span className="text-black font-semibold">Join Our Discord</span>
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="border-white text-white hover:bg-white hover:text-black"
            >
              <span className="font-semibold">View More Work</span>
            </Button>
          </div>
          <div className="mt-12 text-muted-foreground">
            <p>💬 Discord: Join our server for instant support</p>
            <p>⚡ Fast Response: Usually within 1 hour</p>
            <p>🎨 Portfolio Reviews: Available on request</p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-4 border-t border-gray-800">
        <div className="container mx-auto text-center">
          <p className="text-muted-foreground">
            © 2024 Videophix. All rights reserved. | 
            <a href="https://discord.gg/your-server" className="text-white hover:underline ml-1" target="_blank" rel="noopener noreferrer">
              Join our Discord
            </a>
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
