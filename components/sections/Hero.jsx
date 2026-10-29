import Image from "next/image";
import profilePhoto from "@/app/assets/profile.jpg";
import { ArrowUpRight, ArrowRight, Braces, Code2, Sparkles } from "lucide-react";
import Badge from "@/components/ui/Badge";
import Button from "@/components/ui/Button";
import Container from "@/components/ui/Container";
import Reveal from "@/components/ui/Reveal";
import { site } from "@/config/site";

const tech = [["JS", "JS"], ["Node.js", "N"], ["React", "⚛"], ["Next.js", "N"], ["Vue.js", "V"], ["TypeScript", "TS"], ["Tailwind", "≈"], ["Git", "⌘"]];

export default function Hero() {
  return <section id="home" className="hero-section"><Container className="hero-grid">
    <div className="hero-copy"><Reveal>
      <Badge>I’M A FRONTEND DEVELOPER</Badge>
      <h1>Hi, I’m <span className="gradient-text">Marie-Grace</span><span className="hero-period">.</span></h1>
      <p className="hero-lead">I build modern interfaces for the web<span className="gradient-text">.</span></p>
      <p className="hero-description">I craft accessible, high-performing web experiences that help ideas grow and make everyday tasks easier.</p>
      <div className="hero-actions"><Button href="#projects">View My Work <ArrowRight size={17}/></Button><Button href={site.cv} variant="outline" target="_blank" rel="noopener noreferrer">Get my resume <ArrowUpRight size={16}/></Button></div>
      <div className="tech-row"><span className="tech-label">TECHNOLOGIES I WORK WITH</span><div className="tech-list">{tech.map(([name,mark])=><span className="tech-item" key={name} title={name}><i>{mark}</i>{name}</span>)}</div></div>
    </Reveal></div>
    <Reveal delay={.12} className="hero-art-wrap"><div className="hero-orb"><div className="orb-ring ring-one"/><div className="orb-ring ring-two"/><div className="portrait-placeholder"><Image src={profilePhoto} alt="Marie-Grace, frontend developer" fill priority sizes="(max-width: 650px) 195px, 230px" className="profile-photo"/><span className="portrait-glint"><Sparkles size={18}/></span></div><span className="orbit-dot dot-one"/><span className="orbit-dot dot-two"/></div>
      <div className="code-card"><div className="code-top"><span className="code-lights"><i/><i/><i/></span><span>developer.js</span><Braces size={14}/></div><pre><span className="code-muted">const</span> developer = {`{`}{"\n"}  name: <b>'Marie-Grace'</b>,{"\n"}  role: <b>'Frontend dev'</b>,{"\n"}  loves: [<b>'teamwork'</b>, <b>'learning new things'</b>]{"\n"}{`}`};</pre><div className="code-status"><span/> Available for new projects</div></div>
    </Reveal>
  </Container></section>;
}
