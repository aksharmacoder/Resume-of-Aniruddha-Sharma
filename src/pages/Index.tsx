import { Scene3D } from "@/components/Scene3D";
import { Books } from "@/components/Books";
import { ContactForm } from "@/components/ContactForm";
import { CustomCursor } from "@/components/CustomCursor";
import { Services } from "@/components/Services";
import { Education3D } from "@/components/Education3D";
import { Skills3D } from "@/components/Skills3D";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Leaf, Globe, Recycle, DollarSign, Handshake } from "lucide-react";

const Index = () => {
  return (
    <div className="min-h-screen cursor-none bg-gradient-to-b from-navy via-[#0A192F] to-[#0A1222]">
      <CustomCursor />
      
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 opacity-50">
          <Scene3D />
        </div>
        {/* Animated background elements */}
        <div className="absolute inset-0 z-0">
          <div className="absolute w-full h-full bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-electricBlue/20 via-transparent to-transparent animate-pulse"></div>
          <div className="absolute top-0 left-0 w-full h-full bg-[url('data:image/svg+xml,...')] opacity-5"></div>
        </div>
        <div className="container relative z-10 text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-electricBlue to-[#80E9FF] animate-pulse">
            Kongbrailatpam Aniruddha Sharma
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-gray-300">
            Where Law Meets Digital Innovation
          </p>
        </div>
      </section>
      
      {/* About Section */}
      <section className="py-16 relative overflow-hidden" id="about">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_30%,_var(--tw-gradient-stops))] from-electricBlue/5 to-transparent"></div>
        <div className="container relative z-10">
          <h2 className="text-4xl font-bold text-center mb-12 text-white">About Me</h2>
          <div className="max-w-3xl mx-auto">
            <p className="text-lg mb-6 text-gray-300">
              Since 2019, I've been transforming businesses through creative digital solutions while bringing a unique perspective shaped by my legal background and extensive technical training.
            </p>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="py-16 relative overflow-hidden" id="skills">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,_var(--tw-gradient-stops))] from-electricBlue/5 to-transparent"></div>
        <div className="container relative z-10">
          <h2 className="text-4xl font-bold text-center mb-12 text-white">Skills & Expertise</h2>
          <div className="relative mb-12">
            <Skills3D />
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {[
              "Python", "SQL", "Kali Linux", "Web Development", "Web3", "SEO",
              "Adobe", "Microsoft Office", "Cyber Security", "Account Management",
              "Legal Drafting", "Content Creation", "Writing", "Graphic Design",
              "Audio Remixing", "Video Editing", "Content Management",
              "Website Design", "Google Adsense", "Google Ads", "Google Console",
              "Bing Webmaster", "Canva", "Social Media Management"
            ].map((skill) => (
              <div
                key={skill}
                className="p-4 bg-navy/30 backdrop-blur-sm rounded-lg border border-electricBlue/20 
                          hover:border-electricBlue/50 transition-all duration-300 
                          hover:transform hover:scale-105 text-center"
              >
                <span className="text-electricBlue font-medium">{skill}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Education Section */}
      <section className="py-16 relative overflow-hidden" id="education">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_70%,_var(--tw-gradient-stops))] from-electricBlue/5 to-transparent"></div>
        <div className="container relative z-10">
          <h2 className="text-4xl font-bold text-center mb-12 text-white">Education</h2>
          <div className="relative mb-12">
            <Education3D />
          </div>
          <div className="space-y-8 max-w-3xl mx-auto">
            <div className="bg-navy/30 backdrop-blur-sm rounded-lg p-6 border border-electricBlue/20 
                          hover:border-electricBlue/50 transition-all duration-300">
              <h3 className="text-2xl font-bold text-electricBlue mb-2">Manipur University</h3>
              <p className="text-white mb-1">BALLB - Law graduation with honors in cyber law and business law</p>
              <p className="text-gray-400">2020</p>
            </div>
            
            <div className="bg-navy/30 backdrop-blur-sm rounded-lg p-6 border border-electricBlue/20 
                          hover:border-electricBlue/50 transition-all duration-300">
              <h3 className="text-2xl font-bold text-electricBlue mb-2">KC Das Commerce College</h3>
              <p className="text-white mb-1">Higher Secondary with Commerce Stream</p>
              <p className="text-gray-400">2015</p>
            </div>
            
            <div className="bg-navy/30 backdrop-blur-sm rounded-lg p-6 border border-electricBlue/20 
                          hover:border-electricBlue/50 transition-all duration-300">
              <h3 className="text-2xl font-bold text-electricBlue mb-2">Jawahar Navodaya Vidyalaya</h3>
              <p className="text-white mb-1">Secondary with Science</p>
              <p className="text-gray-400">2013</p>
            </div>
          </div>
        </div>
      </section>
      
      {/* Services Section */}
      <Services />
      
      {/* Books Section */}
      <Books />

      {/* Project G2G Section */}
      <section className="py-16 relative overflow-hidden" id="project-g2g">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,_var(--tw-gradient-stops))] from-electricBlue/5 to-transparent"></div>
        <div className="container relative z-10">
          <div className="text-center mb-12">
            <Badge variant="secondary" className="mb-4">Featured Project</Badge>
            <h2 className="text-4xl font-bold text-white mb-4">Project G2G (Garbage to Gold)</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
              A sustainable initiative transforming electronic waste into valuable resources through innovative recycling solutions.
            </p>
            <Button
              onClick={() => window.open("https://www.youtube.com/watch?v=6HG1maentHw&t=6s", "_blank")}
              className="bg-electricBlue hover:bg-white hover:text-navy text-white mb-12"
            >
              Watch Project Video
            </Button>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            <Card className="bg-navy/30 backdrop-blur-sm border border-electricBlue/20 hover:border-electricBlue/50 transition-all duration-300">
              <CardHeader>
                <div className="flex items-center gap-4">
                  <Leaf className="w-8 h-8 text-electricBlue" />
                  <CardTitle className="text-white">Sustainability</CardTitle>
                </div>
                <CardDescription className="text-gray-400">
                  Eco-friendly e-waste management solutions
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="bg-navy/30 backdrop-blur-sm border border-electricBlue/20 hover:border-electricBlue/50 transition-all duration-300">
              <CardHeader>
                <div className="flex items-center gap-4">
                  <Globe className="w-8 h-8 text-electricBlue" />
                  <CardTitle className="text-white">Global Impact</CardTitle>
                </div>
                <CardDescription className="text-gray-400">
                  Addressing worldwide e-waste challenges
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="bg-navy/30 backdrop-blur-sm border border-electricBlue/20 hover:border-electricBlue/50 transition-all duration-300">
              <CardHeader>
                <div className="flex items-center gap-4">
                  <Recycle className="w-8 h-8 text-electricBlue" />
                  <CardTitle className="text-white">Innovation</CardTitle>
                </div>
                <CardDescription className="text-gray-400">
                  Advanced recycling technologies
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="bg-navy/30 backdrop-blur-sm border border-electricBlue/20 hover:border-electricBlue/50 transition-all duration-300">
              <CardHeader>
                <div className="flex items-center gap-4">
                  <DollarSign className="w-8 h-8 text-electricBlue" />
                  <CardTitle className="text-white">Value Creation</CardTitle>
                </div>
                <CardDescription className="text-gray-400">
                  Transforming waste into resources
                </CardDescription>
              </CardHeader>
            </Card>
          </div>

          <div className="bg-navy/30 backdrop-blur-sm rounded-xl border border-electricBlue/20 p-8 text-center">
            <Handshake className="w-12 h-12 text-electricBlue mx-auto mb-4" />
            <h3 className="text-2xl font-bold text-white mb-4">Partner With Us</h3>
            <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
              We're seeking partnerships and investment opportunities to scale our e-waste management solutions. 
              Join us in creating a sustainable future while generating value from electronic waste.
            </p>
            <div className="flex justify-center gap-4">
              <Button
                onClick={() => window.open("https://wa.me/message/7N3NAWA2QFDOC1", "_blank")}
                className="bg-electricBlue hover:bg-white hover:text-navy text-white"
              >
                Discuss Partnership
              </Button>
              <Button
                variant="outline"
                onClick={() => window.open("https://www.youtube.com/watch?v=6HG1maentHw&t=6s", "_blank")}
                className="border-electricBlue text-electricBlue hover:bg-electricBlue hover:text-white"
              >
                Learn More
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <ContactForm />

      {/* Contact Section */}
      <section className="py-16 relative overflow-hidden" id="contact">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,_var(--tw-gradient-stops))] from-electricBlue/5 to-transparent"></div>
        <div className="container relative z-10 text-center">
          <h2 className="text-4xl font-bold mb-8 text-white">Let's Connect</h2>
          <p className="text-xl mb-8 text-gray-300">
            Ready to bring your digital vision to life with the precision of legal expertise and the power of technical innovation?
          </p>
          <a 
            href="https://wa.me/message/7N3NAWA2QFDOC1" 
            className="inline-block bg-electricBlue text-white px-8 py-3 rounded-lg text-lg font-semibold hover:bg-white hover:text-navy transition-colors duration-300 shadow-[0_0_15px_rgba(0,163,255,0.5)] hover:shadow-[0_0_25px_rgba(0,163,255,0.8)]"
          >
            Get In Touch
          </a>
        </div>
      </section>
    </div>
  );
};

export default Index;
