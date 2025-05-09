
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
          <div className="flex flex-col">
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
            <p className="text-lightSlate mb-4">Creator of this app</p>
            <div className="prose prose-lg max-w-none text-lightSlate">
              <p>
                Hello! Srishti is a passionate software developer with over 5 years of experience in creating websites and web applications.
                Her journey in web development started back in college when she built her first website, and she's been hooked ever since.
              </p>
              <p className="mt-2">
                Srishti specializes in JavaScript, with particular expertise in React and modern frontend technologies.
                She believes in creating solutions that are not only technically sound but also provide exceptional user experiences.
              </p>
            </div>
          </div>
          
          <div className="flex flex-col">
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
            <p className="text-lightSlate mb-4">Creator of this app</p>
            <div className="prose prose-lg max-w-none text-lightSlate">
              <p>
                When not coding, Punya can be found hiking in the mountains, experimenting with new cooking recipes, 
                or reading about emerging technologies. He's always looking for new challenges and opportunities to grow as a developer.
              </p>
              <p className="mt-2">
                With experience working across the entire stack, Punya has a keen eye for creating balanced and responsive designs
                that work seamlessly across all devices while maintaining excellent performance.
              </p>
            </div>
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Technical Skills */}
          <div className="md:col-span-3">
            <h3 className="text-2xl font-bold text-white mb-6">Technical Skills</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-x-8 gap-y-4">
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
