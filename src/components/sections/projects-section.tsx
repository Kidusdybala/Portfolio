import { ProjectCard } from '@/components/ui/project-card';
import { Button } from '@/components/ui/button';
import { Github } from 'lucide-react';
import yegnaChat from '@/assets/yegna-chat-1.png';
import parkingSystem from '@/assets/parking-system.png';
import recordManagement from '@/assets/record-management.png';
import bettingImage from '@/assets/betting.png';
import loginImage from '@/assets/login.png';
import cityIssueTracker from '@/assets/city-issue-tracker.png';
import placeholder from '/placeholder.svg';

export const ProjectsSection = () => {
  const projects = [
    {
      title: "YegnaChat - Real-time Chatting Platform",
      description: "A comprehensive real-time messaging platform with video calling capabilities. Features secure JWT authentication, friend request system, real-time notifications, and news integration via News API. Deployed and accessible online.",
      image: yegnaChat,
      technologies: ["React", "Express", "MongoDB", "Node.js", "Socket.io", "WebRTC"],
      liveUrl: "https://comfy-tiramisu-59c6aa.netlify.app/",
      githubUrl: "https://github.com/Kidusdybala"
    },
    {
      title: "Parking Management System",
      description: "A complete parking management solution with real-time space availability, reservation system, and integrated payment processing. Includes a chatbot for user assistance and comprehensive admin dashboard.",
      image: parkingSystem,
      technologies: ["React", "Laravel", "SQLite", "JWT", "Chapa Payment"],
      liveUrl: "https://demo.com",
      githubUrl: "https://github.com/Kidusdybala"
    },
    {
      title: "Record Management System",
      description: "An enterprise-level document management system for government departments. Features secure user authentication, inter-departmental communication, and comprehensive record tracking with admin oversight.",
      image: recordManagement,
      technologies: ["React", "Laravel", "MySQL", "Email/SMS Auth"],
      liveUrl: "https://demo.com",
      githubUrl: "https://github.com/Kidusdybala"
    },
    {
      title: "Betting-Web - Ethiopian Football Betting Platform",
      description: "Real-time odds, secure payments, and live match betting with React & Node.js",
      image: bettingImage,
      technologies: ["React", "Node.js", "TypeScript"],
      liveUrl: "https://demo.com",
      githubUrl: "https://github.com/Kidusdybala"
    },
    {
      title: "Library Management System",
      description: "A comprehensive library management system built with TypeScript",
      image: loginImage,
      technologies: ["TypeScript"],
      liveUrl: "https://demo.com",
      githubUrl: "https://github.com/Kidusdybala"
    },
    {
      title: "City Issue Tracker",
      description: "A platform for citizens to report and track city issues with dashboards for officials and citizens. Features issue reporting, leaderboards, and real-time updates.",
      image: cityIssueTracker,
      technologies: ["React", "Node.js", "MongoDB", "Express"],
      liveUrl: "https://demo.com",
      githubUrl: "https://github.com/Kidusdybala"
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
            <p className="text-xl text-white max-w-3xl mx-auto leading-relaxed">
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
              <p className="text-white mb-6">
                Check out my GitHub for more projects, open-source contributions,
                and code samples that demonstrate my development skills.
              </p>
              <Button 
                className="bg-gradient-primary hover:glow-primary transition-all duration-300"
                asChild
              >
                <a href="https://github.com/Kidusdybala" target="_blank" rel="noopener noreferrer">
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