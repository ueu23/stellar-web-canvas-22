
import { projects } from "@/assets/data";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowUpRight, Github } from "lucide-react";

const Projects = () => {
  return (
    <section id="projects" className="bg-navy py-20">
      <div className="section-container">
        <h2 className="section-title text-white">Projects</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
          {projects.map((project) => (
            <Card key={project.id} className="bg-lightNavy border-none overflow-hidden group project-card hover:transform hover:-translate-y-2 transition-transform duration-300">
              <div className="relative h-48 overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-accent/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
              
              <CardContent className="p-5">
                <h3 className="text-xl font-bold text-lightestSlate mb-2">{project.title}</h3>
                <p className="text-slate mb-4 line-clamp-2">{project.description}</p>
                
                <div className="flex flex-wrap mb-4">
                  {project.tags.map((tag) => (
                    <span key={tag} className="skill-tag">{tag}</span>
                  ))}
                </div>
                
                <div className="flex space-x-4 mt-auto">
                  {project.codeUrl && (
                    <a href={project.codeUrl} target="_blank" rel="noopener noreferrer">
                      <Button variant="outline" size="sm" className="border-slate hover:border-accent text-slate hover:text-accent">
                        <Github className="mr-1 h-4 w-4" />
                        Code
                      </Button>
                    </a>
                  )}
                  
                  {project.liveUrl && (
                    <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                      <Button variant="outline" size="sm" className="border-slate hover:border-accent text-slate hover:text-accent">
                        <ArrowUpRight className="mr-1 h-4 w-4" />
                        Live
                      </Button>
                    </a>
                  )}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
