import { Button } from '@/components/ui/button';
import { Download, Coffee, Code, Lightbulb } from 'lucide-react';

export const AboutSection = () => {
  const stats = [
    { number: '1+', label: 'Years Experience', icon: Coffee },
    { number: '10+', label: 'Projects Completed', icon: Code },
    { number: '3.51', label: 'CGPA', icon: Lightbulb },
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
            <p className="text-xl text-white max-w-3xl mx-auto leading-relaxed">
              I'm an Information Systems graduate from Haramaya University with a passion for
              developing innovative web applications and contributing to dynamic teams.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Content */}
            <div className="space-y-6">
              <div className="glass-card p-8 hover-lift">
                <h3 className="text-2xl font-semibold mb-4">My Journey</h3>
                <p className="text-white leading-relaxed mb-4">
                  I graduated with a Bachelor of Science in Information Systems from Haramaya University
                  with a CGPA of 3.51/4.00. During my internship at the Ministry of Innovation and Technology,
                  I developed a record management system and gained valuable experience in web development.
                </p>
                <p className="text-white leading-relaxed mb-6">
                  I believe in writing clean, maintainable code and staying up-to-date with
                  the latest technologies and best practices in web development.
                </p>
              </div>
            </div>

            {/* Stats */}
            <div className="space-y-6">
              {stats.map((stat, index) => (
                <div
                  key={index}
                  className="glass-card p-6 hover-lift flex items-center gap-4"
                >
                  <stat.icon className="w-6 h-6 text-white" />
                  <div>
                    <div className="text-3xl font-bold text-gradient">{stat.number}</div>
                    <div className="text-white">{stat.label}</div>
                  </div>
                </div>
              ))}
              
              <div className="glass-card p-6 hover-lift">
                <h4 className="font-semibold mb-3">What I Do</h4>
                <ul className="space-y-2 text-sm text-white">
                  <li>• Full-Stack Web Development with React, Node.js, Express</li>
                  <li>• Backend Development with PHP (Laravel) and C#</li>
                  <li>• Database Management with MySQL, MongoDB, SQLite</li>
                  <li>• Real-time Applications with Socket.io and WebRTC</li>
                  <li>• Payment Integration and API Development</li>
                  <li>• Deployment and Hosting with Vercel, Netlify, Leapcell, Railway, and Render</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};