
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const Hero = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center bg-navy pt-16">
      <div className="section-container">
        <div className="max-w-3xl">
          <p className="text-accent mb-5 font-medium animate-fade-in-down opacity-0" style={{ animationDelay: "0.2s" }}>
            Hi, my name is
          </p>
          <h1 className="text-5xl sm:text-6xl md:text-7xl font-bold text-lightestSlate mb-4 animate-fade-in-down opacity-0" style={{ animationDelay: "0.4s" }}>
            SRISHTI GOYAL
          </h1>
          <h1 className="text-5xl sm:text-6xl md:text-7xl font-bold text-lightestSlate mb-6 animate-fade-in-down opacity-0" style={{ animationDelay: "0.6s" }}>
            PUNYA SHARMA
          </h1>
          <p className="text-lg text-slate max-w-xl mb-8 animate-fade-in-down opacity-0" style={{ animationDelay: "0.8s" }}>
            We're software developers specializing in building exceptional digital experiences. 
            Currently, we're focused on creating accessible, human-centered products.
          </p>
          <div className="animate-fade-in-down opacity-0" style={{ animationDelay: "1s" }}>
            <a href="#projects">
              <Button variant="outline" className="btn-primary group">
                View Our Work
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Button>
            </a>
          </div>
        </div>
      </div>
      
      {/* Background decoration */}
      <div className="absolute bottom-0 right-0 w-1/3 h-1/3 bg-accent/5 rounded-tl-[100px] -z-10"></div>
      <div className="absolute top-1/4 left-1/4 w-48 h-48 rounded-full bg-accent/5 -z-10"></div>
    </section>
  );
};

export default Hero;
