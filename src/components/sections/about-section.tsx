import { Button } from '@/components/ui/button';
import { Download, Coffee, Code, Lightbulb } from 'lucide-react';

export const AboutSection = () => {
  const stats = [
    { number: '3+', label: 'Years Experience', icon: Coffee },
    { number: '50+', label: 'Projects Completed', icon: Code },
    { number: '100+', label: 'Problems Solved', icon: Lightbulb },
  ];

  return (
    <section id="about" className="py-20 relative">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <span className="inline-block px-4 py-2 rounded-full glass-card text-sm font-medium text-primary mb-4">
              About Me
            </span>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Crafting Digital <span className="text-gradient">Experiences</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              I'm a passionate full-stack developer with a love for creating innovative solutions 
              that make a difference in people's lives.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Content */}
            <div className="space-y-6">
              <div className="glass-card p-8 hover-lift">
                <h3 className="text-2xl font-semibold mb-4">My Journey</h3>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  Started as a curious developer who fell in love with the endless possibilities 
                  of code. Over the years, I've evolved into a full-stack engineer who thrives 
                  on turning complex problems into elegant, user-friendly solutions.
                </p>
                <p className="text-muted-foreground leading-relaxed mb-6">
                  I believe in writing clean, maintainable code and staying up-to-date with 
                  the latest technologies and best practices in web development.
                </p>
                <Button className="bg-gradient-primary hover:glow-primary transition-all duration-300">
                  <Download className="w-4 h-4 mr-2" />
                  Download Resume
                </Button>
              </div>
            </div>

            {/* Stats */}
            <div className="space-y-6">
              {stats.map((stat, index) => (
                <div
                  key={index}
                  className="glass-card p-6 hover-lift flex items-center gap-4"
                >
                  <div className="w-12 h-12 rounded-lg bg-gradient-primary flex items-center justify-center">
                    <stat.icon className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <div className="text-3xl font-bold text-gradient">{stat.number}</div>
                    <div className="text-muted-foreground">{stat.label}</div>
                  </div>
                </div>
              ))}
              
              <div className="glass-card p-6 hover-lift">
                <h4 className="font-semibold mb-3">What I Do</h4>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>• Frontend Development with React, Next.js, Vue</li>
                  <li>• Backend Development with Node.js, Python, PHP</li>
                  <li>• Database Design & Optimization</li>
                  <li>• UI/UX Design & Prototyping</li>
                  <li>• DevOps & Cloud Infrastructure</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};