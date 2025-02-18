
import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Badge } from "@/components/ui/badge";
import { useToast } from "@/components/ui/use-toast";
import { 
  Code, 
  PenTool, 
  Shield, 
  Globe, 
  MessageSquare, 
  Brain,
  Send,
  Rocket,
  Bot,
  GraduationCap
} from "lucide-react";

const services = [
  {
    id: "web-dev",
    icon: Globe,
    title: "Web Development & Design",
    description: "Transform your online presence with websites that perform and protect.",
    details: [
      {
        subtitle: "Custom Website Development",
        items: [
          "Responsive design for all devices",
          "SEO-optimized architecture",
          "Secure payment integration",
          "Content management systems",
          "Performance optimization",
          "SSL implementation"
        ]
      },
      {
        subtitle: "Website Maintenance",
        items: [
          "Regular security updates",
          "Performance monitoring",
          "Content updates",
          "Technical support",
          "Backup management"
        ]
      }
    ]
  },
  {
    id: "content",
    icon: PenTool,
    title: "Content Creation & Strategy",
    description: "Professional content that engages and converts.",
    details: [
      {
        subtitle: "Technical Writing",
        items: [
          "Software documentation",
          "API documentation",
          "User guides",
          "Technical specifications",
          "Implementation guides",
          "Security protocols"
        ]
      },
      {
        subtitle: "Content Writing",
        items: [
          "SEO-optimized blog posts",
          "Website content",
          "White papers",
          "Case studies",
          "Research articles",
          "Industry analysis"
        ]
      }
    ]
  },
  {
    id: "security",
    icon: Shield,
    title: "Security & Compliance Solutions",
    description: "Enterprise-grade security with Cisco-certified expertise.",
    details: [
      {
        subtitle: "Digital Security",
        items: [
          "Security audit reports",
          "Compliance documentation",
          "Privacy policy creation",
          "Terms of service",
          "Data protection strategies",
          "Security best practices"
        ]
      }
    ]
  },
  {
    id: "blockchain",
    icon: Brain,
    title: "Blockchain & AI Integration",
    description: "Cutting-edge solutions with IBM and Colorado University certifications.",
    details: [
      {
        subtitle: "Technology Consulting",
        items: [
          "Blockchain implementation",
          "AI solution integration",
          "Smart contract development",
          "Data science applications",
          "Process automation",
          "Technical feasibility studies"
        ]
      }
    ]
  }
];

