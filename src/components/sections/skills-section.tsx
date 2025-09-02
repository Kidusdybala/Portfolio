import { SkillCard } from '@/components/ui/skill-card';
import {
  SiReact,
  SiJavascript,
  SiHtml5,
  SiNodedotjs,
  SiLaravel,
  SiSharp,
  SiMongodb,
  SiMysql,
  SiSqlite,
  SiGit,
  SiGithub
} from 'react-icons/si';
import { FaMicrosoft } from 'react-icons/fa';


export const SkillsSection = () => {
  const skillCategories = [
    {
      title: "Frontend Development",
      skills: [
        {
          title: "React",
          description: "Building dynamic, responsive web applications with modern React patterns and component-based architecture.",
          icon: <SiReact className="w-8 h-8 text-blue-500" />,
          level: 85
        },
        {
          title: "JavaScript",
          description: "Writing efficient, interactive web applications with ES6+ features and modern JavaScript practices.",
          icon: <SiJavascript className="w-8 h-8 text-yellow-500" />,
          level: 90
        },
        {
          title: "HTML & CSS",
          description: "Creating semantic, accessible web pages with modern CSS techniques and responsive design.",
          icon: <SiHtml5 className="w-8 h-8 text-orange-500" />,
          level: 95
        },
        {
          title: "Tailwind CSS",
          description: "Utility-first CSS framework for rapidly building custom user interfaces with responsive design.",
          icon: <div className="w-8 h-8 bg-cyan-500 rounded-lg flex items-center justify-center text-white font-bold text-sm">TW</div>,
          level: 90
        }
      ]
    },
    {
      title: "Backend Development",
      skills: [
        {
          title: "Node.js & Express",
          description: "Building robust REST APIs and server-side applications with Node.js and Express framework.",
          icon: <SiNodedotjs className="w-8 h-8 text-green-600" />,
          level: 80
        },
        {
          title: "PHP (Laravel)",
          description: "Developing web applications with Laravel framework, implementing MVC patterns and database operations.",
          icon: <SiLaravel className="w-8 h-8 text-red-500" />,
          level: 85
        },
        {
          title: "C#",
          description: "Building applications with C# programming language and .NET framework.",
          icon: <SiSharp className="w-8 h-8 text-purple-600" />,
          level: 75
        }
      ]
    },
    {
      title: "Databases & Tools",
      skills: [
        {
          title: "MySQL",
          description: "Relational database management with MySQL for data storage, querying, and optimization.",
          icon: <SiMysql className="w-8 h-8 text-blue-600" />,
          level: 85
        },
        {
          title: "MongoDB",
          description: "NoSQL database management with MongoDB for flexible data storage and querying.",
          icon: <SiMongodb className="w-8 h-8 text-green-600" />,
          level: 85
        },
        {
          title: "SQLite",
          description: "Lightweight relational database with SQLite for embedded applications and local storage.",
          icon: <SiSqlite className="w-8 h-8 text-blue-500" />,
          level: 80
        },
        {
          title: "Git",
          description: "Version control system for tracking changes in source code during software development.",
          icon: <SiGit className="w-8 h-8 text-orange-600" />,
          level: 90
        },
        {
          title: "GitHub",
          description: "Platform for hosting and collaborating on Git repositories with project management tools.",
          icon: <SiGithub className="w-8 h-8 text-gray-800" />,
          level: 90
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
            <p className="text-xl text-white max-w-3xl mx-auto leading-relaxed">
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