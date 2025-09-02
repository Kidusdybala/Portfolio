import { SkillCard } from '@/components/ui/skill-card';
import { 
  Code, 
  Database, 
  Palette, 
  Server, 
  Smartphone, 
  Cloud,
  GitBranch,
  Zap
} from 'lucide-react';

export const SkillsSection = () => {
  const skillCategories = [
    {
      title: "Frontend Development",
      skills: [
        {
          title: "React & Next.js",
          description: "Building dynamic, responsive web applications with modern React patterns and Next.js for production-ready apps.",
          icon: <Code className="w-6 h-6" />,
          level: 95
        },
        {
          title: "TypeScript",
          description: "Writing type-safe, scalable applications with advanced TypeScript features and best practices.",
          icon: <Zap className="w-6 h-6" />,
          level: 90
        },
        {
          title: "UI/UX Design",
          description: "Creating beautiful, intuitive user interfaces with modern design principles and accessibility in mind.",
          icon: <Palette className="w-6 h-6" />,
          level: 85
        }
      ]
    },
    {
      title: "Backend Development",
      skills: [
        {
          title: "Node.js & Express",
          description: "Building robust REST APIs and microservices with Node.js, Express, and modern backend patterns.",
          icon: <Server className="w-6 h-6" />,
          level: 92
        },
        {
          title: "Database Design",
          description: "Designing efficient database schemas with PostgreSQL, MongoDB, and implementing complex queries.",
          icon: <Database className="w-6 h-6" />,
          level: 88
        },
        {
          title: "Cloud & DevOps",
          description: "Deploying and managing applications on AWS, Docker containers, and CI/CD pipelines.",
          icon: <Cloud className="w-6 h-6" />,
          level: 80
        }
      ]
    },
    {
      title: "Tools & Others",
      skills: [
        {
          title: "Mobile Development",
          description: "Cross-platform mobile apps with React Native and Progressive Web Apps for mobile-first experiences.",
          icon: <Smartphone className="w-6 h-6" />,
          level: 75
        },
        {
          title: "Version Control",
          description: "Advanced Git workflows, code collaboration, and project management with modern development practices.",
          icon: <GitBranch className="w-6 h-6" />,
          level: 95
        }
      ]
    }
  ];

  return (
    <section id="skills" className="py-20 relative">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <span className="inline-block px-4 py-2 rounded-full glass-card text-sm font-medium text-primary mb-4">
              Skills & Expertise
            </span>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Technical <span className="text-gradient">Arsenal</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              A comprehensive toolkit built through years of hands-on experience 
              and continuous learning in the ever-evolving tech landscape.
            </p>
          </div>

          {/* Skills Grid */}
          <div className="space-y-12">
            {skillCategories.map((category, categoryIndex) => (
              <div key={categoryIndex}>
                <h3 className="text-2xl font-semibold mb-8 text-center text-gradient">
                  {category.title}
                </h3>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {category.skills.map((skill, skillIndex) => (
                    <SkillCard
                      key={skillIndex}
                      title={skill.title}
                      description={skill.description}
                      icon={skill.icon}
                      level={skill.level}
                      className="animate-fade-in"
                      style={{
                        animationDelay: `${(categoryIndex * 3 + skillIndex) * 0.1}s`
                      } as React.CSSProperties}
                    />
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};