import { ProjectCard } from '@/components/ui/project-card';
import { Button } from '@/components/ui/button';
import { Github } from 'lucide-react';
import project1 from '@/assets/project-1.jpg';
import project2 from '@/assets/project-2.jpg';
import project3 from '@/assets/project-3.jpg';

export const ProjectsSection = () => {
  const projects = [
    {
      title: "E-Commerce Dashboard",
      description: "A comprehensive admin dashboard for e-commerce platforms with real-time analytics, inventory management, and customer insights. Built with React, Node.js, and PostgreSQL.",
      image: project1,
      technologies: ["React", "Node.js", "PostgreSQL", "Chart.js", "Stripe"],
      liveUrl: "https://demo.com",
      githubUrl: "https://github.com"
    },
    {
      title: "Task Management App",
      description: "A collaborative project management tool with real-time updates, team collaboration features, and intuitive drag-and-drop interfaces. Includes mobile app version.",
      image: project2,
      technologies: ["Next.js", "TypeScript", "Supabase", "Framer Motion"],
      liveUrl: "https://demo.com",
      githubUrl: "https://github.com"
    },
    {
      title: "Social Media Platform",
      description: "A modern social networking application with real-time messaging, content sharing, and advanced privacy controls. Scalable architecture for growing user base.",
      image: project3,
      technologies: ["React Native", "Node.js", "MongoDB", "Socket.io", "AWS"],
      liveUrl: "https://demo.com",
      githubUrl: "https://github.com"
    }
  ];

  return (
    <section id="projects" className="py-20 relative">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <span className="inline-block px-4 py-2 rounded-full glass-card text-sm font-medium text-primary mb-4">
              Featured Projects
            </span>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              My <span className="text-gradient">Portfolio</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              A selection of projects that showcase my skills and passion for creating 
              innovative solutions that solve real-world problems.
            </p>
          </div>

          {/* Projects Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            {projects.map((project, index) => (
              <ProjectCard
                key={index}
                title={project.title}
                description={project.description}
                image={project.image}
                technologies={project.technologies}
                liveUrl={project.liveUrl}
                githubUrl={project.githubUrl}
                className="animate-fade-in"
                style={{
                  animationDelay: `${index * 0.2}s`
                } as React.CSSProperties}
              />
            ))}
          </div>

          {/* Call to Action */}
          <div className="text-center">
            <div className="glass-card p-8 max-w-2xl mx-auto">
              <h3 className="text-2xl font-semibold mb-4">Want to see more?</h3>
              <p className="text-muted-foreground mb-6">
                Check out my GitHub for more projects, open-source contributions, 
                and code samples that demonstrate my development skills.
              </p>
              <Button 
                className="bg-gradient-primary hover:glow-primary transition-all duration-300"
                asChild
              >
                <a href="https://github.com" target="_blank" rel="noopener noreferrer">
                  <Github className="w-4 h-4 mr-2" />
                  View All Projects
                </a>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};