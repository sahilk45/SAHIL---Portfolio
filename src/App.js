import React, { useState, useEffect } from 'react';
import { Github, Linkedin, Mail, ExternalLink, Code, Database, Server, Smartphone, Award, BookOpen, User, Briefcase, MessageCircle, ChevronRight, Star, GitBranch, Trophy, Zap, Target, Globe, Heart, Menu, X, ChevronDown } from 'lucide-react';
import Footer from './components/Footer';
import Logo from './components/Logo';


const Portfolio = () => {
  const [activeSection, setActiveSection] = useState('home');
  const [isVisible, setIsVisible] = useState({});
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          setIsVisible(prev => ({
            ...prev,
            [entry.target.id]: entry.isIntersecting
          }));
          
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { threshold: 0.3 }
    );

    const sections = document.querySelectorAll('section[id]');
    sections.forEach((section) => observer.observe(section));

    return () => observer.disconnect();
  }, []);

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Thank you for your message! I\'ll get back to you soon.');
    setFormData({ name: '', email: '', message: '' });
  };

  const scrollToSection = (sectionId) => {
    document.getElementById(sectionId).scrollIntoView({ behavior: 'smooth' });
    setActiveSection(sectionId);
    setIsMenuOpen(false);
  };

  const projects = [
    {
      title: "Workout Generator",
      description: "AI-powered fitness app that creates personalized workout plans using Gemini API. Features progress tracking, exercise library, and beautiful animations.",
      tech: ["Next.js", "Firebase", "Gemini API", "Tailwind", "Framer Motion"],
      github: "https://github.com/sahilk45/WorkoutGenerator2",
      demo: "#",
      gradient: "from-purple-500 to-pink-500",
      thumbnail: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=400&h=250&fit=crop&crop=center"
    },
    {
      title: "Password Manager",
      description: "Secure password management solution with encrypted storage, intuitive UI, and seamless user experience for managing all your credentials.",
      tech: ["React.js", "MongoDB", "Express.js", "TailwindCSS"],
      github: "https://github.com/sahilk45/PassManager",
      demo: "#",
      gradient: "from-blue-500 to-cyan-500",
      thumbnail: "https://images.unsplash.com/photo-1555949963-aa79dcee981c?w=400&h=250&fit=crop&crop=center"
    },
    {
      title: "Your-Spotify",
      description: "Feature-rich Spotify clone with custom playlists, offline functionality, and responsive design. Perfect replica of the original interface.",
      tech: ["HTML", "CSS", "JavaScript", "Responsive Design"],
      github: "https://github.com/sahilk45/Your-Spotify",
      demo: "#",
      gradient: "from-green-500 to-emerald-500",
      thumbnail: "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=400&h=250&fit=crop&crop=center"
    }
  ];

  const skills = [
    { 
      name: "Frontend", 
      icon: Code, 
      items: ["React.js", "Next.js", "JavaScript", "HTML/CSS", "Tailwind"],
      color: "from-blue-500 to-purple-500"
    },
    { 
      name: "Backend", 
      icon: Server, 
      items: ["Node.js", "Express.js", "Firebase", "MongoDB"],
      color: "from-green-500 to-teal-500"
    },
    { 
      name: "Database", 
      icon: Database, 
      items: ["PostgreSQL", "MongoDB", "SQL", "PL/SQL"],
      color: "from-orange-500 to-red-500"
    },
    { 
      name: "Tools", 
      icon: Smartphone, 
      items: ["Git", "GitHub", "XAMPP", "VS Code"],
      color: "from-pink-500 to-rose-500"
    }
  ];

  const achievements = [
    { icon: Trophy, title: "Google Summer of Code 2025", desc: "Applied with proposal" },
    { icon: Star, title: "220+ GitHub Contributions", desc: "Active contributor" },
    { icon: Award, title: "Reliance Scholar", desc: "Academic excellence" },
    { icon: Target, title: "NDA exam twice & JEE Advanced 2023", desc: "Qualified exam" }
  ];

  const navItems = [
    { id: 'home', label: 'Home', icon: User },
    { id: 'about', label: 'About', icon: BookOpen },
    { id: 'projects', label: 'Projects', icon: Briefcase },
    { id: 'contact', label: 'Contact', icon: MessageCircle }
  ];

  return (
    <div className="min-h-screen bg-black text-white overflow-x-hidden">
      {/* Enhanced Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-black/90 backdrop-blur-xl border-b border-gray-800/50">
        <div className="container mx-auto px-6 py-4">
          <div className="flex justify-between items-center">
            <div className="flex items-center gap-3">
              <Logo />
              <h1 className="text-2xl font-bold bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 bg-clip-text text-transparent">
                Sahil Kumar
              </h1>
            </div>
            
            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`flex items-center gap-2 px-4 py-2 rounded-full transition-all duration-300 group ${
                    activeSection === item.id 
                      ? 'bg-purple-500/20 text-purple-400 border border-purple-500/30' 
                      : 'text-gray-300 hover:text-purple-400 hover:bg-purple-500/10'
                  }`}
                >
                  <item.icon className="w-4 h-4" />
                  <span className="font-medium">{item.label}</span>
                  {activeSection === item.id && (
                    <div className="w-2 h-2 bg-purple-400 rounded-full animate-pulse"></div>
                  )}
                </button>
              ))}
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden p-2 rounded-lg bg-gray-800/50 hover:bg-gray-700/50 transition-colors"
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

          {/* Mobile Navigation */}
          {isMenuOpen && (
            <div className="md:hidden mt-4 pb-4 border-t border-gray-800">
              <div className="flex flex-col space-y-2 pt-4">
                {navItems.map((item) => (
                  <button
                    key={item.id}
                    onClick={() => scrollToSection(item.id)}
                    className={`flex items-center gap-3 px-4 py-3 rounded-xl transition-all duration-300 text-left ${
                      activeSection === item.id 
                        ? 'bg-purple-500/20 text-purple-400 border border-purple-500/30' 
                        : 'text-gray-300 hover:text-purple-400 hover:bg-purple-500/10'
                    }`}
                  >
                    <item.icon className="w-5 h-5" />
                    <span className="font-medium">{item.label}</span>
                  </button>
                ))}
              </div>
            </div>
          )}
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-purple-900/20 via-black to-pink-900/20"></div>
        <div className="absolute inset-0">
          {[...Array(100)].map((_, i) => (
            <div
              key={i}
              className="absolute w-1 h-1 bg-white rounded-full animate-pulse"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 3}s`,
                animationDuration: `${2 + Math.random() * 2}s`
              }}
            />
          ))}
        </div>
        
        <div className="container mx-auto px-6 text-center relative z-10">
          <div className="space-y-8 animate-fade-in">
            <div className="relative">
              <h1 className="text-6xl md:text-8xl font-bold mb-6">
                <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 bg-clip-text text-transparent animate-pulse">
                  Hello, I'm
                </span>
                <br />
                <span className="bg-gradient-to-r from-white via-gray-100 to-gray-300 bg-clip-text text-transparent">
                  Sahil Kumar
                </span>
              </h1>
              <div className="absolute -top-4 -right-4 w-20 h-20 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full blur-xl opacity-30 animate-ping"></div>
            </div>
            
            <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
              Full-Stack Developer & Open Source Enthusiast crafting innovative digital experiences with cutting-edge technologies
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <button
                onClick={() => scrollToSection('projects')}
                className="group bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 px-8 py-4 rounded-full font-semibold transition-all duration-300 transform hover:scale-105 flex items-center gap-2 shadow-lg shadow-purple-500/25"
              >
                View My Work
                <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
              <button
                onClick={() => scrollToSection('contact')}
                className="px-8 py-4 border-2 border-purple-500 rounded-full font-semibold hover:bg-purple-500 hover:shadow-lg hover:shadow-purple-500/25 transition-all duration-300 transform hover:scale-105"
              >
                Get In Touch
              </button>
            </div>

            Scroll indicator
            <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
              <ChevronDown className="w-6 h-6 text-purple-400" />
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 relative">
        <div className="container mx-auto px-6">
          <div className={`transition-all duration-1000 ${isVisible.about ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
              About Me
            </h2>
            
            <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
              <div className="space-y-6">
                <div className="bg-gradient-to-r from-purple-500/10 to-pink-500/10 p-8 rounded-2xl border border-purple-500/20 backdrop-blur-sm hover:border-purple-500/40 transition-all duration-300">
                  <User className="w-8 h-8 text-purple-400 mb-4" />
                  <h3 className="text-2xl font-semibold mb-4">Who I Am</h3>
                  <p className="text-gray-300 leading-relaxed">
                    I'm a passionate IT Engineering student at UIET Chandigarh, Panjab University with a stellar 9.15 CGPA. 
                    My journey in technology spans from competitive programming to full-stack development, 
                    with a special focus on creating innovative solutions that make a difference.
                  </p>
                </div>
                
                <div className="bg-gradient-to-r from-blue-500/10 to-cyan-500/10 p-8 rounded-2xl border border-blue-500/20 backdrop-blur-sm hover:border-blue-500/40 transition-all duration-300">
                  <Zap className="w-8 h-8 text-blue-400 mb-4" />
                  <h3 className="text-2xl font-semibold mb-4">What Drives Me</h3>
                  <p className="text-gray-300 leading-relaxed">
                    Beyond coding, I'm an active open source contributor with 220+ GitHub contributions, 
                    a Google Summer of Code applicant, and someone who believes in the power of technology 
                    to solve real-world problems. I also enjoy video editing and badminton!
                  </p>
                </div>
              </div>
              
              {/* Skills Section */}
              <div className="space-y-6">
                <h3 className="text-2xl font-bold text-center mb-8 bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
                  Development Skills
                </h3>
                <div className="grid grid-cols-1 gap-4">
                  {skills.map((skill, index) => (
                    <div key={index} className="group">
                      <div className={`bg-gradient-to-r ${skill.color} p-[1px] rounded-xl`}>
                        <div className="bg-gray-900 p-6 rounded-xl hover:bg-gray-800 transition-all duration-300">
                          <div className="flex items-center gap-4 mb-4">
                            <div className={`w-12 h-12 bg-gradient-to-r ${skill.color} rounded-xl flex items-center justify-center`}>
                              <skill.icon className="w-6 h-6 text-white" />
                            </div>
                            <h4 className="text-xl font-semibold text-white">{skill.name}</h4>
                          </div>
                          <div className="flex flex-wrap gap-2">
                            {skill.items.map((item, i) => (
                              <span key={i} className={`px-3 py-1 bg-gradient-to-r ${skill.color} bg-opacity-20 text-white rounded-full text-sm border border-gray-600 hover:border-gray-400 transition-colors`}>
                                {item}
                              </span>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 relative">
        <div className="container mx-auto px-6">
          <div className={`transition-all duration-1000 ${isVisible.projects ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
              Featured Projects
            </h2>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {projects.map((project, index) => (
                <div key={index} className="group relative">
                  <div className="bg-gray-900/50 rounded-2xl overflow-hidden border border-gray-800 hover:border-purple-500/50 transition-all duration-500 transform hover:scale-105 hover:shadow-2xl hover:shadow-purple-500/20">
                    {/* Project Thumbnail */}
                    <div className="relative overflow-hidden h-48">
                      <img 
                        src={project.thumbnail} 
                        alt={project.title}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                      />
                      <div className={`absolute inset-0 bg-gradient-to-t ${project.gradient} opacity-80`}></div>
                      <div className="absolute top-4 right-4">
                        <div className={`w-12 h-12 rounded-xl bg-gradient-to-r ${project.gradient} flex items-center justify-center shadow-lg`}>
                          <Code className="w-6 h-6 text-white" />
                        </div>
                      </div>
                    </div>
                    
                    <div className="p-6">
                      <h3 className="text-xl font-bold mb-3 group-hover:text-purple-400 transition-colors">
                        {project.title}
                      </h3>
                      
                      <p className="text-gray-300 mb-4 leading-relaxed text-sm">
                        {project.description}
                      </p>
                      
                      <div className="flex flex-wrap gap-2 mb-4">
                        {project.tech.map((tech, i) => (
                          <span key={i} className="px-2 py-1 bg-purple-500/20 text-purple-300 rounded-md text-xs border border-purple-500/30">
                            {tech}
                          </span>
                        ))}
                      </div>
                      
                      <div className="flex gap-4">
                        <a href={project.github} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-gray-300 hover:text-white transition-colors text-sm">
                          <Github className="w-4 h-4" />
                          Code
                        </a>
                        <a href={project.demo} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-gray-300 hover:text-purple-400 transition-colors text-sm">
                          <ExternalLink className="w-4 h-4" />
                          Demo
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Achievements */}
            <div className="mt-16">
              <h3 className="text-2xl font-bold text-center mb-8 bg-gradient-to-r from-yellow-400 to-orange-400 bg-clip-text text-transparent">
                Key Achievements
              </h3>
              <div className="grid md:grid-cols-4 gap-4">
                {achievements.map((achievement, index) => (
                  <div key={index} className="bg-gradient-to-br from-gray-900 to-gray-800 p-4 rounded-xl border border-gray-700 hover:border-yellow-500/50 transition-all duration-300 group text-center">
                    <achievement.icon className="w-6 h-6 text-yellow-400 mx-auto mb-2 group-hover:scale-110 transition-transform" />
                    <h4 className="font-semibold mb-1 text-sm">{achievement.title}</h4>
                    <p className="text-xs text-gray-400">{achievement.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 relative">
        <div className="container mx-auto px-6">
          <div className={`transition-all duration-1000 ${isVisible.contact ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
              Let's Connect
            </h2>
            
            <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto">
              <div className="space-y-8">
                <div>
                  <h3 className="text-2xl font-semibold mb-6">Get In Touch</h3>
                  <p className="text-gray-300 leading-relaxed mb-8">
                    I'm always open to discussing new opportunities, collaborations, or just having a chat about technology. 
                    Feel free to reach out!
                  </p>
                </div>
                
                <div className="space-y-6">
                  <a href="mailto:suhagg72@gmail.com" className="flex items-center gap-4 text-gray-300 hover:text-purple-400 transition-colors group">
                    <div className="w-12 h-12 bg-purple-500/20 rounded-xl flex items-center justify-center group-hover:bg-purple-500/30 transition-colors">
                      <Mail className="w-6 h-6" />
                    </div>
                    <div>
                      <p className="font-semibold">Email</p>
                      <p className="text-sm text-gray-400">suhagg72@gmail.com</p>
                    </div>
                  </a>
                  
                  <a href="https://github.com/sahilk45" target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 text-gray-300 hover:text-purple-400 transition-colors group">
                    <div className="w-12 h-12 bg-purple-500/20 rounded-xl flex items-center justify-center group-hover:bg-purple-500/30 transition-colors">
                      <Github className="w-6 h-6" />
                    </div>
                    <div>
                      <p className="font-semibold">GitHub</p>
                      <p className="text-sm text-gray-400">@sahilk45</p>
                    </div>
                  </a>
                  
                  <a href="https://www.linkedin.com/in/sahilkumar111/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 text-gray-300 hover:text-purple-400 transition-colors group">
                    <div className="w-12 h-12 bg-purple-500/20 rounded-xl flex items-center justify-center group-hover:bg-purple-500/30 transition-colors">
                      <Linkedin className="w-6 h-6" />
                    </div>
                    <div>
                      <p className="font-semibold">LinkedIn</p>
                      <p className="text-sm text-gray-400">@sahilkumar111</p>
                    </div>
                  </a>
                </div>
              </div>
              
              <div className="space-y-6">
                <div>
                  <label className="block text-sm font-medium mb-2">Name</label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 bg-gray-900/50 border border-gray-700 rounded-xl focus:border-purple-500 focus:outline-none transition-colors"
                    placeholder="Your Name"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium mb-2">Email</label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 bg-gray-900/50 border border-gray-700 rounded-xl focus:border-purple-500 focus:outline-none transition-colors"
                    placeholder="your.email@example.com"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium mb-2">Message</label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    rows={6}
                    className="w-full px-4 py-3 bg-gray-900/50 border border-gray-700 rounded-xl focus:border-purple-500 focus:outline-none transition-colors resize-none"
                    placeholder="Tell me about your project or just say hello!"
                  />
                </div>
                
                <button
                  onClick={handleSubmit}
                  className="w-full bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 px-8 py-4 rounded-xl font-semibold transition-all duration-300 transform hover:scale-105 flex items-center justify-center gap-2 shadow-lg shadow-purple-500/25"
                >
                  Send Message
                  <MessageCircle className="w-5 h-5" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Portfolio;