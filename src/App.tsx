import { ArrowRight, Github, Linkedin, Mail, Code2, Palette, Users, Sparkles } from 'lucide-react';
import { useEffect, useState } from 'react';

function App() {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToProjects = () => {
    document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' });
  };

  const scrollToContact = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  const projects = [
  {
    title: 'Pravah Drishti',
    subtitle: 'AI-Powered Crowd Flow & Safety Platform',
    description:
      'Engineered a real-time crowd forecasting and safety platform using FastAPI, Prophet, and Leaflet.js for congestion prediction. Designed interactive dashboards for live crowd heatmaps and safe route generation, integrating predictive ML outputs with geospatial visualization.',
    gradient: 'from-purple-600 to-blue-600',
  },
  {
    title: 'MindMitra',
    subtitle: 'AI-Based Mental Health Support Platform',
    description:
      'Built an empathetic AI chatbot leveraging Google Gemini 2.0 Flash for mental wellness conversations. Designed a minimal and accessible UI using Tailwind CSS and Figma, integrated Firebase Authentication for secure sessions, and implemented real-time interaction via FastAPI.',
    gradient: 'from-purple-600 to-pink-600',
  },
  {
    title: 'Smart Restaurant Explorer',
    subtitle: 'Predictive Restaurant Discovery',
    description:
      'Developed an ML-powered web app predicting restaurant ratings and preferences using XGBoost. Visualized data using Folium and Streamlit, and enhanced UX through dynamic charts, filters, and personalized recommendations for food discovery.',
    gradient: 'from-purple-600 to-indigo-600',
  },
  {
    title: 'Sales Forecasting Dashboard',
    subtitle: 'Time-Series Analytics with LSTM',
    description:
      'Built an LSTM-based neural network for forecasting sales trends from sequential data. Designed intuitive dashboards for trend visualization and evaluation metrics using TensorFlow and Matplotlib, enabling better business decision-making.',
    gradient: 'from-purple-600 to-violet-600',
  },
];


  const skills = {
  languages: ['Python', 'C++', 'SQL'],
  frameworks: ['TensorFlow', 'PyTorch', 'Scikit-learn', 'Pandas', 'NumPy'],
  webDevelopment: ['HTML5', 'CSS3', 'JavaScript', 'Tailwind CSS', 'React (Vite)', 'FastAPI'],
  databasesAndCloud: ['Firebase', 'MySQL', 'MongoDB', 'AWS', 'Google Cloud Platform'],
  dataVisualization: ['Power BI', 'Matplotlib', 'Seaborn'],
  softSkills: [
    'Design Thinking',
    'Analytical Problem Solving',
    'Cross-functional Collaboration',
    'Communication'
  ]
};

  const experiences = [
    {
      company: 'Cognifyz Technologies',
      role: 'Machine Learning Intern',
      period: 'June 2025 – July 2025',
      description: 'Focused on designing intuitive data exploration dashboards.'
    },
    {
      company: 'Edunet Foundation (Microsoft + AICTE)',
      role: 'AI + Cloud Intern',
      period: 'May 2025 – June 2025',
      description: 'Collaborated in designing cloud-based predictive interfaces.'
    }
  ];

  const certificates = [
    'Google UX Design (in progress)',
    'AWS Cloud Foundations',
    'Python Essentials'
  ];

  return (
    <div className="min-h-screen bg-black text-gray-200 font-['Inter']">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Animated gradient background */}
        <div
          className="absolute inset-0 opacity-30"
          style={{
            background: `radial-gradient(circle at ${50 + scrollY * 0.05}% ${50 + scrollY * 0.03}%, #8A2BE2 0%, transparent 70%)`,
            transform: `translateY(${scrollY * 0.5}px)`
          }}
        />

        {/* Grid pattern overlay */}
        <div className="absolute inset-0 opacity-10" style={{
          backgroundImage: 'linear-gradient(#8A2BE2 1px, transparent 1px), linear-gradient(90deg, #8A2BE2 1px, transparent 1px)',
          backgroundSize: '50px 50px'
        }} />

        <div className="relative z-10 text-center px-6 max-w-5xl mx-auto">
          <div className="mb-6 inline-block">
            <Sparkles className="w-12 h-12 text-purple-500 animate-pulse" />
          </div>
          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-white via-purple-200 to-purple-400 bg-clip-text text-transparent">
            Hi, I'm Anuj Singh Thakur 🙋🏻‍♂️
          </h1>
          <p className="text-xl md:text-3xl font-semibold text-purple-400 mb-4">
            A Developer & Designer who builds AI-powered, user-centric products.
          </p>
          <p className="text-lg md:text-xl text-gray-400 mb-12 max-w-3xl mx-auto">
            I craft intelligent, human-centered digital experiences by combining Machine Learning, Cloud Technologies, and Design Thinking.
          </p>
          <button
            onClick={scrollToProjects}
            className="group bg-purple-600 hover:bg-purple-700 text-white px-8 py-4 rounded-full text-lg font-semibold transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:shadow-purple-500/50 inline-flex items-center gap-2"
          >
            View My Work
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </button>
        </div>
      </section>

      {/* About Section */}
      <section className="py-24 px-6 max-w-6xl mx-auto">
        <div className="bg-gradient-to-br from-purple-900/20 to-black border border-purple-500/20 rounded-3xl p-8 md:p-12 backdrop-blur-sm">
          <h2 className="text-4xl md:text-5xl font-bold mb-8 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
            About Me
          </h2>
          <div className="space-y-6 text-gray-300 text-lg leading-relaxed">
            <p>
              I’m a Computer Science undergraduate student with specialization <span className="text-purple-400 font-semibold">Artificial Intelligence and Machine Learing</span>(B.Tech 2026) from 
              Gyan Ganga Institute of Technology and Sciences, Jabalpur, passionate about designing and developing AI-driven, scalable, and human-friendly products.
            </p>
            <p>
              My journey started with code, but evolved into creating technology that feels intuitive and empathetic for real users. 
              I love connecting the dots between <span className="text-purple-400 font-semibold">data science, user experience,</span> and <span className="text-purple-400 font-semibold">intelligent automation</span> 
              to solve complex, real-world problems.
            </p>
            <p>
              I’ve built projects that merge <span className="text-purple-400 font-semibold">AI models, predictive analytics, and modern web interfaces</span>, 
              always guided by usability and impact.
            </p>
            <p>Core Interests:<br></br><br></br><span className="text-purple-400 font-semibold">
                AI & Machine Learning<br></br>
                Product Design & Frontend Engineering<br></br>
                Cloud & Edge Deployment<br></br>
                Human–Computer Interaction<br></br>
                Predictive Analytics</span>
            </p>
            <p>Personal Values:<br></br><br></br><span className="text-purple-400 font-semibold">
                Empathy</span> • <span className="text-purple-400 font-semibold">Innovation</span> • <span className="text-purple-400 font-semibold">Clarity</span> • <span className="text-purple-400 font-semibold">Collaboration</span> • <span className="text-purple-400 font-semibold">Continuous Learning</span>
            </p>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-24 px-6 max-w-7xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold mb-16 text-center bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
          Featured Projects
        </h2>
        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="group relative bg-gradient-to-br from-gray-900 to-black border border-purple-500/20 rounded-2xl p-8 overflow-hidden transition-all duration-500 hover:border-purple-500/50 hover:shadow-2xl hover:shadow-purple-500/20 hover:-translate-y-2"
            >
              {/* Gradient overlay on hover */}
              <div className={`absolute inset-0 bg-gradient-to-br ${project.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-500`} />

              <div className="relative z-10">
                <div className="mb-4">
                  <Code2 className="w-8 h-8 text-purple-500 group-hover:scale-110 transition-transform duration-300" />
                </div>
                <h3 className="text-2xl font-bold mb-2 text-white group-hover:text-purple-300 transition-colors">
                  {project.title}
                </h3>
                <p className="text-purple-400 text-sm font-semibold mb-4">
                  {project.subtitle}
                </p>
                <p className="text-gray-400 leading-relaxed">
                  {project.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Skills Section */}
      <section className="py-24 px-6 max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold mb-16 text-center bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
            Skills & Tools
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Design Tools */}
            <div className="bg-gradient-to-br from-purple-900/20 to-black border border-purple-500/20 rounded-2xl p-8 backdrop-blur-sm hover:border-purple-500/50 transition-all duration-300">
              <Palette className="w-10 h-10 text-purple-500 mb-4" />
              <h3 className="text-xl font-bold mb-4 text-purple-300">Design Tools</h3>
              <div className="flex flex-wrap gap-2">
                {skills.design.map((skill, index) => (
                  <span key={index} className="px-3 py-1 bg-purple-500/20 text-purple-300 rounded-full text-sm">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
        
            {/* Languages */}
            <div className="bg-gradient-to-br from-purple-900/20 to-black border border-purple-500/20 rounded-2xl p-8 backdrop-blur-sm hover:border-purple-500/50 transition-all duration-300">
              <Code2 className="w-10 h-10 text-purple-500 mb-4" />
              <h3 className="text-xl font-bold mb-4 text-purple-300">Languages</h3>
              <div className="flex flex-wrap gap-2">
                {skills.languages.map((skill, index) => (
                  <span key={index} className="px-3 py-1 bg-purple-500/20 text-purple-300 rounded-full text-sm">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
        
            {/* Frameworks */}
            <div className="bg-gradient-to-br from-purple-900/20 to-black border border-purple-500/20 rounded-2xl p-8 backdrop-blur-sm hover:border-purple-500/50 transition-all duration-300">
              <Users className="w-10 h-10 text-purple-500 mb-4" />
              <h3 className="text-xl font-bold mb-4 text-purple-300">Frameworks</h3>
              <div className="flex flex-wrap gap-2">
                {skills.frameworks.map((skill, index) => (
                  <span key={index} className="px-3 py-1 bg-purple-500/20 text-purple-300 rounded-full text-sm">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
        
            {/* Web Development */}
            <div className="bg-gradient-to-br from-purple-900/20 to-black border border-purple-500/20 rounded-2xl p-8 backdrop-blur-sm hover:border-purple-500/50 transition-all duration-300">
              <Code2 className="w-10 h-10 text-purple-500 mb-4" />
              <h3 className="text-xl font-bold mb-4 text-purple-300">Web Development</h3>
              <div className="flex flex-wrap gap-2">
                {skills.webDevelopment.map((skill, index) => (
                  <span key={index} className="px-3 py-1 bg-purple-500/20 text-purple-300 rounded-full text-sm">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
        
            {/* Databases & Cloud */}
            <div className="bg-gradient-to-br from-purple-900/20 to-black border border-purple-500/20 rounded-2xl p-8 backdrop-blur-sm hover:border-purple-500/50 transition-all duration-300">
              {/* <Database className="w-10 h-10 text-purple-500 mb-4" /> */}
              <h3 className="text-xl font-bold mb-4 text-purple-300">Databases & Cloud</h3>
              <div className="flex flex-wrap gap-2">
                {skills.databasesAndCloud.map((skill, index) => (
                  <span key={index} className="px-3 py-1 bg-purple-500/20 text-purple-300 rounded-full text-sm">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
        
            {/* Data Visualization */}
            <div className="bg-gradient-to-br from-purple-900/20 to-black border border-purple-500/20 rounded-2xl p-8 backdrop-blur-sm hover:border-purple-500/50 transition-all duration-300">
              {/* <BarChart3 className="w-10 h-10 text-purple-500 mb-4" /> */}
              <h3 className="text-xl font-bold mb-4 text-purple-300">Data Visualization</h3>
              <div className="flex flex-wrap gap-2">
                {skills.dataVisualization.map((skill, index) => (
                  <span key={index} className="px-3 py-1 bg-purple-500/20 text-purple-300 rounded-full text-sm">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
        
            {/* Soft Skills */}
            <div className="bg-gradient-to-br from-purple-900/20 to-black border border-purple-500/20 rounded-2xl p-8 backdrop-blur-sm hover:border-purple-500/50 transition-all duration-300">
              {/* <UserCheck className="w-10 h-10 text-purple-500 mb-4" /> */}
              <h3 className="text-xl font-bold mb-4 text-purple-300">Soft Skills</h3>
              <div className="flex flex-wrap gap-2">
                {skills.softSkills.map((skill, index) => (
                  <span key={index} className="px-3 py-1 bg-purple-500/20 text-purple-300 rounded-full text-sm">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>
      </section>


      {/* Experience Section */}
      <section className="py-24 px-6 max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold mb-16 text-center bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
          Internship
        </h2>
        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <div
              key={index}
              className="bg-gradient-to-br from-gray-900 to-black border border-purple-500/20 rounded-2xl p-8 hover:border-purple-500/50 transition-all duration-300 hover:shadow-lg hover:shadow-purple-500/10"
            >
              <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                <div>
                  <h3 className="text-2xl font-bold text-white mb-1">{exp.company}</h3>
                  <p className="text-purple-400 font-semibold">{exp.role}</p>
                </div>
                <span className="text-gray-500 text-sm mt-2 md:mt-0">{exp.period}</span>
              </div>
              <p className="text-gray-400">{exp.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Certificates & Education */}
      <section className="py-24 px-6 max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold mb-16 text-center bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
          Certificates & Education
        </h2>
        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-gradient-to-br from-purple-900/20 to-black border border-purple-500/20 rounded-2xl p-8 backdrop-blur-sm">
            <h3 className="text-xl font-bold mb-4 text-purple-300">Certifications</h3>
            <ul className="space-y-3">
              {certificates.map((cert, index) => (
                <li key={index} className="flex items-start gap-2 text-gray-300">
                  <span className="text-purple-500 mt-1">•</span>
                  {cert}
                </li>
              ))}
            </ul>
          </div>
          <div className="bg-gradient-to-br from-purple-900/20 to-black border border-purple-500/20 rounded-2xl p-8 backdrop-blur-sm">
            <h3 className="text-xl font-bold mb-4 text-purple-300">Education</h3>
            <div className="text-gray-300">
              <p className="font-semibold text-white mb-2">B.Tech – Computer Science</p>
              <p className="text-gray-400">Gyan Ganga Institute of Technology and Sciences, Jabalpur</p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-24 px-6 max-w-6xl mx-auto">
        <div className="bg-gradient-to-br from-purple-600/20 to-black border border-purple-500/30 rounded-3xl p-12 text-center backdrop-blur-sm">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
            Let's Collaborate
          </h2>
          <p className="text-xl text-gray-300 mb-12 max-w-2xl mx-auto">
            I'm always open to discussing new projects, creative ideas, or opportunities to be part of your vision.
          </p>
          <div className="flex flex-wrap justify-center gap-6 mb-8">
            <a
              href="mailto:aannuujj1012@gmail.com"
              className="group flex items-center gap-3 bg-purple-600 hover:bg-purple-700 text-white px-6 py-3 rounded-full transition-all duration-300 hover:shadow-lg hover:shadow-purple-500/50 hover:scale-105"
            >
              <Mail className="w-5 h-5" />
              Email Me
            </a>
            <a
              href="https://github.com/anujthakur-10"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center gap-3 bg-gray-800 hover:bg-gray-700 text-white px-6 py-3 rounded-full transition-all duration-300 hover:shadow-lg hover:shadow-gray-500/50 hover:scale-105"
            >
              <Github className="w-5 h-5" />
              GitHub
            </a>
            <a
              href="https://linkedin.com/in/anuj-singh-thakur-077b82245"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center gap-3 bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-full transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/50 hover:scale-105"
            >
              <Linkedin className="w-5 h-5" />
              LinkedIn
            </a>
          </div>
          <p className="text-gray-400">
            <a href="mailto:aannuujj1012@gmail.com" className="text-purple-400 hover:text-purple-300 transition-colors">
              aannuujj1012@gmail.com
            </a>
          </p>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-6 border-t border-purple-500/20 text-center text-gray-500">
        <p>© 2025 Anuj Singh Thakur. Designed with passion and precision.</p>
      </footer>
    </div>
  );
}

export default App;
