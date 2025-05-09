
import { skills } from "@/assets/data";
import { Progress } from "@/components/ui/progress";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";

const About = () => {
  return (
    <section id="about" className="bg-lightNavy py-20">
      <div className="section-container">
        <h2 className="section-title text-white">About Me</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12 mb-16">
          {/* Creators section */}
          <div className="flex flex-col items-center">
            <div className="relative mb-4">
              <div className="w-48 h-48 overflow-hidden rounded-lg">
                <img 
                  src="/lovable-uploads/8238e98f-6492-4cff-aba1-440fbcc9464d.png" 
                  alt="Srishti Goyal" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute inset-0 border-2 border-accent rounded-lg transform translate-x-4 translate-y-4 -z-10"></div>
            </div>
            <h3 className="text-xl font-bold text-white mt-4 mb-1">SRISHTI GOYAL</h3>
            <p className="text-lightSlate">Creator of this app</p>
          </div>
          
          <div className="flex flex-col items-center">
            <div className="relative mb-4">
              <div className="w-48 h-48 overflow-hidden rounded-lg">
                <img 
                  src="/lovable-uploads/6ad50058-b074-42a4-a6d0-a21dd9abf92a.png" 
                  alt="Punya Sharma" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute inset-0 border-2 border-accent rounded-lg transform translate-x-4 translate-y-4 -z-10"></div>
            </div>
            <h3 className="text-xl font-bold text-white mt-4 mb-1">PUNYA SHARMA</h3>
            <p className="text-lightSlate">Creator of this app</p>
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Photo */}
          <div className="md:col-span-1">
            <div className="relative">
              <div className="aspect-square overflow-hidden rounded-lg bg-accent/10">
                <img 
                  src="https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80" 
                  alt="Profile" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute inset-0 border-2 border-accent rounded-lg transform translate-x-4 translate-y-4 -z-10"></div>
            </div>
          </div>
          
          {/* Bio */}
          <div className="md:col-span-2">
            <div className="prose prose-lg max-w-none text-lightSlate mb-10">
              <p className="mb-4">
                Hello! I'm a passionate software developer with over 5 years of experience in creating websites and web applications.
                My journey in web development started back in college when I built my first website, and I've been hooked ever since.
              </p>
              <p className="mb-4">
                I specialize in JavaScript, with particular expertise in React and modern frontend technologies.
                I have experience working across the entire stack and believe in creating solutions that are not only technically sound
                but also provide exceptional user experiences.
              </p>
              <p>
                When I'm not coding, you can find me hiking in the mountains, experimenting with new cooking recipes, or reading about emerging technologies.
                I'm always looking for new challenges and opportunities to grow as a developer.
              </p>
            </div>
            
            <h3 className="text-2xl font-bold text-white mb-4">Technical Skills</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-4">
              {skills.map((skill) => (
                <div key={skill.name} className="mb-3">
                  <div className="flex justify-between mb-1">
                    <span className="text-lightestSlate">{skill.name}</span>
                    <span className="text-accent">{skill.level}%</span>
                  </div>
                  <Progress value={skill.level} className="h-2 bg-lightestNavy" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