export const Services = () => {
  const { toast } = useToast();
  const [selectedService, setSelectedService] = useState("");

  const handleContact = (service: string) => {
    const whatsappLink = `https://wa.me/message/7N3NAWA2QFDOC1`;
    window.open(whatsappLink, '_blank');
    toast({
      title: "Opening WhatsApp",
      description: "Redirecting you to discuss the project details.",
    });
  };

  return (
    <section className="py-16 bg-white" id="services">
      <div className="container mx-auto px-4">
        {/* Tech Education CTA Section */}
        <div className="mb-24 relative overflow-hidden rounded-3xl bg-gradient-to-br from-[#0A192F] via-[#112240] to-[#0A1222] p-8 md:p-12">
          {/* Animated background elements */}
          <div className="absolute inset-0 opacity-10">
            <div className="absolute inset-0 bg-[url('data:image/svg+xml,...')] opacity-20"></div>
            <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-electricBlue/20 via-transparent to-transparent animate-pulse"></div>
          </div>
          
          <div className="relative z-10">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 text-center">
              Tech Education for Young Minds 🚀
            </h2>
            <p className="text-lg md:text-xl text-gray-300 mb-12 text-center max-w-3xl mx-auto">
              Empower your children with the skills of tomorrow through interactive online learning experiences
            </p>
            
            <div className="grid md:grid-cols-3 gap-6 mb-12">
              <Card className="bg-white/5 backdrop-blur-lg border border-white/10 hover:border-electricBlue/50 transition-all duration-300">
                <CardHeader>
                  <div className="flex items-center gap-4">
                    <Bot className="w-8 h-8 text-electricBlue" />
                    <CardTitle className="text-white">AI Prompt Engineering</CardTitle>
                  </div>
                  <CardDescription className="text-gray-400">
                    Master the art of crafting effective AI prompts
                  </CardDescription>
                </CardHeader>
              </Card>

              <Card className="bg-white/5 backdrop-blur-lg border border-white/10 hover:border-electricBlue/50 transition-all duration-300">
                <CardHeader>
                  <div className="flex items-center gap-4">
                    <Globe className="w-8 h-8 text-electricBlue" />
                    <CardTitle className="text-white">Web Development</CardTitle>
                  </div>
                  <CardDescription className="text-gray-400">
                    Build amazing websites and web applications
                  </CardDescription>
                </CardHeader>
              </Card>

              <Card className="bg-white/5 backdrop-blur-lg border border-white/10 hover:border-electricBlue/50 transition-all duration-300">
                <CardHeader>
                  <div className="flex items-center gap-4">
                    <Shield className="w-8 h-8 text-electricBlue" />
                    <CardTitle className="text-white">Cyber Security</CardTitle>
                  </div>
                  <CardDescription className="text-gray-400">
                    Learn essential online safety practices
                  </CardDescription>
                </CardHeader>
              </Card>
            </div>

            <div className="text-center space-y-6">
              <p className="text-gray-300">
                <GraduationCap className="inline-block w-5 h-5 mr-2" />
                Specialized programs for schools and organizations
              </p>
              <Button
                onClick={() => handleContact("Education")}
                className="bg-electricBlue hover:bg-white hover:text-navy text-white text-lg px-8 py-6 h-auto rounded-full transition-all duration-300 shadow-[0_0_15px_rgba(0,163,255,0.5)] hover:shadow-[0_0_25px_rgba(0,163,255,0.8)]"
              >
                <Rocket className="w-5 h-5 mr-2" />
                Start Learning Journey
              </Button>
            </div>
          </div>
        </div>

        {/* Original Services Content */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-navy mb-4">Comprehensive Digital Solutions</h2>
          <p className="text-lg text-softGray max-w-3xl mx-auto">
            Leveraging my unique blend of legal expertise and technical certifications from IBM, Cisco, and Colorado University, 
            I deliver professional services that combine innovation with compliance and security.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-12">
          {services.map((service) => (
            <Card key={service.id} className="group hover:shadow-lg transition-shadow duration-300">
              <CardHeader>
                <div className="flex items-center gap-4">
                  <service.icon className="w-8 h-8 text-electricBlue" />
                  <div>
                    <CardTitle className="text-xl text-navy">{service.title}</CardTitle>
                    <CardDescription className="text-softGray">{service.description}</CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <Accordion type="single" collapsible>
                  {service.details.map((detail, index) => (
                    <AccordionItem key={index} value={`item-${index}`}>
                      <AccordionTrigger className="text-navy hover:text-electricBlue">
                        {detail.subtitle}
                      </AccordionTrigger>
                      <AccordionContent>
                        <ul className="space-y-2">
                          {detail.items.map((item, idx) => (
                            <li key={idx} className="flex items-center gap-2">
                              <Code className="w-4 h-4 text-electricBlue" />
                              <span className="text-softGray">{item}</span>
                            </li>
                          ))}
                        </ul>
                      </AccordionContent>
                    </AccordionItem>
                  ))}
                </Accordion>
                <div className="mt-6 flex justify-end">
                  <Button
                    onClick={() => handleContact(service.title)}
                    className="bg-electricBlue hover:bg-navy text-white"
                  >
                    <MessageSquare className="w-4 h-4 mr-2" />
                    Discuss Project
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center">
          <h3 className="text-2xl font-bold text-navy mb-6">Ready to Start?</h3>
          <div className="flex justify-center gap-4">
            <Button
              onClick={() => handleContact("General")}
              className="bg-electricBlue hover:bg-navy text-white"
            >
              <Send className="w-4 h-4 mr-2" />
              WhatsApp
            </Button>
            <Button
              variant="outline"
              onClick={() => window.open("https://t.me/aniruddhakong", "_blank")}
              className="border-electricBlue text-electricBlue hover:bg-electricBlue hover:text-white"
            >
              <Send className="w-4 h-4 mr-2" />
              Telegram
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};
