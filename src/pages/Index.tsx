import { Scene3D } from "@/components/Scene3D";
import { Books } from "@/components/Books";
import { ContactForm } from "@/components/ContactForm";
import { CustomCursor } from "@/components/CustomCursor";
import { Services } from "@/components/Services";

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
      
      {/* Services Section */}
      <Services />
      
      {/* Expertise Section */}
      <section className="py-16 relative overflow-hidden" id="expertise">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_70%,_var(--tw-gradient-stops))] from-electricBlue/5 to-transparent"></div>
        <div className="container relative z-10">
          <h2 className="text-4xl font-bold text-center mb-12 text-white">Professional Expertise</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                title: "Web Development & Design",
                description: "Creating responsive, secure websites that meet both legal compliance and user experience requirements."
              },
              {
                title: "Content Creation & Strategy",
                description: "Developing content that combines technical accuracy with engaging storytelling."
              },
              {
                title: "Digital Security & Compliance",
                description: "Implementing robust digital solutions with a strong focus on cybersecurity and data protection."
              },
              {
                title: "Technical Innovation",
                description: "Leveraging AI and blockchain technologies to create cutting-edge digital solutions."
              }
            ].map((service) => (
              <div key={service.title} className="p-6 bg-navy/50 backdrop-blur-sm rounded-lg shadow-lg border border-electricBlue/20 hover:border-electricBlue/50 transition-all duration-300 hover:transform hover:scale-105">
                <h3 className="text-xl font-bold mb-4 text-electricBlue">{service.title}</h3>
                <p className="text-gray-300">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Books Section */}
      <Books />

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
