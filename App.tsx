import React from 'react';
import { 
  BookMarked, 
  Github, 
  Mail, 
  Instagram, 
  ExternalLink, 
  Star, 
  Circle, 
  Terminal, 
  ChevronRight,
  Database,
  Coffee,
  Leaf,
  FileJson,
  Globe,
  Palette,
  Code
} from 'lucide-react';
import { HERO_DATA, PROJECTS, SOCIAL_LINKS, ABOUT_DATA, TECH_STACK } from './constants';
import GitHubStats from './components/GitHubStats';
import AIChat from './components/AIChat';

// Helper to render dynamic icons
const TechIcon = ({ name, color }: { name: string, color: string }) => {
  const size = 20;
  switch (name) {
    case 'Coffee': return <Coffee size={size} color={color} />;
    case 'Leaf': return <Leaf size={size} color={color} />;
    case 'Database': return <Database size={size} color={color} />;
    case 'FileJson': return <FileJson size={size} color={color} />;
    case 'Globe': return <Globe size={size} color={color} />;
    case 'Palette': return <Palette size={size} color={color} />;
    default: return <Code size={size} color={color} />;
  }
};

function App() {
  return (
    <div className="min-h-screen bg-background text-slate-300 selection:bg-primary/30 selection:text-white pb-20 font-sans">
      
      {/* Header / Navigation */}
      <header className="fixed top-0 w-full z-40 bg-background/90 backdrop-blur-md border-b border-slate-800/50">
        <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
          <div className="flex items-center gap-2 text-slate-100 font-bold text-lg tracking-tight">
            <Terminal size={20} className="text-primary" />
            <span>antonio.dev</span>
          </div>
          <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-slate-400">
            <a href="#about" className="hover:text-primary transition-colors">Sobre</a>
            <a href="#projects" className="hover:text-primary transition-colors">Projetos</a>
            <a href="#contact" className="hover:text-primary transition-colors">Contato</a>
          </nav>
        </div>
      </header>

      <main className="max-w-5xl mx-auto px-6 pt-32 md:pt-40">
        
        {/* Hero Section */}
        <section className="mb-32 animate-in fade-in slide-in-from-bottom-4 duration-700">
          <div className="max-w-3xl">
            <p className="text-primary font-medium mb-4 tracking-wide text-sm md:text-base">
              {HERO_DATA.greeting}
            </p>
            
            <h1 className="text-4xl md:text-6xl font-bold text-white tracking-tight leading-tight mb-6">
              {HERO_DATA.role}
            </h1>
            
            <p className="text-xl text-slate-400 leading-relaxed mb-8 max-w-2xl">
              {HERO_DATA.slogan}
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <a 
                href="#projects" 
                className="inline-flex items-center justify-center gap-2 bg-primary hover:bg-blue-600 text-white font-medium px-8 py-3.5 rounded-full transition-all shadow-lg shadow-blue-500/20 hover:shadow-blue-500/30 hover:-translate-y-1"
              >
                Ver Projetos
                <ChevronRight size={18} />
              </a>
              <div className="flex items-center gap-3 px-4">
                {SOCIAL_LINKS.map((link) => (
                   <a 
                    key={link.platform}
                    href={link.url}
                    target="_blank"
                    rel="noreferrer"
                    className="p-2 text-slate-400 hover:text-white hover:bg-slate-800 rounded-full transition-all"
                    aria-label={link.platform}
                   >
                     {link.icon === 'github' && <Github size={20} />}
                     {link.icon === 'instagram' && <Instagram size={20} />}
                     {link.icon === 'mail' && <Mail size={20} />}
                   </a>
                 ))}
              </div>
            </div>
          </div>
        </section>

        {/* About Section */}
        <section id="about" className="mb-32 scroll-mt-24">
          <div className="grid md:grid-cols-2 gap-12 items-start">
            <div className="space-y-6">
              <h2 className="text-2xl font-bold text-white flex items-center gap-2">
                <span className="text-primary">01.</span> Sobre Mim
              </h2>
              <p className="text-slate-400 leading-relaxed text-lg">
                {ABOUT_DATA.text}
              </p>
              
              <div className="pt-4">
                <h3 className="text-sm font-semibold text-slate-200 uppercase tracking-wider mb-4">Tech Stack</h3>
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                  {TECH_STACK.map((tech) => (
                    <div key={tech.name} className="flex items-center gap-2 bg-surface/50 border border-slate-700/50 rounded px-3 py-2 text-sm text-slate-300">
                      <TechIcon name={tech.iconName} color={tech.color} />
                      <span>{tech.name}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* GitHub Stats as visual proof of work */}
            <div className="bg-surface/30 border border-slate-800 rounded-xl p-1 shadow-2xl">
               <GitHubStats />
            </div>
          </div>
        </section>

        {/* Projects Grid */}
        <section id="projects" className="mb-32 scroll-mt-24">
          <h2 className="text-2xl font-bold text-white mb-10 flex items-center gap-2">
             <span className="text-primary">02.</span> Projetos em Destaque
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {PROJECTS.map((project, index) => (
              <div 
                key={project.title}
                className="group relative bg-surface border border-slate-800 rounded-xl p-6 hover:border-primary/50 transition-all duration-300 hover:shadow-xl hover:shadow-primary/5 flex flex-col h-full hover:-translate-y-1"
              >
                <div className="flex items-center justify-between mb-4">
                  <div className="p-3 bg-slate-900 rounded-lg text-primary group-hover:bg-primary group-hover:text-white transition-colors">
                     {project.language === 'Java' ? <Coffee size={24} /> : <Code size={24} />}
                  </div>
                  <div className="flex gap-3">
                    {project.stars && (
                      <div className="flex items-center gap-1 text-slate-500 text-xs font-mono">
                        <Star size={14} />
                        {project.stars}
                      </div>
                    )}
                    <a href={project.link} target="_blank" rel="noreferrer" className="text-slate-400 hover:text-white transition-colors">
                       <ExternalLink size={20} />
                    </a>
                  </div>
                </div>
                
                <h3 className="text-xl font-bold text-slate-100 mb-3 group-hover:text-primary transition-colors">
                  {project.title}
                </h3>
                
                <p className="text-sm text-slate-400 mb-6 flex-1 leading-relaxed">
                  {project.description}
                </p>
                
                <div className="flex items-center gap-3 text-xs font-mono mt-auto pt-4 border-t border-slate-800">
                  <span className="flex items-center gap-1.5 text-slate-300">
                    <Circle size={10} fill={project.languageColor} stroke="none" />
                    {project.language}
                  </span>
                  <span className="ml-auto px-2 py-0.5 rounded-full border border-slate-700 text-slate-500 bg-background/50">
                    {project.visibility}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Contact Footer */}
        <section id="contact" className="max-w-2xl mx-auto text-center py-12 mb-12">
           <h2 className="text-primary font-mono text-sm mb-4">03. O que vem agora?</h2>
           <h3 className="text-3xl md:text-4xl font-bold text-white mb-6">Vamos Conversar?</h3>
           <p className="text-slate-400 mb-10 leading-relaxed">
             Estou atualmente aberto a novas oportunidades, colaborações em projetos e novos desafios de aprendizado.
             Se você tem uma pergunta ou apenas quer dar um oi, minha caixa de entrada está sempre aberta!
           </p>
           
           <a 
            href={`mailto:${SOCIAL_LINKS.find(l => l.platform === 'Gmail')?.username}`} 
            className="inline-flex items-center gap-3 bg-transparent border border-primary text-primary hover:bg-primary/10 font-medium px-8 py-4 rounded-lg transition-colors"
           >
             <Mail size={20} />
             Dizer Olá
           </a>
        </section>

        <footer className="border-t border-slate-800/50 pt-8 flex flex-col md:flex-row justify-between items-center text-xs text-slate-500 gap-4">
           <p>© {new Date().getFullYear()} Antonio Silva. Feito com React & Tailwind.</p>
           <div className="flex gap-6">
              {SOCIAL_LINKS.map(link => (
                <a key={link.platform} href={link.url} target="_blank" rel="noreferrer" className="hover:text-primary transition-colors">
                  {link.platform}
                </a>
              ))}
           </div>
        </footer>

      </main>
      
      {/* Floating AI Assistant */}
      <AIChat />
    </div>
  );
}

export default App;