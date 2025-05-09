
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/components/ui/use-toast";
import { Mail, Phone, MapPin, Send } from "lucide-react";

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulating form submission
    // In a real application, this would be an API call
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    toast({
      title: "Message sent!",
      description: "Thank you for reaching out. I'll get back to you soon.",
    });
    
    setFormData({
      name: "",
      email: "",
      subject: "",
      message: ""
    });
    
    setIsSubmitting(false);
  };

  return (
    <section id="contact" className="bg-navy py-20">
      <div className="section-container">
        <h2 className="section-title text-white">Contact Me</h2>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mt-12">
          {/* Contact Info */}
          <div>
            <h3 className="text-2xl font-bold text-lightestSlate mb-8">Let's Connect!</h3>
            <p className="text-slate max-w-md mb-10">
              Have a project in mind or just want to say hi? Feel free to reach out. I'm always open to discussing new projects, creative ideas, or opportunities to be part of your vision.
            </p>
            
            <div className="space-y-6">
              <div className="flex items-center">
                <div className="mr-4 p-3 rounded-full bg-accent/10 text-accent">
                  <Mail size={20} />
                </div>
                <div>
                  <div className="text-sm text-accent">Email</div>
                  <a href="mailto:hello@example.com" className="text-lightestSlate hover:text-accent transition-colors">hello@example.com</a>
                </div>
              </div>
              
              <div className="flex items-center">
                <div className="mr-4 p-3 rounded-full bg-accent/10 text-accent">
                  <Phone size={20} />
                </div>
                <div>
                  <div className="text-sm text-accent">Phone</div>
                  <a href="tel:+11234567890" className="text-lightestSlate hover:text-accent transition-colors">+1 (123) 456-7890</a>
                </div>
              </div>
              
              <div className="flex items-center">
                <div className="mr-4 p-3 rounded-full bg-accent/10 text-accent">
                  <MapPin size={20} />
                </div>
                <div>
                  <div className="text-sm text-accent">Location</div>
                  <span className="text-lightestSlate">San Francisco, CA</span>
                </div>
              </div>
            </div>
          </div>
          
          {/* Contact Form */}
          <div className="bg-lightNavy rounded-lg p-6">
            <h3 className="text-2xl font-bold text-lightestSlate mb-6">Send Me a Message</h3>
            
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <Input
                  type="text"
                  name="name"
                  placeholder="Your Name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="bg-navy border-lightestNavy text-lightSlate focus:border-accent"
                />
              </div>
              
              <div>
                <Input
                  type="email"
                  name="email"
                  placeholder="Your Email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="bg-navy border-lightestNavy text-lightSlate focus:border-accent"
                />
              </div>
              
              <div>
                <Input
                  type="text"
                  name="subject"
                  placeholder="Subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className="bg-navy border-lightestNavy text-lightSlate focus:border-accent"
                />
              </div>
              
              <div>
                <Textarea
                  name="message"
                  placeholder="Your Message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="bg-navy border-lightestNavy text-lightSlate focus:border-accent resize-none"
                />
              </div>
              
              <Button 
                type="submit" 
                disabled={isSubmitting}
                className="w-full bg-accent hover:bg-accent/90 text-navy font-medium"
              >
                {isSubmitting ? (
                  <span className="flex items-center">
                    <svg className="animate-spin -ml-1 mr-2 h-4 w-4" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    Sending...
                  </span>
                ) : (
                  <span className="flex items-center">
                    <Send className="mr-2 h-4 w-4" />
                    Send Message
                  </span>
                )}
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
