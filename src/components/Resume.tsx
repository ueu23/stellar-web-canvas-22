
import { experience, education } from "@/assets/data";
import { Button } from "@/components/ui/button";
import { FileText } from "lucide-react";
import { Separator } from "@/components/ui/separator";

const Resume = () => {
  return (
    <section id="resume" className="bg-lightestNavy py-20">
      <div className="section-container">
        <div className="flex justify-between items-center mb-12">
          <h2 className="section-title text-white">Resume</h2>
          <a href="/resume.pdf" target="_blank" rel="noopener noreferrer">
            <Button variant="outline" className="btn-primary">
              <FileText className="mr-2 h-4 w-4" />
              Download CV
            </Button>
          </a>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Work Experience */}
          <div>
            <h3 className="text-2xl font-bold text-white mb-6">Work Experience</h3>
            <div className="space-y-8">
              {experience.map((job, index) => (
                <div key={index} className="relative pl-8 border-l-2 border-accent/30 hover:border-accent transition-colors duration-300">
                  <div className="absolute -left-[9px] top-0 w-4 h-4 bg-lightestNavy border-2 border-accent rounded-full"></div>
                  <div className="mb-1 text-lightestSlate font-medium">{job.from} - {job.to}</div>
                  <h4 className="text-xl font-bold text-white mb-1">{job.position}</h4>
                  <div className="text-accent mb-3">{job.company}</div>
                  <ul className="space-y-2">
                    {job.description.map((item, i) => (
                      <li key={i} className="text-slate before:content-['▹'] before:text-accent before:mr-2">
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
          
          {/* Education */}
          <div>
            <h3 className="text-2xl font-bold text-white mb-6">Education</h3>
            <div className="space-y-8">
              {education.map((edu, index) => (
                <div key={index} className="relative pl-8 border-l-2 border-accent/30 hover:border-accent transition-colors duration-300">
                  <div className="absolute -left-[9px] top-0 w-4 h-4 bg-lightestNavy border-2 border-accent rounded-full"></div>
                  <div className="mb-1 text-lightestSlate font-medium">{edu.from} - {edu.to}</div>
                  <h4 className="text-xl font-bold text-white mb-1">{edu.degree}</h4>
                  <div className="text-accent mb-1">{edu.school}</div>
                  <div className="text-slate">{edu.field}</div>
                </div>
              ))}
            </div>
            
            <div className="mt-12">
              <h3 className="text-2xl font-bold text-white mb-6">Certifications</h3>
              <div className="space-y-4">
                <div className="bg-lightNavy p-4 rounded-lg">
                  <div className="text-white font-medium">AWS Certified Developer</div>
                  <div className="text-slate text-sm">Amazon Web Services • 2022</div>
                </div>
                <div className="bg-lightNavy p-4 rounded-lg">
                  <div className="text-white font-medium">Professional Scrum Master I</div>
                  <div className="text-slate text-sm">Scrum.org • 2021</div>
                </div>
                <div className="bg-lightNavy p-4 rounded-lg">
                  <div className="text-white font-medium">Google UX Design Certificate</div>
                  <div className="text-slate text-sm">Google • 2020</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Resume;
