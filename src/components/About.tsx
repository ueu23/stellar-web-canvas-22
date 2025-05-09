
import { skills } from "@/assets/data";
import { Progress } from "@/components/ui/progress";

const About = () => {
  return (
    <section id="about" className="bg-lightNavy py-20">
      <div className="section-container">
        <h2 className="section-title text-white">About Me</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
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
                  <Progress value={skill.level} className="h-2 bg-lightestNavy" indicatorClassName="bg-accent" />
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
